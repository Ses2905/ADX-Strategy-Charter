#!/usr/bin/env python3
"""Structural check on the deck file.

The layout suite renders the deck in a browser and measures it, which means it
cannot see a malformed *document*: browsers ignore stray closing tags and keep
parsing, so a deck carrying two `</html>` blocks renders identically to one
carrying the right number. That is not hypothetical — a merge once left a
duplicated tail between slides 69 and 70, stranding the last slide after the
first `</html>`, and every layout checker passed.

This checks the things a renderer will forgive and a reviewer will not.

    python3 tools/checkdeck.py "Advertiser Experience Strategy.dc.html"
"""
import re
import sys

SINGLETONS = ('<x-dc>', '</x-dc>', '<body>', '</body>', '</html>',
              '<deck-nav>', 'data-dc-script', '<helmet>', '</helmet>')


def check(path):
    html = open(path, encoding='utf-8').read()
    fails = []

    for tok in SINGLETONS:
        n = html.count(tok)
        if n != 1:
            fails.append('%s appears %d times, expected exactly 1' % (tok, n))

    labels = [int(x) for x in re.findall(r'data-screen-label="(\d+)"', html)]
    if labels != list(range(1, len(labels) + 1)):
        gaps = [i + 1 for i, v in enumerate(labels) if v != i + 1]
        fails.append('slide numbers are not 1..%d in order; first break at '
                     'position %s' % (len(labels), gaps[:5]))

    opens = len(re.findall(r'<section\b', html))
    closes = html.count('</section>')
    if opens != closes:
        fails.append('%d <section> vs %d </section>' % (opens, closes))
    if opens != len(labels):
        fails.append('%d sections but %d carry data-screen-label' % (opens, len(labels)))

    # Nothing may follow the last </section> except the tail, and the tail is
    # where </x-dc> and </html> live — so a section after them is the exact
    # failure described above.
    last_close = html.rfind('</section>')
    for tok in ('</x-dc>', '</html>', '</body>'):
        if 0 <= html.find(tok) < last_close:
            fails.append('%s appears before the last </section> — a slide is '
                         'stranded after the document tail' % tok)

    # The appendix toggle label is written by hand and does not compute itself.
    want = 'slides 62&#8211;%d' % len(labels)
    if want not in html and want.replace('&#8211;', '–') not in html:
        fails.append('appendix toggle label does not read "62-%d" — it is a '
                     'literal, not a computed range' % len(labels))

    print('%s — %d slides' % (path, len(labels)))
    for f in fails:
        print('  FAIL  ' + f)
    if not fails:
        print('  structure: clean')
    return 1 if fails else 0


if __name__ == '__main__':
    sys.exit(check(sys.argv[1] if len(sys.argv) > 1
                   else 'Advertiser Experience Strategy.dc.html'))

"""Extract slide text + speaker notes from a .pptx in presentation order.

Usage: python3 tools/dump_deck.py <unzipped_pptx_dir>/ <out.md>
"""
import re, os, zipfile
from xml.etree import ElementTree as ET
B=sys.argv[1] if len(sys.argv)>1 else 'build/x/'
ns={'a':'http://schemas.openxmlformats.org/drawingml/2006/main',
    'p':'http://schemas.openxmlformats.org/presentationml/2006/main',
    'r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
pres=ET.parse(B+'ppt/presentation.xml').getroot()
rels=ET.parse(B+'ppt/_rels/presentation.xml.rels').getroot()
rmap={c.get('Id'):c.get('Target') for c in rels}
order=[]
for s in pres.find('p:sldIdLst',ns):
    order.append(rmap[s.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')].split('/')[-1])
out=[]
for i,fn in enumerate(order,1):
    root=ET.parse(B+'ppt/slides/'+fn).getroot()
    lines=[]
    for sp in root.iter():
        if sp.tag.endswith('}p'):
            t=''.join(n.text or '' for n in sp.iter() if n.tag.endswith('}t'))
            t=t.strip()
            if t: lines.append(t)
    # notes
    nf=B+'ppt/slides/_rels/'+fn+'.rels'
    notes=''
    if os.path.exists(nf):
        nr=ET.parse(nf).getroot()
        for c in nr:
            if 'notesSlide' in (c.get('Type') or ''):
                p=os.path.normpath(B+'ppt/slides/'+c.get('Target'))
                nroot=ET.parse(p).getroot()
                nl=[]
                for sp in nroot.iter():
                    if sp.tag.endswith('}p'):
                        t=''.join(n.text or '' for n in sp.iter() if n.tag.endswith('}t')).strip()
                        if t: nl.append(t)
                notes=' | '.join(nl)
    out.append(f"=== SLIDE {i} ({fn}) ===\n"+"\n".join(lines)+(f"\n[NOTES] {notes}" if notes else ""))
open(sys.argv[2] if len(sys.argv)>2 else 'deck_text.md','w').write("\n\n".join(out))
print(len(order),"slides dumped")

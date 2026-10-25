\
#!/usr/bin/env python3
"""Optional image migration pipeline.
Downloads current image URLs from menu.json and writes optimized WebP variants.
Run in an environment with internet access: python optimize_images.py
Then host ./images/ and update menu.json image paths before deployment.
"""
import json, re, urllib.request
from pathlib import Path
from io import BytesIO
from PIL import Image
ROOT=Path(__file__).parent
data=json.loads((ROOT/'menu.json').read_text(encoding='utf-8'))
out=ROOT/'images'; out.mkdir(exist_ok=True)
seen={}
for item in data.get('items',[]):
    url=item.get('image')
    if not url or not url.startswith(('https://','http://')): continue
    if url in seen:
        item['image']=seen[url]; continue
    try:
        req=urllib.request.Request(url,headers={'User-Agent':'RedRoostersImageOptimizer/1.0'})
        with urllib.request.urlopen(req,timeout=20) as r: raw=r.read()
        im=Image.open(BytesIO(raw)).convert('RGB')
        stem=re.sub(r'[^a-zA-Z0-9_-]+','-',item['id']).strip('-') or 'image'
        desktop=im.copy(); desktop.thumbnail((1200,1200))
        mobile=im.copy(); mobile.thumbnail((640,640))
        p1=out/(stem+'-desktop.webp'); p2=out/(stem+'-mobile.webp')
        desktop.save(p1,'WEBP',quality=82,method=6)
        mobile.save(p2,'WEBP',quality=78,method=6)
        rel='./images/'+p1.name
        item['image']=rel; item['imageMobile']='./images/'+p2.name
        seen[url]=rel
        print('OK',url,'->',p1.name,p2.name)
    except Exception as e:
        print('SKIP',url,repr(e))
(ROOT/'menu.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')

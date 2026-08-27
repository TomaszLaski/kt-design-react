"""Extract base64 media from vizco-index.html into public/work."""
import base64
import re
from pathlib import Path

SRC = Path(r"c:\Users\Tomasz\Downloads\vizco-index.html")
OUT = Path(r"F:\Firma\kt-design-react\public")
WORK = OUT / "work"
WORK.mkdir(parents=True, exist_ok=True)

text = SRC.read_text(encoding="utf-8", errors="ignore")

pattern = re.compile(
    r"src=\"(data:(image|video)/([a-zA-Z0-9.+-]+);base64,([A-Za-z0-9+/=\s]+))\""
)

ext_map = {
    "jpeg": "jpg",
    "jpg": "jpg",
    "png": "png",
    "webp": "webp",
    "gif": "gif",
    "mp4": "mp4",
    "webm": "webm",
}

names = [
    "logo.png",  # first image is the hero logo
    "interior-1.jpg",
    "interior-2.jpg",
    "interior-3.jpg",
    "interior-4.jpg",
    "product-1.jpg",
    "product-2.jpg",
    "packshot-studio.jpg",
    "packshot-plener.jpg",
    "brand-1.jpg",
    "brand-2.jpg",
    "brand-wide.jpg",
    "reel.mp4",
]

matches = list(pattern.finditer(text))
print(f"Found {len(matches)} media URIs")

for i, m in enumerate(matches):
    kind, fmt, b64 = m.group(2), m.group(3).lower(), m.group(4)
    ext = ext_map.get(fmt, fmt.split("+")[0])
    raw = base64.b64decode(re.sub(r"\s+", "", b64))
    if i < len(names):
        name = names[i]
        # logo goes to public root
        dest = OUT / name if name == "logo.png" else WORK / name
    else:
        dest = WORK / f"extra-{i}.{ext}"
    dest.write_bytes(raw)
    print(f"{i:02d} {dest.name:24s} {len(raw)/1024:10.1f} KB  {kind}/{fmt}")

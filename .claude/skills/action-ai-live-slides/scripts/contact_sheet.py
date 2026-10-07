#!/usr/bin/env python3
"""Join slide screenshots two per image (1200px wide) so they are quick to review.
Usage: python3 contact_sheet.py SHOTS_DIR   ->  SHOTS_DIR/pair1.jpg, pair2.jpg, ..."""
import glob, os, sys
from PIL import Image
d = sys.argv[1]
shots = sorted(glob.glob(os.path.join(d, 's[0-9][0-9].png')))
for k in range(0, len(shots), 2):
    group = shots[k:k + 2]
    sheet = Image.new('RGB', (1200, 675 * len(group)), 'white')
    for j, f in enumerate(group):
        sheet.paste(Image.open(f).convert('RGB').resize((1200, 675)), (0, 675 * j))
    out = os.path.join(d, 'pair%d.jpg' % (k // 2 + 1))
    sheet.save(out, quality=88)
    print(out)

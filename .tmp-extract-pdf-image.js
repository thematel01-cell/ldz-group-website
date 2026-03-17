const fs = require('fs');
const zlib = require('zlib');
const pdfPath = 'c:/Users/LDZ/Downloads/LDZ_Group_Technology_Map_Version2_A1_Print-2.pdf';
const outPath = 'c:/Users/LDZ/Downloads/websitetest/pdf-extracted.ppm';
const data = fs.readFileSync(pdfPath, 'latin1');
const match = data.match(/3 0 obj[\s\S]*?stream\r?\n([\s\S]*?)endstream/);
if (!match) throw new Error('Image stream not found');
const ascii85 = match[1].trim();
function decodeASCII85(str) {
  const out = [];
  let group = [];
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (/\s/.test(ch)) continue;
    if (ch === '~') break;
    if (ch === 'z' && group.length === 0) {
      out.push(0,0,0,0);
      continue;
    }
    group.push(ch.charCodeAt(0) - 33);
    if (group.length === 5) {
      let num = 0;
      for (const v of group) num = num * 85 + v;
      out.push((num >>> 24) & 255, (num >>> 16) & 255, (num >>> 8) & 255, num & 255);
      group = [];
    }
  }
  if (group.length > 0) {
    const origLen = group.length;
    while (group.length < 5) group.push(84);
    let num = 0;
    for (const v of group) num = num * 85 + v;
    const bytes = [(num >>> 24) & 255, (num >>> 16) & 255, (num >>> 8) & 255, num & 255];
    out.push(...bytes.slice(0, origLen - 1));
  }
  return Buffer.from(out);
}
const decoded = decodeASCII85(ascii85);
const inflated = zlib.inflateSync(decoded);
const width = 1024;
const height = 1536;
const header = Buffer.from(`P6\n${width} ${height}\n255\n`, 'ascii');
fs.writeFileSync(outPath, Buffer.concat([header, inflated]));
console.log('written', outPath, inflated.length);

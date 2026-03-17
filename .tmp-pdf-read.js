const fs = require('fs');
const { PDFParse } = require('pdf-parse');
const path = 'c:/Users/LDZ/Downloads/LDZ_Group_Technology_Map_Version2_A1_Print-2.pdf';
(async () => {
  const parser = new PDFParse({ data: fs.readFileSync(path) });
  const text = await parser.getText();
  console.log('---TEXT START---');
  console.log(text.text);
  console.log('---TEXT END---');
  await parser.destroy();
})();

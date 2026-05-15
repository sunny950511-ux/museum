const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/308/.mcp-figma/cache/file_nodes_DxjuKOxdy13xegJxIXxLda_1778567618009.json'));
function dump(n, indent) {
  let box = n.absoluteBoundingBox ? `[w:${n.absoluteBoundingBox.width}, h:${n.absoluteBoundingBox.height}]` : '';
  let txt = n.characters ? ` "${n.characters.replace(/\n/g, '\\n')}"` : '';
  let fills = '';
  if (n.fills) {
    n.fills.forEach(f => {
      if(f.type === 'IMAGE' && f.imageRef) fills += ` [Img: ${f.imageRef}]`;
      if(f.type === 'SOLID' && f.color) fills += ` [Color: rgba(${Math.round(f.color.r*255)},${Math.round(f.color.g*255)},${Math.round(f.color.b*255)},${Math.round(f.color.a*100)/100})]`;
    });
  }
  console.log(indent + n.name + ' (' + n.type + ') ' + box + txt + fills);
  if (n.children) n.children.forEach(c => dump(c, indent + '  '));
}
dump(data.nodes['45:1032'].document, '');

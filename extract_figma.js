const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:\\Users\\308\\.mcp-figma\\cache\\file_nodes_DxjuKOxdy13xegJxIXxLda_1778557226287.json', 'utf8'));

const colors = new Set();
const typography = new Set();
const radiuses = new Set();
const effects = new Set();

function traverse(node) {
    if (!node) return;
    
    // Colors
    if (node.fills) {
        node.fills.forEach(fill => {
            if (fill.type === 'SOLID' && fill.color) {
                const { r, g, b, a } = fill.color;
                const rInt = Math.round(r * 255);
                const gInt = Math.round(g * 255);
                const bInt = Math.round(b * 255);
                colors.add(`rgba(${rInt}, ${gInt}, ${bInt}, ${Math.round(a * 100) / 100})`);
            }
        });
    }
    if (node.strokes) {
        node.strokes.forEach(stroke => {
            if (stroke.type === 'SOLID' && stroke.color) {
                const { r, g, b, a } = stroke.color;
                const rInt = Math.round(r * 255);
                const gInt = Math.round(g * 255);
                const bInt = Math.round(b * 255);
                colors.add(`rgba(${rInt}, ${gInt}, ${bInt}, ${Math.round(a * 100) / 100})`);
            }
        });
    }

    // Typography
    if (node.type === 'TEXT' && node.style) {
        const { fontFamily, fontWeight, fontSize, lineHeightPx, letterSpacing } = node.style;
        typography.add(`Font: ${fontFamily}, Weight: ${fontWeight}, Size: ${fontSize}px, LineHeight: ${Math.round(lineHeightPx)}px`);
    }

    // Radius
    if (node.cornerRadius !== undefined) {
        radiuses.add(`CornerRadius: ${node.cornerRadius}`);
    } else if (node.rectangleCornerRadii) {
        radiuses.add(`CornerRadii: ${node.rectangleCornerRadii.join(',')}`);
    }

    // Effects
    if (node.effects && node.effects.length > 0) {
        node.effects.forEach(eff => {
            if (eff.type === 'DROP_SHADOW' || eff.type === 'INNER_SHADOW') {
                effects.add(`${eff.type} - offset: ${eff.offset.x},${eff.offset.y}, radius: ${eff.radius}, color: rgba(${Math.round(eff.color.r*255)}, ${Math.round(eff.color.g*255)}, ${Math.round(eff.color.b*255)}, ${Math.round(eff.color.a*100)/100})`);
            }
        });
    }

    if (node.children) {
        node.children.forEach(traverse);
    }
}

Object.values(data.nodes).forEach(n => traverse(n.document));

console.log('--- Colors ---');
colors.forEach(c => console.log(c));
console.log('\n--- Typography ---');
typography.forEach(t => console.log(t));
console.log('\n--- Radiuses ---');
radiuses.forEach(r => console.log(r));
console.log('\n--- Effects ---');
effects.forEach(e => console.log(e));

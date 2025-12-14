const fs = require('fs');
const content = fs.readFileSync('functions/src/data/products.csv', 'utf-8');
const lines = content.split('\n').slice(1).filter(l => l.trim());

lines.forEach((line, i) => {
    // The regex from productService.ts
    const match = line.match(/^(.*),"([^"]+)",([^,]*),([^,]*),([^,]*),([^,]*),([^,]*)$/);
    if (!match) {
        console.log(`Line ${i + 2} failed regex: ${line}`);
    }
});

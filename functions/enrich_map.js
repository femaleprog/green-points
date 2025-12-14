const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mapData.ts');
const RESTAURANT_ITEMS = [
    'Vegan Cheeseburger', 'Buddha Bowl', 'Pad Thai Tofu', 'Vegan Pizza Royale', 'Avocado Toast',
    'Lentil Soup', 'Quinoa Salad', 'Sweet Potato Fries', 'Vegan Sushi', 'Tofu Curry',
    'Seitan Stir Fry', 'Vegan Lasagna', 'Falafel Wrap', 'Acai Bowl', 'Vegan Tacos',
    'Mushroom Risotto', 'Poke Bowl', 'Vegan Hot Dog', 'Cauliflower Wings', 'Vegan Nachos'
];

const GROCERY_ITEMS = [
    'Violife Cheese', 'Alpro Milk', 'Beyond Meat', 'Heura Chicken', 'Oatley Barista',
    'Vegan Pizza', 'Hummus', 'Falafel Mix', 'Tofu Rossy', 'Seitan steak',
    'Tempeh', 'Vegan Mayo', 'Rice Milk', 'Almond Yogurt', 'Vegan Cookies',
    'Dark Chocolate', 'Quinoa', 'Lentils', 'Chickpeas', 'Nutritional Yeast'
];

function getRandomItems(pool, count) {
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function processBlock(block, itemsPool) {
    // Basic parser: split by "}," to identify objects approx
    // This assumes standard formatting in the file
    let lines = block.split('\n');
    let newLines = [];

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.trim().startsWith('{')) {
            // Start of an object
            const rewardsCount = Math.floor(Math.random() * 8) + 3; // 3 to 10
            const inventory = getRandomItems(itemsPool, 5);

            newLines.push(line);
            newLines.push(`        "rewardsCount": ${rewardsCount},`);
            newLines.push(`        "inventory": ${JSON.stringify(inventory)},`);
        } else {
            newLines.push(line);
        }
    }
    return newLines.join('\n');
}

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Process RESTAURANTS
    content = content.replace(/(export const RESTAURANTS: Restaurant\[\] = \[)([\s\S]*?)(\];)/, (match, header, body, footer) => {
        console.log("Processing RESTAURANTS...");
        return header + processBlock(body, RESTAURANT_ITEMS) + footer;
    });

    // Process GROCERY_STORES
    content = content.replace(/(export const GROCERY_STORES: GroceryStore\[\] = \[)([\s\S]*?)(\];)/, (match, header, body, footer) => {
        console.log("Processing GROCERY_STORES...");
        return header + processBlock(body, GROCERY_ITEMS) + footer;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Successfully enriched mapData.ts");
} catch (e) {
    console.error("Error:", e);
}

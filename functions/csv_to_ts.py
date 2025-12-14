import csv
import json

CSV_PATH = 'src/data/products.csv'
TS_PATH = '../src/data/realProducts.ts'

# Read CSV
products = []
try:
    with open(CSV_PATH, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Clean up keys if necessary (strip spaces)
            clean_row = {k.strip(): v.strip() for k, v in row.items() if k}
            
            # Map to our interface: name, price, store, url, image
            if clean_row.get('name'):
                products.append({
                    'id': f"prod_{len(products)}",
                    'name': clean_row.get('name', 'Unknown'),
                    'price': clean_row.get('price', ''),
                    'store': clean_row.get('store', 'Unknown'),
                    'url': clean_row.get('url', '#'),
                    'image': clean_row.get('image', '')
                })

    # Write TS file
    ts_content = f"// Auto-generated from products.csv\n"
    ts_content += "export interface RealProduct {\n"
    ts_content += "    id: string;\n"
    ts_content += "    name: string;\n"
    ts_content += "    price: string;\n"
    ts_content += "    store: string;\n"
    ts_content += "    url: string;\n"
    ts_content += "    image: string;\n"
    ts_content += "}\n\n"
    ts_content += "export const REAL_PRODUCTS: RealProduct[] = " + json.dumps(products, indent=4, ensure_ascii=False) + ";\n"

    with open(TS_PATH, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print(f"Successfully converted {len(products)} products to {TS_PATH}")

except Exception as e:
    print(f"Error: {e}")

from bs4 import BeautifulSoup
import pandas as pd
import re

# Fichier source (celui que vous avez créé avec le copier-coller)
INPUT_FILE = "carrefour_raw.html"
OUTPUT_FILE = "products_carrefour.csv"

def extract_products():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, "html.parser")
    
    # On cherche tous les articles (cartes produits)
    # Le sélecteur générique pour les listes Carrefour semble être 'article'
    articles = soup.find_all("article")
    
    print(f"🔍 Trouvé {len(articles)} articles potentiels...")
    
    data = []

    for article in articles:
        try:
            # 1. NOM
            # Cherche dans les titres h2 ou h3 avec la classe spécifique
            title_tag = article.select_one(".product-card-title__text")
            name = title_tag.get_text(strip=True) if title_tag else "Nom Inconnu"

            # 2. PRIX
            # Le prix est souvent éclaté (ex: <span>2</span><span>,65</span><span>€</span>)
            price_container = article.select_one(".product-price__amount--main")
            if price_container:
                # On recolle tous les textes des enfants
                price_text = "".join([t.get_text(strip=True) for t in price_container.find_all("p")])
                # Nettoyage : "2,65€" -> 2.65
                price = price_text.replace("€", "").replace(",", ".").strip()
            else:
                price = "0"

            # 3. PRIX AU KILO (Crucial pour votre algo)
            # Cherche le texte "XX.XX € / KG"
            # Carrefour utilise souvent une classe qui finit par 'per-unit-label'
            unit_price_tag = article.select_one("[class*='per-unit-label']")
            if unit_price_tag:
                unit_price_raw = unit_price_tag.get_text(strip=True)
                # On extrait juste le chiffre (ex: "12.80")
                match = re.search(r"([\d,]+)", unit_price_raw)
                if match:
                    price_kg = match.group(1).replace(",", ".")
                else:
                    price_kg = "0"
            else:
                price_kg = "0"

            # 4. IMAGE
            img_tag = article.select_one("img.product-card-image-new__content")
            image_url = img_tag['src'] if img_tag else ""

            # 5. URL PRODUIT
            link_tag = article.select_one("a.product-card-click-wrapper")
            if link_tag:
                raw_href = link_tag['href']
                if raw_href.startswith("http"):
                    product_url = raw_href
                else:
                    product_url = "https://www.carrefour.fr" + raw_href
            else:
                product_url = ""

            # On ajoute seulement si on a un nom valide
            if name != "Nom Inconnu":
                # Add price per kg to name for visibility in MVP
                if price_kg and price_kg != "0":
                    display_name = f"{name} ({price_kg} €/kg)"
                else:
                    display_name = name

                data.append({
                    "name": display_name,
                    "price": f"{price} €",
                    "store": "Carrefour",
                    "url": product_url,
                    "image": image_url if image_url.startswith("http") else "" # Skip local images for now as they break
                })

        except Exception as e:
            print(f"⚠️ Erreur sur un produit : {e}")
            continue

    # Export en CSV
    if data:
        df = pd.DataFrame(data)
        # On nettoie les doublons éventuels
        df = df.drop_duplicates(subset=['name'])
        
        # Match server.ts format: name,price,store,url,image (comma separated, quoted where needed)
        # Pandas to_csv with quoting=1 (QUOTE_ALL) gives "val","val"...
        # Server regex expects: "^"(.*?)","(.*?)",(.*),(.*),(.*)$" -> Quoted name/price, unquoted rest?
        # Actually server regex: /^"(.*?)","(.*?)",(.*),(.*),(.*)$/
        # Group 1 (Name) and 2 (Price) MUST be quoted. 3,4,5 unquoted.
        # Let's just generate the CSV string manually to be safe or use quoting options carefully.
        
        with open("products.csv", "a", encoding="utf-8") as f:
             # Loop and append
             count = 0
             for _, row in df.iterrows():
                 # Escape quotes in content
                 safe_name = row['name'].replace('"', '""')
                 safe_price = row['price'].replace('"', '""')
                 line = f'"{safe_name}","{safe_price}",{row["store"]},{row["url"]},{row["image"]}\n'
                 f.write(line)
                 count += 1
        
        print(f"✅ SUCCÈS ! {count} produits ajoutés à 'products.csv'")
    else:
        print("❌ Aucun produit extrait. Vérifiez le fichier HTML source.")

if __name__ == "__main__":
    extract_products()
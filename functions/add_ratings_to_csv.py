import pandas as pd
import random
import os

csv_path = 'src/data/products.csv'

if os.path.exists(csv_path):
    try:
        df = pd.read_csv(csv_path)
        
        # Round 3.5 to 5.0
        df['rating'] = [round(random.uniform(3.5, 5.0), 1) for _ in range(len(df))]
        df['reviewCount'] = [random.randint(10, 500) for _ in range(len(df))]
        
        df.to_csv(csv_path, index=False)
        print(f"Updated {csv_path} with rating and reviewCount columns.")
    except Exception as e:
        print(f"Error processing {csv_path}: {e}")
else:
    print(f"File not found: {csv_path}")

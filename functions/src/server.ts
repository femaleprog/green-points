import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { loadDb } from './services/productService';
import { searchController } from './controllers/search';

dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Initialize DB
loadDb();

// Routes
import { getFeaturedProducts } from './services/productService';

// ... existing code ...

// Routes
app.post('/search', searchController);
app.get('/products/featured', (req, res) => {
    const products = getFeaturedProducts(10); // Get 10 random products
    res.json(products);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Agent Server running on port ${PORT}`);
});

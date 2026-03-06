import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// GET /api/products — list products with optional filters
router.get('/', async (req, res) => {
    try {
        const { category, featured, isNew, limit, gender, search } = req.query;
        let query = {};

        if (category) query.category = category;
        if (gender) query.gender = gender;
        if (featured === 'true') query.featured = true;
        if (isNew === 'true') query.isNew = true;

        let productsQuery;
        if (search) {
            query.$text = { $search: search };
            productsQuery = Product.find(query, { score: { $meta: 'textScore' } }).sort({ score: { $meta: 'textScore' } });
        } else {
            productsQuery = Product.find(query).sort({ createdAt: -1 });
        }

        const parsedLimit = parseInt(limit);
        if (parsedLimit > 0) productsQuery = productsQuery.limit(parsedLimit);

        const result = await productsQuery.lean();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET /api/products/:id — single product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean();
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;

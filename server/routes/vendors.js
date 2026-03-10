import express from 'express';
import Vendor from '../models/Vendor.js';

const router = express.Router();

// POST /api/vendors - Save a new vendor application
router.post('/', async (req, res) => {
    try {
        const {
            brandName,
            firstName,
            lastName,
            email,
            phone,
            category,
            message
        } = req.body;

        // Basic validation
        if (!brandName || !firstName || !lastName || !email || !category) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        const newVendor = new Vendor({
            brandName,
            firstName,
            lastName,
            email,
            phone,
            category,
            message
        });

        await newVendor.save();
        res.status(201).json({ success: true, message: 'Vendor application received' });

    } catch (error) {
        console.error('Error saving vendor:', error);
        res.status(500).json({ success: false, message: 'Failed to submit application. Please try again later.' });
    }
});

// GET /api/vendors - List all applications (publicly accessible for now to help development)
router.get('/', async (req, res) => {
    try {
        const vendors = await Vendor.find().sort({ createdAt: -1 });
        res.json(vendors);
    } catch (error) {
        console.error('Error fetching vendors:', error);
        res.status(500).json({ message: 'Error fetching applications' });
    }
});

export default router;

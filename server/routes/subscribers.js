import express from 'express';
import Subscriber from '../models/Subscriber.js';

const router = express.Router();

// POST /api/subscribers  — save email & return success
router.post('/', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    try {
        const existing = await Subscriber.findOne({ email });
        if (existing) {
            // Already subscribed — still return success so the UI proceeds to thank-you
            return res.status(200).json({ success: true, message: 'Already subscribed.' });
        }

        const subscriber = new Subscriber({ email });
        await subscriber.save();

        return res.status(201).json({ success: true, message: 'Subscribed successfully.' });
    } catch (err) {
        console.error('Subscriber error:', err.message);
        return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
});

// GET /api/subscribers  — admin: list all (no auth guard needed for now)
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find().sort({ subscribedAt: -1 });
        return res.json({ success: true, count: subscribers.length, data: subscribers });
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Server error.' });
    }
});

export default router;

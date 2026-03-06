import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// POST /api/contact  — save contact form message
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Name, email, and message are required.' });
        }
        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;

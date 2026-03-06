import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.userId).select('-password');

        if (!req.user) {
            return res.status(401).json({ message: 'Not authorized, user not found' });
        }

        next();
    } catch (error) {
        console.error('Auth error:', error.message);
        return res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

export const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(401).json({ message: 'Not authorized as an admin' });
    }
};

export const vendor = (req, res, next) => {
    if (req.user && req.user.role === 'vendor' && req.user.vendorStatus === 'approved') {
        next();
    } else {
        return res.status(401).json({ message: 'Not authorized as a vendor' });
    }
};

export const vendorOrAdmin = (req, res, next) => {
    if (req.user && (req.user.role === 'admin' || (req.user.role === 'vendor' && req.user.vendorStatus === 'approved'))) {
        next();
    } else {
        return res.status(401).json({ message: 'Not authorized' });
    }
};

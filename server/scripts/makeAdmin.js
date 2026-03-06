import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config({ path: '../.env' }); // Adjust path to reach .env

const makeAdmin = async () => {
    try {
        const MONGODB_URI = process.env.MONGODB_URI;

        if (!MONGODB_URI) {
            console.error('Error: MONGODB_URI is not defined in .env');
            process.exit(1);
        }

        await mongoose.connect(MONGODB_URI);
        console.log('✓ Connected to MongoDB');

        const email = 'hashilpatel9909@gmail.com';
        const user = await User.findOne({ email });

        if (user) {
            user.role = 'admin';
            await user.save();
            console.log(`✓ User ${user.name} (${user.email}) is now an Admin!`);
        } else {
            console.error(`✗ User not found with email: ${email}`);
            console.log('Please register this user on the website first.');
        }

        process.exit();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

makeAdmin();

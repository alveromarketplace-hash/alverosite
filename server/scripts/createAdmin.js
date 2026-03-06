import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/moncler-clone');
        console.log('Connected to MongoDB');

        const adminExists = await User.findOne({ email: 'admin@alvero.com' });

        if (adminExists) {
            console.log('Admin user already exists');
            // Update password just in case
            adminExists.password = '123456';
            adminExists.role = 'admin';
            await adminExists.save();
            console.log('Admin password reset to: 123456');
        } else {
            const user = new User({
                name: 'Admin User',
                email: 'admin@alvero.com',
                password: '123456',
                role: 'admin'
            });

            await user.save();
            console.log('Admin user created');
        }

        console.log('Login with: admin@alvero.com / 123456');
        process.exit();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

createAdmin();

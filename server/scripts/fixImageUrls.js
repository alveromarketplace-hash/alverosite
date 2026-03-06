import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Product from '../models/Product.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/moncler-clone';

async function fixUrls() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to DB');

        const products = await Product.find({});
        let updatedCount = 0;

        for (const product of products) {
            let changed = false;

            if (product.images && product.images.length > 0) {
                const newImages = product.images.map(img => {
                    // Check if the image starts with http://localhost
                    if (img.startsWith('http://localhost') && img.includes('/uploads/')) {
                        changed = true;
                        return '/uploads/' + img.split('/uploads/')[1];
                    }
                    return img;
                });

                if (changed) {
                    product.images = newImages;
                    await product.save();
                    updatedCount++;
                }
            }
        }

        console.log(`Successfully updated ${updatedCount} products with relative image paths.`);

        mongoose.connection.close();
    } catch (error) {
        console.error('Error fixing URLs:', error);
        process.exit(1);
    }
}

fixUrls();

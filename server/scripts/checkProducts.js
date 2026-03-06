
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGODB_URI = process.env.MONGODB_URI;

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
}, { strict: false });

const Product = mongoose.model('Product', productSchema);

async function checkProducts() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to DB');
        const count = await Product.countDocuments();
        console.log(`Product count: ${count}`);
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

checkProducts();

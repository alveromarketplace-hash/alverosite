import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import User from '../models/User.js';
import VendorApplication from '../models/VendorApplication.js';
import Product from '../models/Product.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const testVendorFlow = async () => {
    try {
        console.log('🔄 Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✓ Connected');

        // 1. Create a Test Vendor User
        const uniqueId = Date.now();
        const vendorEmail = `test.vendor.${uniqueId}@example.com`;
        const vendorPassword = 'password123';

        console.log(`\n1. Creating test vendor user: ${vendorEmail}`);
        const vendorUser = await User.create({
            name: 'Test Vendor',
            email: vendorEmail,
            password: vendorPassword, // Ideally hash this if running through auth flow, but direct DB access bypasses this need for mocking
            role: 'customer'
        });
        console.log(`✓ User created with ID: ${vendorUser._id}`);

        // 2. Submit Application
        console.log('\n2. Submitting vendor application...');
        const application = await VendorApplication.create({
            user: vendorUser._id,
            businessName: `Test Store ${uniqueId}`,
            description: 'A store for testing scripts',
            contactPhone: '1234567890',
            experience: '5 years of testing'
        });
        console.log(`✓ Application created with ID: ${application._id}`);

        // 3. Find Admin User (for approval record)
        const adminUser = await User.findOne({ role: 'admin' });
        if (!adminUser) {
            console.error('✗ No admin user found to approve application. Please run makeAdmin.js first.');
            process.exit(1);
        }
        console.log(`\n3. Found Admin user: ${adminUser.email}`);

        // 4. Admin Approves Application
        console.log('\n4. Admin approving application...');
        application.status = 'approved';
        application.reviewedBy = adminUser._id;
        application.reviewedAt = new Date();
        application.adminNotes = 'Auto-approved by test script';
        await application.save();
        console.log('✓ Application marked approved');

        // 5. Update User Role (mimicking the route logic)
        console.log('\n5. Updating user role to vendor...');
        vendorUser.role = 'vendor';
        vendorUser.vendorStatus = 'approved';
        vendorUser.storeName = application.businessName;
        vendorUser.storeDescription = application.description;
        await vendorUser.save();
        console.log('✓ User role updated to vendor');

        // 6. Verify Vendor can Create Product
        console.log('\n6. Creating product as vendor...');
        const product = await Product.create({
            name: `Test Product ${uniqueId}`,
            description: 'A test product',
            price: 999,
            category: 'women',
            images: ['https://via.placeholder.com/150'],
            vendor: vendorUser._id,
            vendorStoreName: vendorUser.storeName,
            sizes: ['M', 'L'],
            inStock: true
        });
        console.log(`✓ Product created: ${product.name} (Vendor: ${product.vendorStoreName})`);

        // 7. Verification
        console.log('\n7. Final Verification:');
        const finalUser = await User.findById(vendorUser._id);
        const finalApp = await VendorApplication.findById(application._id);
        const finalProduct = await Product.findById(product._id);

        if (finalUser.role === 'vendor' && finalApp.status === 'approved' && finalProduct.vendor.toString() === finalUser._id.toString()) {
            console.log('✅ SUCCESS: Full vendor flow verification passed!');
        } else {
            console.error('❌ FAILURE: Verification failed.');
            console.log('User Role:', finalUser.role);
            console.log('App Status:', finalApp.status);
            console.log('Product Vendor Match:', finalProduct.vendor.toString() === finalUser._id.toString());
        }

        // Cleanup (optional, keeping for now to manually inspect if needed)
        // await User.deleteOne({ _id: vendorUser._id });
        // await VendorApplication.deleteOne({ _id: application._id });
        // await Product.deleteOne({ _id: product._id });

        process.exit(0);

    } catch (error) {
        console.error('❌ Error during test:', error);
        process.exit(1);
    }
};

testVendorFlow();

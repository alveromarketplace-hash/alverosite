import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['clothing-men', 'clothing-women', 'accessories', 'jewelry', 'shoes']
    },
    message: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;

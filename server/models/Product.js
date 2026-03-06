import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    vendorStoreName: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['women', 'men', 'kids', 'grenoble', 'accessories']
    },
    subcategory: {
        type: String,
        trim: true
    },
    images: [{
        type: String,
        required: true
    }],
    colors: [{
        name: String,
        hex: String
    }],
    sizes: [{
        type: String
    }],
    inStock: {
        type: Boolean,
        default: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    isNew: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Add indexes for better query performance
productSchema.index({ category: 1 });
productSchema.index({ vendor: 1 });
productSchema.index({ createdAt: -1 });
productSchema.index({ featured: 1 });
productSchema.index({ name: 'text', description: 'text', subcategory: 'text', vendorStoreName: 'text' });

export default mongoose.model('Product', productSchema);

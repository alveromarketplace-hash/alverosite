import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Order from './models/Order.js';
import User from './models/User.js';
import Product from './models/Product.js';

dotenv.config();

const seedOrders = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/moncler-clone');
        console.log('Connected to MongoDB');

        // Clear existing orders
        await Order.deleteMany({});
        console.log('Orders cleared');

        const users = await User.find({});
        const products = await Product.find({});

        if (!users.length || !products.length) {
            console.log('No users or products found. Please seed them first.');
            process.exit(1);
        }

        const orders = [];
        const statuses = ['Processing', 'Shipped', 'Delivered'];

        for (let i = 0; i < 20; i++) {
            const user = users[Math.floor(Math.random() * users.length)];
            const product = products[Math.floor(Math.random() * products.length)];
            const qty = Math.floor(Math.random() * 3) + 1;
            const totalPrice = product.price * qty;

            const isPaid = Math.random() > 0.2;
            const isDelivered = isPaid && Math.random() > 0.4;

            // Random date generator (last 30 days)
            const getRandomDate = () => {
                const date = new Date();
                date.setDate(date.getDate() - Math.floor(Math.random() * 30));
                return date;
            };

            const orderDate = getRandomDate();

            const order = new Order({
                user: user._id,
                orderItems: [{
                    name: product.name,
                    quantity: qty,
                    image: product.images[0],
                    price: product.price,
                    product: product._id
                }],
                shippingAddress: {
                    address: '123 Fake St',
                    city: 'New York',
                    postalCode: '10001',
                    country: 'USA'
                },
                paymentMethod: 'Stripe',
                paymentResult: isPaid ? { id: 'evt_123', status: 'succeeded' } : {},
                taxPrice: 0,
                shippingPrice: 0,
                totalPrice: totalPrice,
                isPaid: isPaid,
                paidAt: isPaid ? orderDate : null,
                isDelivered: isDelivered,
                deliveredAt: isDelivered ? orderDate : null,
                createdAt: orderDate // Explicitly set createdAt
            });
            orders.push(order);
        }

        await Order.insertMany(orders);
        console.log('Seeded 20 Dummy Orders');
        process.exit();
    } catch (error) {
        console.error('Error seeding orders:', error);
        process.exit(1);
    }
};

seedOrders();

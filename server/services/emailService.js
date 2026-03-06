import nodemailer from 'nodemailer';
import StoreSettings from '../models/StoreSettings.js';

let transporter = null;

const createTransporter = async () => {
    try {
        const settings = await StoreSettings.findOne();

        if (settings && settings.emailHost && settings.emailUser && settings.emailPass) {
            transporter = nodemailer.createTransport({
                host: settings.emailHost,
                port: settings.emailPort || 587,
                secure: settings.emailSecure || false, // true for 465, false for other ports
                auth: {
                    user: settings.emailUser,
                    pass: settings.emailPass,
                },
            });
            return { transporter, settings };
        }
        return null;
    } catch (error) {
        console.error('Email Service Error:', error);
        return null;
    }
};

export const sendEmail = async ({ to, subject, html }) => {
    const config = await createTransporter();

    if (!config || !config.transporter) {
        console.log('⚠️ Email Service not configured. Taking no action.');
        console.log(`[Mock Email] To: ${to}, Subject: ${subject}`);
        return false;
    }

    try {
        const info = await config.transporter.sendMail({
            from: `"${config.settings.emailFrom || 'Alvero Store'}" <${config.settings.emailUser}>`,
            to,
            subject,
            html,
        });
        console.log('✓ Email sent: %s', info.messageId);
        return true;
    } catch (error) {
        console.error('❌ Error sending email:', error);
        return false;
    }
};

export const sendOrderConfirmation = async (order, userEmail) => {
    const subject = `Order Confirmation #${order._id.toString().substring(0, 8).toUpperCase()}`;

    // Simple HTML Template
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #000;">Thank you for your order!</h2>
            <p>Hi there,</p>
            <p>We have received your order and are getting it ready!</p>
            
            <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Order #${order._id.toString().substring(0, 8).toUpperCase()}</h3>
                <p><strong>Total:</strong> ₹${order.totalPrice}</p>
                <p><strong>Status:</strong> ${order.isPaid ? 'Paid' : 'Payment Pending'}</p>
            </div>

            <p>You can view your order status in your account dashboard.</p>
            
            <a href="http://localhost:5173/profile" style="display: inline-block; background: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px;">View Order</a>
            
            <p style="margin-top: 30px; font-size: 12px; color: #888;">Attributes to ALVERO, Inc.</p>
        </div>
    `;

    // Priority: Explicit arg > User object > Contact fallback (not implemented here)
    const recipient = userEmail || (order.user && order.user.email ? order.user.email : null);

    if (recipient) {
        return await sendEmail({ to: recipient, subject, html });
    }

    console.warn('⚠️ No recipient email found for order confirmation.');
    return false;
};

export const sendPasswordReset = async (email, resetUrl) => {
    const subject = 'Reset your password for Alvero';
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Password Reset Request</h2>
            <p>You requested a password reset for your Alvero account.</p>
            <p>Click the button below to reset your password. This link is valid for 1 hour.</p>
            
            <a href="${resetUrl}" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 20px 0;">Reset Password</a>
            
            <p style="color: #666; font-size: 14px;">If you didn't request this, please ignore this email.</p>
        </div>
    `;

    return await sendEmail({ to: email, subject, html });
};

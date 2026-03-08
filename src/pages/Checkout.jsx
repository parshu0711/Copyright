import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, CreditCard } from 'lucide-react';

const Checkout = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    // Mock checkout handler
    const handleCheckout = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            clearCart();
            setIsProcessing(false);
            alert("Payment Successful! Thank you for your mock order.");
            navigate('/');
        }, 2000);
    };

    if (cartItems.length === 0) {
        return (
            <div className="pt-32 pb-20 text-center bg-white dark:bg-slate-950 min-h-screen">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">No items to checkout</h1>
                <Link to="/products" className="text-blue-600 hover:underline">Return to Shop</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

                <Link to="/cart" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white mb-8 font-medium">
                    <ArrowLeft size={20} /> Return to Cart
                </Link>

                <div className="flex flex-col-reverse lg:flex-row gap-12">

                    {/* Forms Column */}
                    <div className="w-full lg:w-3/5 space-y-8">
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            onSubmit={handleCheckout}
                            className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
                        >

                            {/* Contact Info */}
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h2>
                            <div className="space-y-4 mb-10">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email address</label>
                                    <input required type="email" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="you@example.com" />
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Shipping Address</h2>
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First name</label>
                                    <input required type="text" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last name</label>
                                    <input required type="text" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Address</label>
                                    <input required type="text" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">City</label>
                                    <input required type="text" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">ZIP / Postal code</label>
                                    <input required type="text" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                            </div>

                            {/* Payment */}
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                Payment Details <ShieldCheck className="text-green-500" size={20} />
                            </h2>
                            <div className="space-y-4 mb-10 p-6 border-2 border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-900 relative">
                                <span className="absolute top-4 right-4 text-xs font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-500">MOCK</span>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Card number</label>
                                    <div className="relative">
                                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                        <input required type="text" maxLength="19" placeholder="0000 0000 0000 0000" className="w-full pl-10 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none font-mono" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Expiration date</label>
                                        <input required type="text" placeholder="MM/YY" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none font-mono" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">CVC</label>
                                        <input required type="text" maxLength="4" placeholder="123" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none font-mono" />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isProcessing ? 'Processing Payment...' : `Pay ₹${totalPrice.toLocaleString('en-IN')}`}
                            </button>

                        </motion.form>
                    </div>

                    {/* Order Summary Column */}
                    <div className="w-full lg:w-2/5">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 sticky top-32 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">In your cart</h2>

                            <div className="space-y-6 mb-8 border-b border-slate-200 dark:border-slate-800 pb-8">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative">
                                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-slate-100" />
                                            <span className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold flex items-center justify-center rounded-full">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-slate-900 dark:text-white line-clamp-1">{item.name}</h4>
                                            <p className="text-slate-500 text-sm">{item.category}</p>
                                        </div>
                                        <div className="font-bold text-slate-900 dark:text-white">
                                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 text-slate-600 dark:text-slate-300">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-slate-900 dark:text-white">₹{totalPrice.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="font-medium text-slate-900 dark:text-white">Free</span>
                                </div>
                            </div>

                            <div className="border-t border-slate-200 dark:border-slate-700 mt-6 pt-6">
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold text-slate-900 dark:text-white">Total</span>
                                    <span className="text-3xl font-bold text-slate-900 dark:text-white">₹{totalPrice.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;

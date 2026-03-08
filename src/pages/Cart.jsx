import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="pt-32 pb-20 min-h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-slate-950 px-6">
                <div className="bg-slate-100 dark:bg-slate-900 w-24 h-24 rounded-full flex items-center justify-center mb-6 text-slate-400">
                    <ShoppingBag size={48} />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Your cart is empty</h1>
                <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md text-center">
                    Looks like you haven't added any premium gear to your cart yet.
                </p>
                <Link
                    to="/products"
                    className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10">Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Cart Items List */}
                    <div className="w-full lg:w-2/3 space-y-6">
                        {cartItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                key={item.id}
                                className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-xl bg-slate-100 dark:bg-slate-800"
                                />

                                <div className="flex-grow text-center sm:text-left">
                                    <Link to={`/product/${item.id}`} className="hover:text-blue-600 transition-colors">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">{item.name}</h3>
                                    </Link>
                                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.category}</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-3 py-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="w-10 text-center font-bold text-slate-900 dark:text-white">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-3 py-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <div className="w-24 text-right font-bold text-lg text-slate-900 dark:text-white">
                                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                        title="Remove item"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 sticky top-32">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 text-slate-600 dark:text-slate-300">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-slate-900 dark:text-white">₹{totalPrice.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="font-medium text-slate-900 dark:text-white">Calculated at checkout</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Taxes</span>
                                    <span className="font-medium text-slate-900 dark:text-white">$0.00</span>
                                </div>
                            </div>

                            <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mb-8">
                                <div className="flex justify-between items-end">
                                    <span className="text-xl font-bold text-slate-900 dark:text-white">Total</span>
                                    <span className="text-3xl font-bold text-slate-900 dark:text-white">₹{totalPrice.toLocaleString('en-IN')}</span>
                                </div>
                            </div>

                            <Link
                                to="/checkout"
                                className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                            >
                                Proceed to Checkout
                                <ArrowRight size={20} />
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;

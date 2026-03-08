import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingCart, CheckCircle, Shield, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen pt-32 text-center bg-white dark:bg-slate-950">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Product Not Found</h1>
                <Link to="/products" className="text-blue-600 hover:underline">Return to Shop</Link>
            </div>
        );
    }

    const handleAdd = () => {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">

                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back
                </button>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2 flex flex-col justify-center"
                    >
                        <div className="mb-2">
                            <span className="text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                                {product.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                            {product.name}
                        </h1>

                        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                            ₹{product.price.toLocaleString('en-IN')}
                        </div>

                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={handleAdd}
                                disabled={isAdded}
                                className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold text-lg transition-all ${isAdded
                                    ? 'bg-green-500 text-white'
                                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 hover:-translate-y-1 shadow-lg'
                                    }`}
                            >
                                {isAdded ? (
                                    <><CheckCircle size={24} /> Added to Cart</>
                                ) : (
                                    <><ShoppingCart size={24} /> Add to Cart</>
                                )}
                            </button>
                        </div>

                        {/* Feature Toggles */}
                        <div className="space-y-4 border-t border-slate-200 dark:border-slate-800 pt-8">
                            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                                <Truck size={24} className="text-slate-400" />
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">Free standard delivery</p>
                                    <p className="text-sm">Arrives in 3-5 business days</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                                <Shield size={24} className="text-slate-400" />
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">2-Year Limited Warranty</p>
                                    <p className="text-sm">Extended protection available at checkout</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

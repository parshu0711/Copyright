import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, ShieldCheck, Zap } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const featuredProducts = products.filter(p => p.featured).slice(0, 3);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative bg-slate-50 dark:bg-slate-900 py-20 lg:py-32 overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                Elevate Your Tech Experience.
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl">
                                Discover premium electronics and accessories designed for those who demand the absolute best in performance and aesthetics.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/products"
                                    className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                                >
                                    <ShoppingBag size={20} />
                                    Shop Now
                                </Link>
                                <Link
                                    to="/about"
                                    className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-900 dark:text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Abstract Background Element */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-30 dark:opacity-10 hidden lg:block">
                    <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#3B82F6" d="M47.7,-57.2C59.5,-45.5,65.1,-27.1,65.3,-9.7C65.5,7.7,60.2,24.1,50.1,36.5C39.9,48.9,25,57.3,8.7,61.9C-7.6,66.5,-25.3,67.3,-38.4,59.3C-51.5,51.3,-60,34.4,-64.8,16.6C-69.6,-1.2,-70.7,-19.9,-62.3,-33C-53.9,-46.1,-36,-53.8,-19.7,-58.5C-3.4,-63.2,11.3,-64.9,23.6,-61.8C35.9,-58.7,42,-50.7,47.7,-57.2Z" transform="translate(100 100) scale(1.2)" />
                    </svg>
                </div>
            </section>

            {/* Features Row */}
            <section className="py-12 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Fast Free Shipping</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">On all orders over $50</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">2-Year Warranty</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Guaranteed quality</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl">
                                <ShoppingBag size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Secure Checkout</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">100% safe payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Featured Products</h2>
                            <p className="text-slate-500 dark:text-slate-400">Our currently highly recommended gear.</p>
                        </div>
                        <Link to="/products" className="hidden sm:flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all">
                            View all <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-10 sm:hidden">
                        <Link to="/products" className="w-full py-4 border-2 border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white font-bold flex items-center justify-center gap-2">
                            View all Products <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

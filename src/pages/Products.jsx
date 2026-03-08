import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
    // Optional basic filtering
    const [filter, setFilter] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">All Products</h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
                        Browse our complete collection of premium tech accessories, audio gear, and beautifully designed electronics.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors border ${filter === category
                                    ? 'bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-slate-900'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-slate-500 dark:text-slate-400 text-lg">No products found in this category.</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Products;

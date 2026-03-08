import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent navigating if clicking button inside link
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all"
        >
            <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800 block">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.featured && (
                    <div className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                    </div>
                )}
            </Link>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <Link to={`/product/${product.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">{product.name}</h3>
                    </Link>
                    <span className="font-bold text-slate-900 dark:text-white">₹{product.price.toLocaleString('en-IN')}</span>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-6 flex-grow">
                    {product.description}
                </p>

                <button
                    onClick={handleAddToCart}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-slate-900 dark:text-white rounded-xl font-medium transition-colors"
                >
                    <ShoppingCart size={18} />
                    Add to Cart
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;

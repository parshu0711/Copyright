import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link to="/" className="flex items-center gap-2 group w-fit">
                            <div className="p-2 bg-slate-900 dark:bg-white rounded-xl text-white dark:text-slate-900">
                                <Store size={24} />
                            </div>
                            <span className="text-xl font-bold text-slate-900 dark:text-white">TechHaven</span>
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                            Your premium destination for the latest in technology, accessories, and smart home devices. We focus on quality, design, and exceptional customer experience.
                        </p>
                        <div className="flex items-center gap-4 text-slate-400">
                            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-6">Shop</h3>
                        <ul className="space-y-4">
                            <li><Link to="/products" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">All Products</Link></li>
                            <li><Link to="/products" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Featured</Link></li>
                            <li><Link to="/cart" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Your Cart</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">About Us</Link></li>
                            <li><a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Terms & Privacy</a></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
                    <p>© {new Date().getFullYear()} TechHaven Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

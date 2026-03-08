import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="max-w-3xl mx-auto space-y-16">

                    {/* Header */}
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
                        >
                            About TechHaven
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-600 dark:text-slate-400"
                        >
                            Curating the tools of tomorrow for the creators of today.
                        </motion.p>
                    </div>

                    {/* Content Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-[21/9] w-full bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop"
                            alt="Tech Haven Office"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Our Mission</h2>
                        <p className="mb-8">
                            Founded on the belief that technology should be an invisible enabler of creativity, TechHaven was established to dramatically simplify the process of discovering and obtaining premium electronics. We vet, test, and authenticate every single product that lands in our catalog.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Quality First</h2>
                        <p className="mb-8">
                            In a world flooded with cheap alternatives and disposable gadgets, we take a different approach. We believe in investing in tools that last. That is why our catalog is intentionally small. If it's on TechHaven, you know it's built utilizing aerospace-grade materials, precision engineering, and peerless design.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mt-12 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Location</h3>
                                <p>Lovely Professional University<br />Phagwara<br />Punjab, India</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Contact</h3>
                                <p>hello@techhaven.in<br />+91 98765 43210</p>
                            </div>
                        </div>

                        {/* Creator Section */}
                        <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Meet the Creator</h2>
                            <div className="flex flex-col items-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-slate-100 dark:border-slate-800 shadow-xl">
                                    <img src="/arjun.jpg" alt="Arjun Shivhare" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Arjun Shivhare</h3>
                                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">BBA LLB Student</p>
                                <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                                    A passionate BBA LLB student driving the distinct vision behind TechHaven. Merging a sharp understanding of business and operations with a keen eye for premium digital aesthetics and user experiences.
                                </p>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default About;

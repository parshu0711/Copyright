import { motion } from 'framer-motion';
import { Scale, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

const LegalAnalysis = () => {
    return (
        <section id="analysis" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                                <Scale size={32} className="text-white" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                                Legal Analysis
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                When these cases reach a courtroom, judges must carefully peel back the layers of the software to determine what is protected creativity and what is unprotected utility.
                            </p>
                            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                    <FileText size={18} className="text-blue-500" /> Key Legal Test
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    The Abstraction-Filtration-Comparison (AFC) test separates unprotectable elements (ideas, functional rules) before comparing the protectable expression.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="space-y-8">

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                                className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={24} />
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">What Is Protected</h3>
                                        <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                                                <span><strong>Trade Dress:</strong> The distinctive overall "look and feel" of the app if it has acquired secondary meaning (consumers associate the look with the brand).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                                                <span><strong>Specific Iconography:</strong> Highly stylized icons designed by an artist.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                                                <span><strong>Design Patents:</strong> If the developer filed for a design patent (like Apple's patent for the rounded grid of icons), they have strict protection for 15 years.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <AlertCircle className="text-amber-500 mt-1 shrink-0" size={24} />
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">What Is Not Protected</h3>
                                        <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                                                <span><strong>Scènes à Faire:</strong> Standard, stock UI elements that are customary to the genre (e.g., a magnifying glass for search, a shopping cart icon).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                                                <span><strong>Functional Layouts:</strong> Arranging buttons purely for ergonomic efficiency or standard UX patterns.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                                                <span><strong>Basic Color Schemes:</strong> Using standard "dark mode" or common primary colors without defining artistic arrangements.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50"
                            >
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The Verdict (Generally)</h3>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    If the startup merely used similar industry-standard design patterns but coded it from scratch and used their own specific assets, they will likely win. However, if they engaged in <strong className="text-blue-700 dark:text-blue-400">wholesale copying</strong>—replicating the layout, specific color hex codes, font weights, and spacing with zero variation (creating a 1:1 clone)—the original developer has a strong case for infringement of the visual expression or trade dress.
                                </p>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LegalAnalysis;

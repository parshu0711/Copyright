import { motion } from 'framer-motion';
import { Lightbulb, Shield, Quote } from 'lucide-react';

const Arguments = () => {
    return (
        <section id="arguments" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        The Opposing Arguments
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        A classic clash between protecting creative investment and promoting open standardization for users.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Startup's Argument */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-purple-500/10 dark:from-purple-500/10 dark:to-purple-500/20 rounded-3xl transform group-hover:-translate-y-2 transition-transform duration-300"></div>
                        <div className="relative p-10 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-2xl text-purple-600 dark:text-purple-400">
                                    <Lightbulb size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Startup's Argument</h3>
                                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Pro-Standardization</span>
                                </div>
                            </div>

                            <div className="space-y-6 flex-1">
                                <div className="flex gap-4">
                                    <Quote className="text-purple-200 dark:text-purple-900/50 shrink-0" size={24} />
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        <strong>UI is Functional:</strong> Buttons, navigation bars, and layouts dictate how a user interacts with software. These are systems, methods of operation, and functional concepts—which copyright expressly excludes under § 102(b).
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Quote className="text-purple-200 dark:text-purple-900/50 shrink-0" size={24} />
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        <strong>Merger Doctrine:</strong> There are only so many logical ways to design a music player or chat app. If we copyright standard layouts, we create a monopoly over basic app functionality.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Quote className="text-purple-200 dark:text-purple-900/50 shrink-0" size={24} />
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        <strong>UX Best Practices:</strong> Users expect consistent design patterns (like a home button at the bottom). Forcing startups to use confusing, non-standard layouts merely to avoid litigation harms the consumer experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Original App Developer's Argument */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-blue-500/10 dark:from-blue-500/10 dark:to-blue-500/20 rounded-3xl transform group-hover:-translate-y-2 transition-transform duration-300"></div>
                        <div className="relative p-10 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-blue-100 dark:bg-blue-900/40 rounded-2xl text-blue-600 dark:text-blue-400">
                                    <Shield size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Original Developer</h3>
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Pro-Protection</span>
                                </div>
                            </div>

                            <div className="space-y-6 flex-1">
                                <div className="flex gap-4">
                                    <Quote className="text-blue-200 dark:text-blue-900/50 shrink-0" size={24} />
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        <strong>Creative Expression:</strong> While buttons have functions, the specific color palettes, iconography, spatial arrangements, and micro-animations are artistic choices. They represent creative expression separable from the utility.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Quote className="text-blue-200 dark:text-blue-900/50 shrink-0" size={24} />
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        <strong>Substantial Similarity:</strong> The startup didn't just use industry standards; they created a pixel-perfect, 1:1 clone. This clearly violates the "look and feel" doctrine established in prominent copyright rulings.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Quote className="text-blue-200 dark:text-blue-900/50 shrink-0" size={24} />
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        <strong>Free Riding:</strong> We invested millions in UX research to find the optimal design. Allowing startups to clone our interface eliminates the incentive to innovate and lets them unfairly profit from our R&D.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Arguments;

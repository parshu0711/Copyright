import { motion } from 'framer-motion';
import { Code, Layout, Settings } from 'lucide-react';

const CopyrightInfo = () => {
    return (
        <section id="copyright" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            What Does Copyright Actually Protect?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            In software, intellectual property is divided into distinct categories. Copyright law protects original works of authorship fixed in a tangible medium, but how does this apply to software?
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl h-fit">
                                    <Code size={24} className="text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">The Source Code</h4>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Source code and object code are universally protected by copyright as "literary works". If someone copies your raw code, it is clear infringement.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-xl h-fit">
                                    <Settings size={24} className="text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">The Functionality</h4>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Ideas, concepts, and sheer functionality (like swiping left to delete) are generally NOT protected by copyright. They fall under the domain of patent law.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-purple-100 dark:bg-purple-900/40 p-3 rounded-xl h-fit">
                                    <Layout size={24} className="text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">The User Interface (UI)</h4>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        This is the gray area. Elements like non-functional graphic design, color choices, and specific layout arrangements (the "look and feel") may be protected if they reflect creative expression rather than pure utility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:w-1/2 relative w-full aspect-square max-w-md mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Visual Abstract Representation of Layers */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 dark:from-blue-500/5 dark:to-purple-600/5 rounded-full blur-3xl"></div>

                        <motion.div
                            className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col p-6 z-30"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <div className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider text-center">UI Layer (Expression)</div>
                            <div className="flex-1 rounded-2xl bg-gradient-to-tr from-purple-100 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-800 flex items-center justify-center">
                                <Layout size={48} className="text-purple-500/50" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute top-[20%] left-[15%] w-[80%] h-[80%] bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col p-6 z-20"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        >
                            <div className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider text-center">Logic Layer (Idea)</div>
                            <div className="flex-1 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                                <Settings size={48} className="text-slate-400/50" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute top-[30%] left-[20%] w-[80%] h-[80%] bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col p-6 z-10"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        >
                            <div className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider text-center">Code Layer (Fixation)</div>
                            <div className="flex-1 rounded-2xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                                <Code size={48} className="text-slate-300/50" />
                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CopyrightInfo;

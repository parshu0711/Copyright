import { motion } from 'framer-motion';
import { Award, Code, BookOpen } from 'lucide-react';

const AuthorSection = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-16">
                        About the Creator
                    </h2>

                    <div className="flex flex-col md:flex-row gap-12 items-center bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-1/3 shrink-0"
                        >
                            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                                {/* 
                  Note: The image is expected to be placed in the public folder 
                  with the name 'arjun.jpg'
                */}
                                <img
                                    src="/arjun.jpeg"
                                    alt="Arjun Shivhare"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">Arjun Shivhare</h3>
                                    <p className="text-blue-200 text-sm font-medium">BBA LLB Student</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-full md:w-2/3 space-y-8"
                        >
                            <div className="prose prose-lg dark:prose-invert">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                    This interactive case study was developed practically to explore the fascinating intersection of modern user interface design and intellectual property law. The goal is to make complex legal arguments surrounding software copyright accessible, visual, and engaging for students and professionals alike.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mt-1">
                                        <Award size={20} className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Legal Research</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Bridging the gap between theory and classroom law.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mt-1">
                                        <BookOpen size={20} className="text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Academic Focus</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Analyzing the "Look and Feel" doctrine in IP logic.</p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorSection;

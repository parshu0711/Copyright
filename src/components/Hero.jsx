import { motion } from 'framer-motion';
import { ArrowRight, Gavel, Smartphone, Copy } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-slate-50 dark:from-blue-950 dark:via-slate-950 dark:to-slate-950"></div>

            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl opacity-50"></div>

            <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6 border border-blue-200 dark:border-blue-800/50">
                        <Gavel size={16} />
                        <span>Interactive Legal Case Study</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-8">
                        App UI Copying: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                            Innovation or Infringement?
                        </span>
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-light">
                        A startup copies the layout, color scheme, and user interface of a popular mobile app, arguing that software interfaces are not protected by copyright. Explore the legal boundaries of digital design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#overview"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/25"
                        >
                            Examine the Case
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* Visual Graphic Representation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    {/* Base App */}
                    <div className="absolute top-0 right-20 w-64 h-[500px] glass rounded-[2.5rem] border-8 border-slate-900 dark:border-slate-800 shadow-2xl flex flex-col p-4 transform -rotate-6 z-10 transition-transform hover:rotate-0 duration-500">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-bold text-lg dark:text-white">OriginalApp</span>
                            <Smartphone size={20} className="text-slate-500" />
                        </div>
                        <div className="w-full h-32 bg-blue-100 dark:bg-blue-900/40 rounded-2xl mb-4"></div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="h-20 bg-slate-100 dark:bg-slate-800 rounded-xl"></div>
                            <div className="h-20 bg-slate-100 dark:bg-slate-800 rounded-xl"></div>
                        </div>
                        <div className="w-full h-12 bg-blue-600 rounded-xl mt-auto items-center justify-center flex text-white text-sm font-semibold">Primary Action</div>
                    </div>

                    {/* Cloned App */}
                    <div className="absolute top-12 -left-12 w-64 h-[500px] glass rounded-[2.5rem] border-8 border-slate-800 dark:border-slate-700 shadow-xl flex flex-col p-4 transform rotate-12 z-20 backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 transition-transform hover:rotate-6 duration-500">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-bold text-lg dark:text-white">StartupClone</span>
                            <Copy size={20} className="text-purple-500" />
                        </div>
                        <div className="w-full h-32 bg-purple-100 dark:bg-purple-900/40 rounded-2xl mb-4"></div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="h-20 bg-slate-50 dark:bg-slate-800 rounded-xl"></div>
                            <div className="h-20 bg-slate-50 dark:bg-slate-800 rounded-xl"></div>
                        </div>
                        <div className="w-full h-12 bg-purple-600 rounded-xl mt-auto items-center justify-center flex text-white text-sm font-semibold">Similar Action</div>
                    </div>

                    <div className="absolute top-1/2 left-1/4 bg-white dark:bg-slate-800 p-3 rounded-full shadow-2xl z-30 animate-bounce cursor-help border border-slate-100 dark:border-slate-700">
                        <Copy size={32} className="text-blue-600 dark:text-blue-400" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

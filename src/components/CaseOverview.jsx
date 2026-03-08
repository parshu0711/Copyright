import { motion } from 'framer-motion';
import { ShieldAlert, Users, Zap, LayoutDashboard } from 'lucide-react';

const CaseOverview = () => {
    const cards = [
        {
            icon: <Users size={24} className="text-blue-600 dark:text-blue-400" />,
            title: "The Original Innovator",
            description: "A popular mobile app developer spends months researching, designing, and testing a unique, highly acclaimed user interface that users love for its intuitive flow and vibrant color scheme.",
        },
        {
            icon: <Zap size={24} className="text-purple-600 dark:text-purple-400" />,
            title: "The Startup Challenger",
            description: "A new startup enters the market with a competing product. Instead of designing a new interface from scratch, they replicate the exact layout, colors, and visual hierarchy of the original app.",
        },
        {
            icon: <LayoutDashboard size={24} className="text-emerald-600 dark:text-emerald-400" />,
            title: "The Core Argument",
            description: "When confronted, the startup argues that 'software interfaces are purely functional and cannot be protected by copyright.' They claim that standardizing UI benefits users seamlessly.",
        },
        {
            icon: <ShieldAlert size={24} className="text-red-600 dark:text-red-400" />,
            title: "The Legal Standoff",
            description: "The original developer sues for copyright infringement, claiming their specific expression of the UI (the aesthetic look and feel) is a creative work protected under intellectual property law.",
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="overview" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            The Scenario
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Before diving into the complex legalities, we must understand the core narrative of the dispute. How did the cloning happen, and what is the primary defense?
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                {card.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CaseOverview;

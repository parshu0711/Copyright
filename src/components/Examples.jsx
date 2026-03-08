import { motion } from 'framer-motion';
import { ExternalLink, Smartphone } from 'lucide-react';

const Examples = () => {
    const cases = [
        {
            id: 1,
            title: "Apple vs. Samsung",
            year: "2011",
            description: "One of the most famous tech lawsuits in history. Apple sued Samsung for copying the design of the iPhone—specifically its rectangular shape, rounded corners, and the grid-like layout of colorful square icons.",
            outcome: "Apple initially won a $1B verdict based primarily on design patent infringement rather than standard copyright, proving 'trade dress' protection.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "Lotus vs. Borland",
            year: "1995",
            description: "Borland's Quattro Pro copied the entire menu command hierarchy of Lotus 1-2-3 (e.g., File, Edit, View) so users wouldn't have to relearn how to use the spreadsheet.",
            outcome: "The Supreme Court tied 4-4, upholding the lower court's ruling that the menu command structure was an uncopyrightable 'method of operation' under § 102(b).",
            color: "from-emerald-500 to-teal-500"
        },
        {
            id: 3,
            title: "Tetris vs. Xio",
            year: "2012",
            description: "Xio created a game called 'Mino' that perfectly cloned the visual look of Tetris—down to the specific colors and shapes of the blocks and the exact dimensions of the playing field.",
            outcome: "Tetris won! While the rules of the game aren't protected, the court ruled Xio copied the specific expressive visual choices of Tetris, not just the gameplay.",
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section id="examples" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Real-World Precedents
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        How have actual courts handled software cloning of user interfaces?
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((caseItem, index) => (
                        <motion.div
                            key={caseItem.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group h-full"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.color} opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-300 transform scale-[1.02] -z-10 blur-xl dark:opacity-20 dark:group-hover:opacity-40`}></div>

                            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 h-full flex flex-col hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-sm hover:shadow-xl">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${caseItem.color} flex items-center justify-center text-white shadow-lg`}>
                                        <Smartphone size={24} />
                                    </div>
                                    <span className="px-3 py-1 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm font-bold rounded-full border border-slate-200 dark:border-slate-700">
                                        {caseItem.year}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    {caseItem.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                    {caseItem.description}
                                </p>

                                <div className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-xl mt-auto border border-slate-200 dark:border-slate-700/50">
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Outcome</span>
                                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                        {caseItem.outcome}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Examples;

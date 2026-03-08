import { Scale, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800 text-slate-400">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    <div className="md:col-span-4 lg:col-span-5">
                        <a href="#" className="flex items-center gap-2 mb-6 w-fit">
                            <div className="p-2 bg-blue-600 rounded-lg text-white">
                                <Scale size={20} />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                UI<span className="text-blue-400">CopyCase</span>
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed max-w-sm mb-6">
                            An interactive academic case study exploring the intersection of UI/UX design, intellectual property law, and the software industry's balancing act between innovation and protection.
                        </p>
                    </div>

                    <div className="md:col-span-4 lg:col-span-3">
                        <h4 className="text-white font-bold mb-6">Study Sections</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#overview" className="hover:text-blue-400 transition-colors">The Case Overview</a></li>
                            <li><a href="#copyright" className="hover:text-blue-400 transition-colors">Copyright Fundamentals</a></li>
                            <li><a href="#arguments" className="hover:text-blue-400 transition-colors">Opposing Arguments</a></li>
                            <li><a href="#analysis" className="hover:text-blue-400 transition-colors">Legal Analysis</a></li>
                            <li><a href="#examples" className="hover:text-blue-400 transition-colors">Real-World Precedents</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-4">
                        <h4 className="text-white font-bold mb-6">Academic Disclaimer</h4>
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs leading-relaxed text-slate-400">
                            <p className="mb-2">
                                This website is a conceptual academic project created for educational purposes. It does not constitute formal legal advice.
                            </p>
                            <p>
                                The scenarios described are hypothetical composites based on real-world legal principles regarding software copyright and trade dress under US Intellectual Property law.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800 text-xs font-medium">
                    <p>© {new Date().getFullYear()} UI Copying Case Study. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with React, Tailwind & <Heart size={14} className="text-blue-500 fill-blue-500" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { useState, useEffect } from 'react';
import { Moon, Sun, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Check initial dark mode preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="p-2 bg-blue-600 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
                        <Scale size={24} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        UI<span className="text-blue-600 dark:text-blue-400">CopyCase</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <a href="#overview" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">The Case</a>
                    <a href="#copyright" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Copyright Law</a>
                    <a href="#arguments" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Arguments</a>
                    <a href="#analysis" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Legal Analysis</a>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;

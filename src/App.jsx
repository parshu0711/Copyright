import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseOverview from './components/CaseOverview';
import CopyrightInfo from './components/CopyrightInfo';
import Arguments from './components/Arguments';
import LegalAnalysis from './components/LegalAnalysis';
import Examples from './components/Examples';
import AuthorSection from './components/AuthorSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-sans antialiased selection:bg-blue-300 selection:text-blue-900 dark:selection:bg-blue-700 dark:selection:text-white">
            <Navbar />

            <main>
                <Hero />
                <CaseOverview />
                <CopyrightInfo />
                <Arguments />
                <LegalAnalysis />
                <Examples />
            </main>

            <AuthorSection />
            <Footer />
        </div>
    );
}

export default App;

function Header({ lang, setLang, t }) {
    const toggleLang = () => {
        setLang(prev => prev === 'de' ? 'en' : 'de');
    };

    const logoUrl = "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/04a99ba5-fb3b-4c0b-a6ae-d59560e1bebc.Untitled";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="container-custom h-20 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <img src={logoUrl} alt="Martin Kaltwasser Logo" className="h-8 w-auto" />
                    <span className="font-bold text-xl tracking-tight text-[var(--secondary-color)]">
                        KALTWASSER<span className="text-[var(--primary-color)]">.</span>io
                    </span>
                </a>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                        <a href="#profile" className="hover:text-[var(--secondary-color)] transition-colors">{t.nav.profile}</a>
                        <a href="#collaboration" className="hover:text-[var(--secondary-color)] transition-colors">{t.nav.collaboration}</a>
                        <a href="#usecases" className="hover:text-[var(--secondary-color)] transition-colors">{t.nav.useCases}</a>
                        <a href="#contact" className="hover:text-[var(--secondary-color)] transition-colors">{t.nav.contact}</a>
                    </nav>
                    <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
                    <LanguageSwitch currentLang={lang} onToggle={toggleLang} />
                    <a href="#contact" className="hidden sm:inline-flex items-center justify-center bg-[var(--primary-color)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm">
                        {t.nav.bookCall}
                    </a>
                </div>
            </div>
        </header>
    );
}
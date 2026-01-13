function Contact({ t }) {
    return (
        <section id="contact" className="py-24 bg-white border-t border-gray-100">
            <div className="container-custom text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">{t.contact.title}</h2>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
                    {t.contact.text}
                </p>
                
                <div className="flex justify-center mb-16">
                    <a href="https://calendar.app.google/FR4ynnSvxsc2Gz2ZA" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[var(--primary-color)] text-white font-bold text-xl rounded-lg hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1">
                        {t.contact.ctaPrimary}
                    </a>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg text-gray-600">
                    <a href="https://www.linkedin.com/in/martin-kaltwasser-931b22a9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--primary-color)] transition-colors font-medium">
                        <div className="icon-linkedin text-[#0A66C2]"></div>
                        <span>{t.contact.ctaSecondary}</span>
                    </a>
                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                        <div className="icon-mail"></div>
                        <a href={`mailto:${t.contact.emailLink}`} className="text-[var(--secondary-color)] hover:underline font-bold">{t.contact.emailLink}</a>
                    </div>
                </div>
                
                <div className="mt-24 pt-8 border-t border-gray-100 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Martin Kaltwasser. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-600 transition-colors">Impressum</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Datenschutz</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
function Hero({ t }) {
    const profileImage = "https://app.trickle.so/storage/public/images/anonymous/0a9f2661-d905-42d7-942a-47550d741169.Martin-Kaltwasser-Profilebild Kopie";

    return (
        <section className="pt-24 pb-20 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
            <div className="container-custom">
                {/* 
                  Mobile Layout (Flex-col):
                  1. Image + Name/Role (Top)
                  2. Headline (Center)
                  3. Subline & CTA (Bottom)
                  
                  Desktop Layout (Flex-row):
                  1. Text Content (Left)
                  2. Image + Name/Role (Right)
                */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
                    
                    {/* Mobile Only: Image Top for "Person First" */}
                    <div className="lg:hidden flex flex-col items-center text-center">
                         <div className="relative mb-6">
                            <div className="absolute inset-0 bg-[var(--secondary-color)] rounded-full transform rotate-3 opacity-10"></div>
                            <img 
                                src={profileImage} 
                                alt="Martin Kaltwasser"
                                className="relative w-40 h-40 object-cover rounded-full shadow-xl border-4 border-white"
                            />
                        </div>
                        <h2 className="text-lg font-bold text-gray-900">{t.hero.name}</h2>
                        <p className="text-[var(--primary-color)] font-medium text-sm tracking-wide uppercase mt-1">{t.hero.role}</p>
                    </div>

                    {/* Left Column (Desktop) / Main Content */}
                    <div className="flex-1 text-center lg:text-left flex flex-col gap-6">
                        
                        <span className="text-[var(--primary-color)] font-bold tracking-wider uppercase text-sm self-center lg:self-start hidden lg:block">
                            {t.hero.preHeadline}
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                            {t.hero.headline}
                        </h1>
                        
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            {t.hero.subline}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto justify-center lg:justify-start">
                            <a href="https://calendar.app.google/FR4ynnSvxsc2Gz2ZA" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-8 py-4 bg-[var(--primary-color)] text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20 text-center text-lg">
                                {t.hero.ctaPrimary}
                            </a>
                            <a href="https://www.linkedin.com/in/martin-kaltwasser-931b22a9/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg border border-gray-200 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shadow-sm hover:shadow-lg text-center text-lg group">
                                <span className="icon-linkedin mr-2 text-[#0A66C2] group-hover:text-white transition-colors"></span>
                                {t.hero.ctaSecondary}
                            </a>
                        </div>
                    </div>
                    
                    {/* Right Column (Desktop Only - Image + Name/Role) */}
                    <div className="hidden lg:flex flex-col items-center flex-shrink-0 relative mt-4">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-[var(--secondary-color)] rounded-[2rem] transform rotate-3 opacity-10"></div>
                            <img 
                                src={profileImage} 
                                alt="Martin Kaltwasser"
                                className="relative w-96 h-96 object-cover rounded-[2rem] shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                        
                        {/* Name & Role below image */}
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-gray-900">{t.hero.name}</h2>
                            <p className="text-[var(--primary-color)] font-medium text-sm tracking-wide uppercase mt-1">{t.hero.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
function Statement({ t }) {
    return (
        <section className="py-24 bg-[var(--secondary-color)] text-white text-center relative overflow-hidden">
            {/* Background decoration: Free Waves */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <svg className="absolute w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,300 C240,400 480,200 720,300 C960,400 1200,200 1440,300" opacity="0.5" />
                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,350 C240,450 480,250 720,350 C960,450 1200,250 1440,350" opacity="0.3" />
                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,250 C240,350 480,150 720,250 C960,350 1200,150 1440,250" opacity="0.3" />
                    <path fill="none" stroke="currentColor" strokeWidth="1" d="M-100,400 C200,550 500,200 800,350 C1100,500 1400,200 1600,400" opacity="0.2" />
                </svg>
            </div>

            <div className="container-custom max-w-4xl relative z-10">
                <div className="flex flex-col items-center gap-6">
                    <div className="icon-quote text-4xl text-[var(--primary-color)] mb-2"></div>
                    <h3 className="text-2xl md:text-3xl font-serif italic font-light leading-relaxed tracking-tight">
                        "{t.statement.text}"
                    </h3>
                    <div className="w-16 h-1 bg-[var(--primary-color)] rounded-full mt-4"></div>
                </div>
            </div>
        </section>
    );
}
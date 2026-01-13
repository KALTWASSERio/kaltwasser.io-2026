function Context({ t }) {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container-custom">
                <div className="py-16 md:py-20 bg-[var(--secondary-color)] text-white text-center rounded-2xl shadow-xl relative overflow-hidden">
                    {/* Abstract background element */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[var(--primary-color)] blur-3xl"></div>
                    </div>
                    
                    <div className="relative z-10 max-w-4xl mx-auto px-6">
                        <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 mb-8">
                            {t.context.text}
                        </p>
                        <div className="inline-block w-16 h-1 bg-[var(--primary-color)] mb-8 rounded-full"></div>
                        {/* Same font size as above, but bold for emphasis */}
                        <p className="text-xl md:text-2xl font-bold leading-tight tracking-tight">
                            {t.context.highlight}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
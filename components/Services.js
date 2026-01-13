function Services({ t }) {
    return (
        <section id="services" className="py-24 bg-gray-50/50 border-t border-gray-100">
            <div className="container-custom">
                <div className="max-w-3xl mb-16">
                    <span className="block text-sm font-bold tracking-wider text-[var(--primary-color)] uppercase mb-4">Services</span>
                    <h2 className="h2-display text-gray-900 mb-6">{t.services.title}</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">{t.services.intro}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.services.items.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-[var(--primary-color)] transition-colors duration-300">
                                <div className={`text-2xl text-[var(--primary-color)] group-hover:text-white transition-colors duration-300 ${index % 2 === 0 ? 'icon-search' : 'icon-chart-bar'}`}></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
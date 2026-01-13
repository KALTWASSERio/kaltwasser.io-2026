function Collaboration({ t }) {
    return (
        <section id="collaboration" className="py-24 bg-white border-t border-gray-100">
            <div className="container-custom">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">{t.collaboration.title}</h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">{t.collaboration.intro}</p>
                </div>

                <div className="grid grid-cols-1 gap-8 max-w-4xl">
                    {t.collaboration.items.map((item, index) => (
                        <div key={index} className="flex gap-6 items-start p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                            <div className="text-[var(--primary-color)] font-bold text-xl mt-0.5">
                                {index + 1}.
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title.substring(item.title.indexOf(' ') + 1)}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
function UseCases({ t }) {
    return (
        <section id="usecases" className="py-24 bg-white border-t border-gray-100">
            <div className="container-custom">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">{t.useCases.title}</h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">{t.useCases.intro}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {t.useCases.items.map((item, index) => (
                        <div key={index} className="flex flex-col h-full">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-light flex-grow">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
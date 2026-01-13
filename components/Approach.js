function Approach({ t }) {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <span className="block text-sm font-bold tracking-wider text-[var(--primary-color)] uppercase mb-4">Approach</span>
                            <h2 className="h2-display text-gray-900 mb-8">
                                {t.approach.title}
                            </h2>
                            <div className="hidden lg:block w-12 h-1 bg-[var(--primary-color)] rounded-full"></div>
                        </div>
                    </div>
                    
                    <div className="lg:w-2/3">
                        <div className="space-y-6 mb-16">
                            {t.approach.items.map((item, index) => (
                                <div key={index} className="flex gap-5 items-start">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                        <div className="icon-check text-green-600 text-sm"></div>
                                    </div>
                                    <p className="text-xl text-gray-800 font-light">{item}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="relative p-10 bg-[var(--secondary-color)] rounded-2xl text-white overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <div className="icon-quote text-9xl text-white transform translate-x-1/4 -translate-y-1/4"></div>
                            </div>
                            <div className="relative z-10">
                                <p className="text-2xl md:text-3xl font-medium leading-normal font-serif italic">
                                    "{t.approach.quote}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
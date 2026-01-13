function TargetAudience({ t }) {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container-custom">
                <div className="max-w-prose mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-8">{t.targetAudience.title}</h2>
                    
                    <p className="text-xl text-gray-600 leading-relaxed font-light mb-10">
                        {t.targetAudience.intro}
                    </p>

                    <div className="space-y-8 mb-12">
                        {t.targetAudience.list.map((item, index) => (
                            <div key={index} className="pl-6 border-l-4 border-[var(--primary-color)]">
                                <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                                <p className="text-lg text-gray-600 font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                        <p>{t.targetAudience.outro1}</p>
                        <p>{t.targetAudience.outro2}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
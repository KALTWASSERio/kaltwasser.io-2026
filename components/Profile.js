function Profile({ t }) {
    return (
        <section id="profile" className="py-24 bg-white relative">
            <div className="container-custom">
                <div className="max-w-prose mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-8">{t.profile.title}</h2>
                    
                    <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                        <p className="font-medium text-gray-900">
                            {t.profile.p1}
                        </p>
                        <p>{t.profile.p2}</p>
                        <p>{t.profile.p3}</p>
                        <p>{t.profile.p4}</p>
                        <div className="pt-4 border-t border-gray-100">
                             <p className="text-gray-900 italic font-medium">
                                {t.profile.p5}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
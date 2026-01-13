function LogoMarquee({ t }) {
    const logos = [
        "https://app.trickle.so/storage/public/images/anonymous/366d79ca-3f5f-42f7-af98-399c2483c05f.Shelly_Group_logo",
        "https://app.trickle.so/storage/public/images/anonymous/0a9d3678-c4a2-4a33-8452-e4ceb55ac1c2.eatsmarter-logo",
        "https://app.trickle.so/storage/public/images/anonymous/25b606e4-46d2-418c-a7c3-1887549a0483.svg",
        "https://app.trickle.so/storage/public/images/anonymous/de4870cb-edce-47eb-bae9-efd43ade63f8.de-logo",
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/03b84119-ca0d-4868-896b-e0c881373248.Untitled", // Bauer Media
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/735527e5-f113-484d-9eb0-69a9064e06f1.Untitled", // Bresso
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/4d3e4bd0-b034-41ed-951e-10ce1fc3685c.png", // Engel & Volkers
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/b3c80ef1-89dd-4df8-b0fb-d017eeda8432.webp", // Geramont
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/97f850e5-d6c5-4b7c-b351-1aa2c8c922f4.svg", // Gesundheit.de
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/4e591708-c6e2-49fd-a8c3-2cb19e4023b8.png", // Immowelt
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/09cbaad9-0e34-4e40-a766-464c7b04fb9a.svg", // Lecker
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/42ec785e-486d-4096-a3bc-276be16680f4.svg", // Markt und Mittelstand
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/7775904e-5c99-4994-b4c0-ef9376f839bd.png", // Pryntad
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/7399bb47-a28e-43a9-90f5-0ccf7af51094.png", // Savencia
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/d5f980f1-0ea8-4f46-bfa9-b8789b01f203.webp", // TrustYou
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/21d7ecb1-578b-4bb9-97f1-7ffc8c21898f.png", // UFA Revue
        "https://app.trickle.so/storage/public/images/usr_1a0d528af8000001/0671c4cc-0b83-4873-86bb-9150c1362667.png" // Wolfsblut
    ];

    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="container-custom mb-10 text-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.logos.title}</p>
            </div>
            
            <div className="relative w-full overflow-hidden mask-image-gradient">
                <div className="flex w-max animate-scroll">
                    {/* First Set */}
                    <div className="flex flex-shrink-0 items-center gap-12 px-6">
                        {logos.map((logo, index) => (
                            <div key={`l1-${index}`} className="flex items-center justify-center w-32 md:w-40 flex-shrink-0">
                                <img 
                                    src={logo} 
                                    className="max-h-8 md:max-h-12 w-auto object-contain grayscale opacity-40 hover:opacity-100 transition-all duration-300 filter"
                                    alt="Client logo"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Second Set for Loop */}
                    <div className="flex flex-shrink-0 items-center gap-12 px-6">
                        {logos.map((logo, index) => (
                            <div key={`l2-${index}`} className="flex items-center justify-center w-32 md:w-40 flex-shrink-0">
                                <img 
                                    src={logo} 
                                    className="max-h-8 md:max-h-12 w-auto object-contain grayscale opacity-40 hover:opacity-100 transition-all duration-300 filter"
                                    alt="Client logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                .mask-image-gradient {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    );
}
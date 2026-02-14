const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Material Selection & Sourcing",
            description: "We source the finest raw materials from certified suppliers, ensuring quality from the very beginning.",
        },
        {
            number: "02",
            title: "Expert Craftsmanship & Design",
            description: "Our skilled team uses advanced machinery and traditional techniques to create superior textile products.",
        },
        {
            number: "03",
            title: "Quality Assurance & Testing",
            description: "Every product undergoes rigorous testing and inspection to meet international quality standards.",
        },
        {
            number: "04",
            title: "Global Delivery & Support",
            description: "Efficient logistics and reliable shipping ensure your order arrives on time, anywhere in the world.",
        },
    ];

    return (
        <section id="process" className="py-16 md:py-24 bg-background relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our 4-Step Process to a<br />Successful Build
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From sourcing to delivery, every step is executed with precision and care.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative"
                        >
                            {/* Large Number Background */}
                            <div className="text-[120px] md:text-[150px] font-bold text-primary/10 leading-none mb-4">
                                {step.number}
                            </div>

                            {/* Content */}
                            <div className="-mt-20">
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Decorative dot */}
                            <div className="absolute top-8 right-0 w-3 h-3 bg-primary rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;

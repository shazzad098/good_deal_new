import { CheckCircle, Shield, TrendingUp, Users } from "lucide-react";
import qualityImage from "@/assets/quality-control.jpg";

const WhyChooseUs = () => {
    const advantages = [
        {
            icon: CheckCircle,
            title: "Quality & Innovation",
            description: "State-of-the-art manufacturing combined with rigorous quality control ensures every product meets international standards.",
        },
        {
            icon: Shield,
            title: "Reliability & Service",
            description: "Consistent delivery schedules and responsive customer support make us a trusted partner for global businesses.",
        },
        {
            icon: TrendingUp,
            title: "Competitive Pricing",
            description: "Efficient operations and strategic sourcing allow us to offer premium quality at competitive market rates.",
        },
        {
            icon: Users,
            title: "Partnership Approach",
            description: "We work closely with our clients to understand their needs and deliver customized textile solutions.",
        },
    ];

    return (
        <section id="about" className="py-16 md:py-24 bg-secondary/20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={qualityImage}
                                alt="Quality Control Process"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />

                            {/* Stats Overlay */}
                            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                                <div className="bg-card/95 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-foreground">100%</div>
                                    <div className="text-sm text-muted-foreground">Quality Inspected</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Why Choose Good Deal?
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                With over 15 years of experience in the global textile industry,
                                we've built a reputation for excellence and reliability.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {advantages.map((advantage, index) => {
                                const Icon = advantage.icon;
                                return (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground mb-2">
                                                {advantage.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {advantage.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

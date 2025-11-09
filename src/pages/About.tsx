import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Building, Target, Users, CheckCircle, Leaf, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// বিদ্যমান অ্যাসেটগুলো পুনঃব্যবহার করা হচ্ছে
import factoryImage from "@/assets/hero-factory.jpg";
import teamImage1 from "@/assets/hero-worker.jpg";
import teamImage2 from "@/assets/quality-control.jpg";

const AboutPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            {/* পেজ হেডার */}
            <section className={cn(
                "relative pt-28 pb-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden transition-all duration-1000 ease-out",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            )}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <Building className="w-16 h-16 text-white mx-auto mb-6" />
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            About Good Deal
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Pioneering textile excellence through innovation, quality, and sustainable practices for a global market.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story সেকশন */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Journey</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                From Humble Beginnings to a Global Leader
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Founded over 15 years ago, Good Deal started with a simple mission: to provide high-quality knitwear to the local market. Driven by a passion for craftsmanship and an unwavering commitment to quality, we quickly expanded our horizons.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Today, we are a trusted name in the global textile industry, exporting premium products to the Middle East and beyond. Our journey is one of resilience, innovation, and partnership.
                            </p>
                            <Button asChild variant="cta" size="lg" className="rounded-full">
                                <Link to="/products">Explore Our Products</Link>
                            </Button>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img src={factoryImage} alt="Good Deal Factory" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values সেকশন */}
            <section className="py-16 md:py-24 bg-secondary/10">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            The principles that guide our business every day.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-foreground mb-2">Unmatched Quality</h3>
                            <p className="text-muted-foreground text-sm">
                                Rigorous quality control at every stage ensures every product meets international standards.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-foreground mb-2">Sustainability</h3>
                            <p className="text-muted-foreground text-sm">
                                We are committed to eco-friendly processes and ethical sourcing to protect our planet.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-foreground mb-2">Global Partnership</h3>
                            <p className="text-muted-foreground text-sm">
                                We build long-lasting relationships with our clients based on trust, reliability, and mutual success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet The Team সেকশন */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            The driving force behind our quality and innovation.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Placeholder Team Member 1 */}
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg mb-4 border-4 border-primary/20">
                                <img src={teamImage1} alt="Team Member 1" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">A. K. Azad</h3>
                            <p className="text-muted-foreground">Founder & CEO</p>
                        </div>
                        {/* Placeholder Team Member 2 */}
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg mb-4 border-4 border-primary/20">
                                <img src={teamImage2} alt="Team Member 2" className="w-full h-full object-cover object-[20%_30%]" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Sadiya Rahman</h3>
                            <p className="text-muted-foreground">Head of Quality Assurance</p>
                        </div>
                        {/* Placeholder Team Member 3 */}
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg mb-4 border-4 border-primary/20 bg-gray-200 flex items-center justify-center">
                                <Users className="w-16 h-16 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Michael Lee</h3>
                            <p className="text-muted-foreground">Production Manager</p>
                        </div>
                        {/* Placeholder Team Member 4 */}
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg mb-4 border-4 border-primary/20 bg-gray-200 flex items-center justify-center">
                                <Users className="w-16 h-16 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">David Chen</h3>
                            <p className="text-muted-foreground">Logistics Head</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
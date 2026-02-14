import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroWorker from "@/assets/hero-worker.jpg";
import heroFabrics from "@/assets/hero-fabrics.jpg";
import heroFactory from "@/assets/hero-factory.jpg";

// ✨ 1. প্রয়োজনীয় হুকস এবং cn ইমপোর্ট করুন
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
    // ✨ 2. লোডিং স্টেট যোগ করুন
    const [isLoaded, setIsLoaded] = useState(false);

    // ✨ 3. কম্পোনেন্ট মাউন্ট হলে স্টেট পরিবর্তন করুন
    useEffect(() => {
        // একটি ছোট ডিলে দেওয়া হয়েছে যাতে অ্যানিমেশনটি দৃশ্যমান হয়
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100); // 100ms পর অ্যানিমেশন শুরু হবে

        return () => clearTimeout(timer); // ক্লিনআপ
    }, []);


    return (
        <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background relative overflow-hidden">
            {/* Decorative circles (অপরিবর্তিত) */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* ✨ 4. টেক্সট কন্টেন্টে অ্যানিমেশন ক্লাস যোগ করুন */}
                    <div className={cn(
                        "space-y-6 transition-all duration-1000 ease-out",
                        // প্রাথমিক অবস্থা: অদৃশ্য এবং বামে সরানো
                        isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    )}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            Focused on delivering
                            <span className="block">thoughtful design <span className="italic">and</span></span>
                            <span className="block text-primary">flawless execution.</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                            We deliver exceptional knitwear solutions through ethical sourcing,
                            sustainable production, and reliable export services. Connecting continents
                            with premium quality textiles.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button variant="cta" size="lg" className="rounded-full">
                                Get Started
                            </Button>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>15+ Years Experience</span>
                            </div>
                        </div>
                    </div>

                    {/* ✨ 5. ইমেজ কোলাজে অ্যানিমেশন ক্লাস যোগ করুন */}
                    <div className={cn(
                        "relative h-[550px] lg:h-[650px] flex items-center justify-center transition-all duration-1000 ease-out delay-300", // 300ms ডিলে
                        // প্রাথমিক অবস্থা: অদৃশ্য এবং ডানে সরানো
                        isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    )}>
                        {/* Image 2: Layered behind (Top Left) */}
                        <div className="absolute top-10 left-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-background rotate-[-8deg] transition-transform hover:rotate-[-10deg] duration-500">
                            <img
                                src={heroFabrics}
                                alt="Premium Fabrics"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Image 3: Secondary Layer (Top Right) */}
                        <div className="absolute top-0 right-0 w-[50%] h-[40%] rounded-2xl overflow-hidden shadow-xl z-20 rotate-[4deg] transition-transform hover:rotate-[6deg] duration-500">
                            <img
                                src={heroFactory}
                                alt="Manufacturing"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Image 1: Main Focus (Bottom Right) */}
                        <div className="absolute bottom-0 right-[10%] w-[65%] h-[65%] rounded-3xl overflow-hidden shadow-2xl z-30 border-8 border-background rotate-[5deg] transition-transform hover:scale-[1.03] duration-500">
                            <img
                                src={heroWorker}
                                alt="Textile Professional"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative elements (অপরিবর্তিত) */}
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0"></div>
                        <div className="absolute top-0 -left-10 w-32 h-32 bg-secondary/30 rounded-full blur-2xl z-0"></div>
                    </div>
                    {/* ------------------------------------------- */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
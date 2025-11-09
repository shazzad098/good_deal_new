import { Award, Leaf, Globe, Users, CheckCircle, TrendingUp } from "lucide-react";
// ✨ 1. React হুকস ইমপোর্ট করা হয়েছে
import React, { useState, useEffect, useRef } from "react";

// ✨ 2. স্মুথ অ্যানিমেশনের জন্য একটি Easing ফাংশন
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// ✨ 3. নতুন AnimatedCounter কম্পোনেন্ট তৈরি করা হয়েছে
const AnimatedCounter = ({ targetValue, duration = 2000 }: { targetValue: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false); // নিশ্চিত করে যে অ্যানিমেশনটি শুধু একবার চলবে

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true; // অ্যানিমেশন শুরু হয়েছে
                let startTime: number | null = null;

                const animate = (timestamp: number) => {
                    if (startTime === null) {
                        startTime = timestamp;
                    }

                    const elapsed = timestamp - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = easeOutCubic(progress); // স্মুথ করার জন্য easing ব্যবহার

                    const currentCount = Math.floor(easedProgress * targetValue);
                    setCount(currentCount);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        setCount(targetValue); // নিশ্চিত করা যে শেষ মানটি সঠিক
                    }
                };

                requestAnimationFrame(animate);
                observer.unobserve(element); // অ্যানিমেশন শেষে observer বন্ধ করা
            }
        }, {
            threshold: 0.1 // ১০% দেখা গেলেই অ্যানিমেশন শুরু হবে
        });

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [targetValue, duration]);

    // toLocaleString() সংখ্যাকে কমা সহ ফরম্যাট করবে (e.g., 1,680)
    return <span ref={ref}>{count.toLocaleString()}</span>;
};


const Mission = () => {
    return (
        <section className="py-16 md:py-24 bg-secondary/20">
            <div className="container mx-auto px-4">
                {/* Title Section (অপরিবর্তিত) */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Built on Experience. Driven by Quality.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our mission is to deliver premium textiles that exceed expectations
                    </p>
                </div>

                {/* Content and Stats Grid (অপরিবর্তিত) */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Services (অপরিবর্তিত) */}
                    <div className="lg:mt-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                            End-to-End Solutions You Can Rely On
                        </h3>
                        <p className="text-muted-foreground mb-10 leading-relaxed">
                            From sourcing premium materials to delivering finished products globally,
                            we provide comprehensive textile solutions backed by decades of expertise.
                        </p>

                        <div className="grid gap-8">
                            <div className="flex gap-4 items-start group">
                                <div className="w-12 h-12 rounded-lg bg-background group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md border border-border">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-lg mb-1">Ethical Sourcing</h4>
                                    <p className="text-sm text-muted-foreground">Certified suppliers committed to fair labor and quality</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="w-12 h-12 rounded-lg bg-background group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md border border-border">
                                    <Leaf className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-lg mb-1">Sustainable Production</h4>
                                    <p className="text-sm text-muted-foreground">Eco-friendly processes minimizing environmental impact</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="w-12 h-12 rounded-lg bg-background group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md border border-border">
                                    <Globe className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-lg mb-1">Reliable Export</h4>
                                    <p className="text-sm text-muted-foreground">On-time global delivery with quality assurance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ✨ 4. ডান কলামে AnimatedCounter ব্যবহার করা হয়েছে */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Large Stat Card */}
                        <div className="col-span-2 bg-card p-8 rounded-2xl border border-border relative overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                            <Award className="w-12 h-12 text-primary mb-4" />
                            {/* 👇 পরিবর্তন এখানে */}
                            <div className="text-5xl font-bold text-foreground mb-2">
                                <AnimatedCounter targetValue={1680} />+
                            </div>
                            <p className="text-muted-foreground">Successful Projects Delivered</p>
                        </div>

                        {/* Team Photos & Count */}
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                            <Users className="w-10 h-10 text-primary mb-4" />
                            {/* 👇 পরিবর্তন এখানে */}
                            <div className="text-4xl font-bold text-foreground mb-2">
                                <AnimatedCounter targetValue={25} />+
                            </div>
                            <p className="text-muted-foreground text-sm">Expert Team Members</p>
                            <div className="flex -space-x-2 mt-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background ring-2 ring-background"></div>
                                <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background ring-2 ring-background"></div>
                                <div className="w-8 h-8 rounded-full bg-primary/40 border-2 border-background ring-2 ring-background"></div>
                            </div>
                        </div>

                        {/* Satisfaction Rate */}
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                            <CheckCircle className="w-10 h-10 text-primary mb-4" />
                            {/* 👇 পরিবর্তন এখানে */}
                            <div className="text-4xl font-bold text-foreground mb-2">
                                <AnimatedCounter targetValue={100} />%
                            </div>
                            <p className="text-muted-foreground text-sm">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
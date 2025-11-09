import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react"; // ✨ State ম্যানেজমেন্টের জন্য ইমপোর্ট
import { cn } from "@/lib/utils"; // ✨ ডাইনামিক ক্লাসের জন্য ইমপোর্ট

// ✨ 1. একাধিক রিভিউয়ের জন্য ডেটা অ্যারে
const testimonials = [
    {
        quote: "Good Deal has been our trusted textile partner for over 5 years. Their commitment to quality and timely delivery is unmatched in the industry. We've built a strong partnership based on reliability and excellence.",
        author: "Ahmed Al-Rashid",
        title: "CEO, Middle East Retail Group",
        initials: "AR",
        rating: 5,
    },
    {
        quote: "The sustainable sourcing and fabric quality from Good Deal have significantly improved our product line. Their team is professional and always responsive.",
        author: "Sarah Chen",
        title: "Founder, EcoThreads",
        initials: "SC",
        rating: 5,
    },
    {
        quote: "Working with Good Deal scaled our production without compromising on the craftsmanship. Their attention to detail is truly commendable. Highly recommended!",
        author: "Michael B.",
        title: "Supply Chain Manager, NY Apparel",
        initials: "MB",
        rating: 4,
    }
];

const Testimonials = () => {
    // ✨ 2. বর্তমান স্লাইড ট্র্যাক করার জন্য স্টেট
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // বর্তমান রিভিউ অবজেক্ট
    const activeTestimonial = testimonials[currentIndex];

    return (
        <section className="py-16 md:py-24 bg-secondary/10">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Trusted by businesses worldwide for quality and reliability
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto relative">
                    {/* ✨ 3. মূল কার্ড (এটি স্ট্যাটিক থাকবে) */}
                    <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-lg min-h-[360px] md:min-h-[300px] flex items-center relative overflow-hidden">

                        {/* ডেকোরেটিভ Quote আইকন */}
                        <Quote className="absolute -top-4 -left-4 w-24 h-24 text-primary/10" />

                        {/* ✨ 4. অ্যানিমেটেড কন্টেন্ট (এটি পরিবর্তিত হবে) */}
                        {/* key={currentIndex} ব্যবহারের ফলে React প্রতিটি স্লাইডকে নতুন কম্পোনেন্ট হিসেবে ধরে এবং fade-in অ্যানিমেশনটি ট্রিগার করে */}
                        <div
                            key={currentIndex}
                            className="flex flex-col md:flex-row gap-8 items-center w-full animate-in fade-in duration-500"
                        >
                            {/* Profile Image (ডাইনামিক) */}
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-background shadow-lg overflow-hidden">
                                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-primary">{activeTestimonial.initials}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content (ডাইনামিক) */}
                            <div className="flex-1">
                                {/* Rating (ডাইনামিক) */}
                                <div className="flex gap-1 mb-4 justify-center md:justify-start">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={cn(
                                                "w-5 h-5",
                                                i < activeTestimonial.rating ? "fill-primary text-primary" : "text-muted/30"
                                            )}
                                        />
                                    ))}
                                </div>

                                {/* Quote (ডাইনামিক) */}
                                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 text-center md:text-left">
                                    "{activeTestimonial.quote}"
                                </p>

                                {/* Author (ডাইনামিক) */}
                                <div className="text-center md:text-left">
                                    <div className="font-bold text-foreground text-lg">{activeTestimonial.author}</div>
                                    <div className="text-muted-foreground">{activeTestimonial.title}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ✨ 5. ডেস্কটপ নেভিগেশন (কার্ডের বাইরে) */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full w-12 h-12 border-2 absolute top-1/2 -translate-y-1/2 -left-6 hidden md:flex bg-background hover:bg-card"
                        onClick={prevTestimonial}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full w-12 h-12 border-2 bg-primary text-primary-foreground hover:bg-primary/90 absolute top-1/2 -translate-y-1/2 -right-6 hidden md:flex"
                        onClick={nextTestimonial}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Button>

                    {/* ✨ 6. মোবাইল ডট নেভিগেশন */}
                    <div className="flex justify-center gap-2 mt-8 md:hidden">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all duration-300",
                                    currentIndex === index ? "bg-primary scale-125" : "bg-muted/50 hover:bg-muted"
                                )}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
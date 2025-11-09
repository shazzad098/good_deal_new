import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
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
                    <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-lg">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Profile Image */}
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-background shadow-lg overflow-hidden">
                                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-primary">AK</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {/* Rating */}
                                <div className="flex gap-1 mb-4 justify-center md:justify-start">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 text-center md:text-left">
                                    "Good Deal has been our trusted textile partner for over 5 years.
                                    Their commitment to quality and timely delivery is unmatched in the
                                    industry. We've built a strong partnership based on reliability and excellence."
                                </p>

                                {/* Author */}
                                <div className="text-center md:text-left">
                                    <div className="font-bold text-foreground text-lg">Ahmed Al-Rashid</div>
                                    <div className="text-muted-foreground">CEO, Middle East Retail Group</div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-3 justify-center md:justify-end mt-8">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full w-12 h-12 border-2"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full w-12 h-12 border-2 bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

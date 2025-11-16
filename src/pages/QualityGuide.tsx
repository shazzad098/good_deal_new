import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// ✨ Home আইকন ইমপোর্ট করা হয়েছে, ShieldCheck রিমুভ করা হয়েছে
import { CheckCircle, Home } from "lucide-react";
import qualityImage from "@/assets/quality-control.jpg"; // আপনার বিদ্যমান কোয়ালিটি ইমেজ

// ✨ অ্যানিমেশন এবং ব্রেডক্রাম্ব এর জন্য ইমপোর্ট
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const QualityGuide = () => {
    // ✨ অ্যানিমেশনের জন্য স্টেট
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const qualitySteps = [
        "Step 1: Raw Material Inspection",
        "Step 2: Fabric Weaving & Knitting Control",
        "Step 3: Dyeing & Finishing Check",
        "Step 4: In-Line Sewing Inspection",
        "Step 5: Final Garment Inspection (AQL 2.5)",
        "Step 6: Packaging & Labeling Verification"
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            {/* ✨ নতুন সিম্পল হেডার (আগের সেকশনটি প্রতিস্থাপন করা হয়েছে) */}
            <section className="pt-28 pb-12 bg-white border-b border-gray-200">
                <div className={cn(
                    "container mx-auto px-6 transition-all duration-1000 ease-out",
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                )}>
                    <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="flex items-center gap-1">
                                    <Home className="w-4 h-4" />
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Quality Guide</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        Our Quality Guide
                    </h1>
                    <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                        Our commitment to excellence is woven into every fiber of our products.
                    </p>
                </div>
            </section>

            {/* কন্টেন্ট সেকশন (অপরিবর্তিত) */}
            <section className="py-16 md:py-24 flex-1">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        {/* বাম কলাম: টেক্সট */}
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Good Deal Standard</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Quality isn't just a final check; it's a multi-stage process integrated into our entire production line. We are dedicated to delivering textiles that not only meet but exceed international standards.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Our comprehensive Quality Assurance (QA) framework ensures consistency, durability, and safety from raw materials to the finished garment.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our 6-Point QA Process:</h3>
                            <ul className="space-y-3">
                                {qualitySteps.map((step, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ডান কলাম: ইমেজ */}
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src={qualityImage}
                                alt="Quality Control Process"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default QualityGuide;
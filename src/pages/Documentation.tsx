import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
// ✨ Home আইকন ইমপোর্ট করা হয়েছে এবং BookOpen রিমুভ করা হয়েছে (কারণ এটি নিচে ব্যবহৃত হচ্ছে)
import { FileText, Package, Home, BookOpen } from "lucide-react";
import { useState, useEffect } from "react"; // ✨ অ্যানিমেশনের জন্য ইমপোর্ট
import { cn } from "@/lib/utils"; // ✨ অ্যানিমেশনের জন্য ইমপোর্ট

// ✨ Breadcrumb কম্পোনেন্ট ইমপোর্ট করা হয়েছে
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Documentation = () => {
    // ✨ অ্যানিমেশনের জন্য স্টেট
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
                                <BreadcrumbPage>Documentation</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        Documentation
                    </h1>
                    <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                        Explore our technical guides, product specifications, and integration documents.
                    </p>
                </div>
            </section>

            {/* কন্টেন্ট সেকশন (অপরিবর্তিত) */}
            <section className="py-16 md:py-24 flex-1">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Welcome to the Good Deal documentation portal. Here you will find all the necessary information to understand our products, ordering process, and technical specifications.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Whether you are a new client or a long-term partner, these guides are designed to help you make the most of our services.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Product Specs */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                                <Package className="w-8 h-8 text-primary mb-3" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Specifications</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Detailed datasheets on all our products, including fabric composition, weight, and sizing charts.
                                </p>
                                <Button variant="outline" size="sm">Read Specs</Button>
                            </div>

                            {/* API Guide */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                                <FileText className="w-8 h-8 text-primary mb-3" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ordering API (v1.2)</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Integrate your systems directly with our ordering API for seamless bulk purchases.
                                </p>
                                <Button variant="outline" size="sm">View API Guide</Button>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Standards</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                All our products adhere to strict international compliance and safety standards. Download our compliance certificates and reports here.
                            </p>
                            <Button variant="default" className="bg-primary hover:bg-primary/90">Download Compliance Pack</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Documentation;
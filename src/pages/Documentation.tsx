import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import { BookOpen, FileText, Package } from "lucide-react";

const Documentation = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            {/* পেজ হেডার */}
            <section className="relative pt-28 pb-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <BookOpen className="w-16 h-16 text-white mx-auto mb-6" />
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Documentation
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Explore our technical guides, product specifications, and integration documents.
                        </p>
                    </div>
                </div>
            </section>

            {/* কন্টেন্ট সেকশন */}
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
                                <Package className="w-8 h-8 text-blue-600 mb-3" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Specifications</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Detailed datasheets on all our products, including fabric composition, weight, and sizing charts.
                                </p>
                                <Button variant="outline" size="sm">Read Specs</Button>
                            </div>

                            {/* API Guide */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                                <FileText className="w-8 h-8 text-blue-600 mb-3" />
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
                            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">Download Compliance Pack</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Documentation;
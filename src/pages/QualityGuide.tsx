import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, CheckCircle } from "lucide-react";
import qualityImage from "@/assets/quality-control.jpg"; // আপনার বিদ্যমান কোয়ালিটি ইমেজ

const QualityGuide = () => {
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

            {/* পেজ হেডার */}
            <section className="relative pt-28 pb-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <ShieldCheck className="w-16 h-16 text-white mx-auto mb-6" />
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Our Quality Guide
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Our commitment to excellence is woven into every fiber of our products.
                        </p>
                    </div>
                </div>
            </section>

            {/* কন্টেন্ট সেকশন */}
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
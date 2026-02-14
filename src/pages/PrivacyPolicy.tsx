import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const PrivacyPolicy = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setIsLoaded(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-zinc-50">
            <Navbar />

            {/* HERO */}
            <section className="relative pt-28 pb-12 border-b border-zinc-200 overflow-hidden bg-white">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white" />
                    <div className="absolute -top-28 left-1/2 h-44 w-[720px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
                </div>

                <div
                    className={cn(
                        "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
                    )}
                >
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm w-fit">
                            <Shield className="h-3.5 w-3.5 text-zinc-600" />
                            Your Privacy Matters
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                            Privacy Policy
                        </h1>
                        <p className="text-base md:text-lg text-zinc-600 max-w-2xl">
                            Last updated: February 14, 2026. This policy describes how we collect, use, and handle your information.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-12 md:py-16 flex-1">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-8 md:p-12 shadow-sm space-y-12">
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-zinc-100">
                                    <Eye className="h-5 w-5 text-zinc-900" />
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-900">1. Information We Collect</h2>
                            </div>
                            <p className="text-zinc-600 leading-relaxed">
                                We collect information that you provide directly to us, such as when you request a quote, contact us for support, or subscribe to our newsletter. This may include your name, email address, phone number, and company details.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-zinc-100">
                                    <FileText className="h-5 w-5 text-zinc-900" />
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-900">2. How We Use Information</h2>
                            </div>
                            <p className="text-zinc-600 leading-relaxed">
                                We use the information we collect to provide, maintain, and improve our services, to communicate with you about your orders, and to send you technical notices, updates, and security alerts.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-zinc-600">
                                <li>To process your product inquiries and quotes.</li>
                                <li>To provide customer support and respond to your messages.</li>
                                <li>To monitor and analyze trends and usage of our website.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-zinc-100">
                                    <Lock className="h-5 w-5 text-zinc-900" />
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-900">3. Data Security</h2>
                            </div>
                            <p className="text-zinc-600 leading-relaxed">
                                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                            </p>
                        </div>

                        <div className="space-y-4 pt-8 border-t border-zinc-100">
                            <h2 className="text-xl font-bold text-zinc-900">Contact Us</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br />
                                <span className="font-semibold text-zinc-900">Email: good.deal326@gmail.com</span>
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer showContactForm={false} />
        </div>
    );
};

export default PrivacyPolicy;

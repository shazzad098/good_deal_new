import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Scale, FileCheck, AlertCircle, Info } from "lucide-react";

const TermsOfService = () => {
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
                            <Scale className="h-3.5 w-3.5 text-zinc-600" />
                            Terms & Conditions
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                            Terms of Service
                        </h1>
                        <p className="text-base md:text-lg text-zinc-600 max-w-2xl">
                            Last updated: February 14, 2026. Please read these terms carefully before using our services.
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
                                    <Info className="h-5 w-5 text-zinc-900" />
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-900">1. Acceptance of Terms</h2>
                            </div>
                            <p className="text-zinc-600 leading-relaxed">
                                By accessing and using the Good Deal website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-zinc-100">
                                    <FileCheck className="h-5 w-5 text-zinc-900" />
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-900">2. Use License</h2>
                            </div>
                            <p className="text-zinc-600 leading-relaxed">
                                Permission is granted to temporarily download one copy of the materials (information or software) on Good Deal's website for personal, non-commercial transitory viewing only.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-zinc-100">
                                    <AlertCircle className="h-5 w-5 text-zinc-900" />
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-900">3. Disclaimer</h2>
                            </div>
                            <p className="text-zinc-600 leading-relaxed">
                                The materials on Good Deal's website are provided on an 'as is' basis. Good Deal makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                        </div>

                        <div className="space-y-4 pt-8 border-t border-zinc-100">
                            <h2 className="text-xl font-bold text-zinc-900">Governing Law</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                These terms and conditions are governed by and construed in accordance with the laws of Bangladesh and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer showContactForm={false} />
        </div>
    );
};

export default TermsOfService;

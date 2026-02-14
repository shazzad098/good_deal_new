import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Home, Shield, Layers, BadgeCheck } from "lucide-react";
import qualityImage from "@/assets/quality-control.jpg";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";


const QualityGuide = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setIsLoaded(true), 80);
        return () => clearTimeout(t);
    }, []);

    const qualitySteps = [
        { title: "Raw Material Inspection", desc: "We verify yarn quality, count, strength, and supplier consistency." },
        { title: "Fabric Weaving & Knitting Control", desc: "Process monitoring to prevent defects and ensure uniform structure." },
        { title: "Dyeing & Finishing Check", desc: "Color consistency, shrinkage control, and finishing standards." },
        { title: "In-Line Sewing Inspection", desc: "On-line checks during production to catch issues early." },
        { title: "Final Garment Inspection (AQL 2.5)", desc: "Final QA following sampling standards to ensure reliability." },
        { title: "Packaging & Labeling Verification", desc: "Correct labels, folding, packing, and shipment readiness checks." },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-zinc-50">
            <Navbar />

            {/* HERO (light, premium) */}
            <section className="relative pt-28 pb-12 border-b border-zinc-200 overflow-hidden bg-white">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white" />
                    <div className="absolute -top-28 left-1/2 h-44 w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
                    <div className="absolute -top-40 right-10 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
                </div>

                <div
                    className={cn(
                        "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
                    )}
                >


                    <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] items-end">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm">
                                <BadgeCheck className="h-3.5 w-3.5 text-zinc-600" />
                                Our Quality Standard
                            </div>

                            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                                Our Quality Guide
                            </h1>

                            <p className="mt-3 text-base md:text-lg text-zinc-600 max-w-2xl">
                                Quality isn’t a final checkpoint — it’s built into every stage of production.
                                Here’s how we ensure consistency, durability, and trust.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur p-5 shadow-sm">
                            <div className="flex items-start gap-3">
                                <Shield className="h-5 w-5 text-zinc-700 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-zinc-900">Quality assurance</div>
                                    <div className="text-sm text-zinc-600">Multi-stage inspection framework</div>
                                </div>
                            </div>

                            <div className="mt-4 flex items-start gap-3">
                                <Layers className="h-5 w-5 text-zinc-700 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-zinc-900">Consistency first</div>
                                    <div className="text-sm text-zinc-600">From yarn → fabric → finished garment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-12 md:py-16 flex-1">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2 items-start">
                        {/* Left: Process */}
                        <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
                            <h2 className="text-2xl font-bold text-zinc-900">The Good Deal Standard</h2>
                            <p className="mt-2 text-zinc-600 leading-relaxed">
                                We don’t “inspect quality at the end.” We control quality at every step so defects
                                don’t travel down the production line.
                            </p>

                            <div className="mt-7">
                                <div className="text-sm font-semibold text-zinc-900 mb-3">
                                    Our 6-Point QA Process
                                </div>

                                <div className="space-y-3">
                                    {qualitySteps.map((step, idx) => (
                                        <div
                                            key={step.title}
                                            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 hover:bg-zinc-100/60 transition"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-bold text-zinc-900">
                                                    {idx + 1}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-sm font-semibold text-zinc-900">
                                                            {step.title}
                                                        </div>
                                                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                                                    </div>
                                                    <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                                                        {step.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Optional note (still professional, not spammy) */}
                                <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5">
                                    <div className="text-sm font-semibold text-zinc-900">
                                        Why this matters
                                    </div>
                                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                                        Multi-stage QA reduces rework, improves delivery reliability, and keeps product
                                        consistency stable across repeat orders.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Image + small cards */}
                        <div className="space-y-6">
                            <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
                                <img
                                    src={qualityImage}
                                    alt="Quality Control Process"
                                    className="w-full h-[320px] md:h-[420px] object-cover"
                                />
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                                    <div className="text-sm font-semibold text-zinc-900">Sampling standard</div>
                                    <p className="mt-2 text-sm text-zinc-600">
                                        Final inspection follows structured sampling (AQL 2.5) to keep decisions consistent.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                                    <div className="text-sm font-semibold text-zinc-900">Traceability</div>
                                    <p className="mt-2 text-sm text-zinc-600">
                                        Production stages are monitored so issues can be identified early and corrected fast.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-5 shadow-sm">
                                <div className="text-sm font-semibold text-zinc-900">Quality promise</div>
                                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                                    Our goal is simple: deliver garments that look right, feel right, and perform reliably — order after order.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer showContactForm={false} />
        </div>
    );
};

export default QualityGuide;

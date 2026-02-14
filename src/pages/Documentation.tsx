import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
    FileText,
    Package,
    Home,
    BookOpen,
    ShieldCheck,
    Search,
    ChevronRight,
    Sparkles,
    LifeBuoy,
    Code2,
    Download,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";



const Documentation = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const t = setTimeout(() => setIsLoaded(true), 80);
        return () => clearTimeout(t);
    }, []);

    const sections = useMemo(
        () => [
            { id: "getting-started", label: "Getting Started", icon: <Sparkles className="h-4 w-4" /> },
            { id: "product-specs", label: "Product Specs", icon: <Package className="h-4 w-4" /> },
            { id: "api", label: "Ordering API", icon: <Code2 className="h-4 w-4" /> },
            { id: "compliance", label: "Compliance", icon: <ShieldCheck className="h-4 w-4" /> },
            { id: "support", label: "Support", icon: <LifeBuoy className="h-4 w-4" /> },
        ],
        []
    );

    const quickLinks = useMemo(
        () => [
            {
                title: "Getting Started",
                desc: "Basics, ordering flow, and key policies.",
                href: "#getting-started",
                icon: <BookOpen className="h-4 w-4" />,
                tag: "Guide",
            },
            {
                title: "Product Specifications",
                desc: "Materials, weight, sizing charts and care.",
                href: "#product-specs",
                icon: <Package className="h-4 w-4" />,
                tag: "Specs",
            },
            {
                title: "Ordering API (v1.2)",
                desc: "Endpoints, auth, examples and error codes.",
                href: "#api",
                icon: <FileText className="h-4 w-4" />,
                tag: "API",
            },
            {
                title: "Compliance Pack",
                desc: "Certificates, test reports & standards.",
                href: "#compliance",
                icon: <ShieldCheck className="h-4 w-4" />,
                tag: "PDF",
            },
        ],
        []
    );

    const filteredQuickLinks = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return quickLinks;
        return quickLinks.filter((x) =>
            (x.title + " " + x.desc + " " + x.tag).toLowerCase().includes(q)
        );
    }, [query, quickLinks]);

    return (
        <div className="min-h-screen flex flex-col bg-zinc-50">
            <Navbar />

            {/* HERO (Light, professional docs vibe) */}
            <section className="relative pt-28 pb-10 border-b border-zinc-200 overflow-hidden bg-white">
                {/* background glow */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-28 left-1/2 h-44 w-[700px] -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl opacity-50" />
                    <div className="absolute -top-40 right-10 h-56 w-56 rounded-full bg-indigo-500/5 blur-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 via-transparent to-transparent" />
                </div>

                <div
                    className={cn(
                        "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out",
                        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
                    )}
                >


                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                                Documentation
                            </h1>
                            <p className="text-base md:text-lg text-zinc-600 mt-2 max-w-2xl">
                                Technical guides, product specifications, integrations, and compliance—everything in one place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT (Sidebar + main content) */}
            <section className="flex-1 py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
                        {/* Sidebar */}
                        <aside className="lg:sticky lg:top-24 h-fit">
                            <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
                                <div className="px-2 pb-2 text-xs font-semibold tracking-wider text-zinc-400">
                                    SECTIONS
                                </div>
                                <div className="space-y-1">
                                    {sections.map((s) => (
                                        <a
                                            key={s.id}
                                            href={`#${s.id}`}
                                            className={cn(
                                                "flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition",
                                                "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                                            )}
                                        >
                                            <span className="text-zinc-400">{s.icon}</span>
                                            {s.label}
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-3 border-t border-zinc-200 pt-3">
                                    <div className="px-2 text-xs font-semibold tracking-wider text-zinc-400">
                                        NEED HELP?
                                    </div>
                                    <div className="mt-2 space-y-2">
                                        <Button variant="outline" className="w-full border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-zinc-100">
                                            Contact Support
                                        </Button>
                                        <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800">
                                            Get a Quote
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Main */}
                        <main className="space-y-8">
                            {/* Getting Started */}
                            <div
                                id="getting-started"
                                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-zinc-900">Getting Started</h2>
                                        <p className="mt-2 text-zinc-600">
                                            Start here if you’re new—overview of products, ordering flow, and what to expect.
                                        </p>
                                    </div>
                                    <span className="text-xs rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-zinc-600">
                                        Beginner
                                    </span>
                                </div>

                                <div className="mt-5 grid gap-3 md:grid-cols-2">
                                    <a
                                        href="#product-specs"
                                        className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 hover:bg-zinc-100 transition"
                                    >
                                        <div className="flex items-center gap-2 text-zinc-800">
                                            <BookOpen className="h-4 w-4 text-zinc-400" />
                                            <span className="font-semibold text-sm">Ordering Basics</span>
                                        </div>
                                        <p className="mt-2 text-sm text-zinc-500">
                                            MOQ, lead time, packaging, and delivery expectations.
                                        </p>
                                    </a>

                                    <a
                                        href="#support"
                                        className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 hover:bg-zinc-100 transition"
                                    >
                                        <div className="flex items-center gap-2 text-zinc-800">
                                            <LifeBuoy className="h-4 w-4 text-zinc-400" />
                                            <span className="font-semibold text-sm">Support & FAQs</span>
                                        </div>
                                        <p className="mt-2 text-sm text-zinc-500">
                                            Quick answers and guidance if you get stuck.
                                        </p>
                                    </a>
                                </div>
                            </div>

                            {/* Product Specs */}
                            <div
                                id="product-specs"
                                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-zinc-900">Product Specifications</h2>
                                        <p className="mt-2 text-zinc-600">
                                            Materials, weight, sizing charts, care instructions, and product datasheets.
                                        </p>
                                    </div>
                                    <Package className="h-5 w-5 text-zinc-400" />
                                </div>

                                <div className="mt-5 grid gap-4 md:grid-cols-2">
                                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 font-inherit">
                                        <h3 className="text-sm font-semibold text-zinc-900">Datasheets</h3>
                                        <p className="mt-1 text-sm text-zinc-500">
                                            Fabric composition, GSM, shrinkage, and durability notes.
                                        </p>
                                        <div className="mt-4">
                                            <Button variant="outline" className="border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50">
                                                Read Specs
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                                        <h3 className="text-sm font-semibold text-zinc-900">Sizing Charts</h3>
                                        <p className="mt-1 text-sm text-zinc-500">
                                            Accurate measurements for consistent ordering across sizes.
                                        </p>
                                        <div className="mt-4">
                                            <Button variant="outline" className="border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50">
                                                View Charts
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* API */}
                            <div
                                id="api"
                                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-zinc-900">Ordering API (v1.2)</h2>
                                        <p className="mt-2 text-zinc-600">
                                            Integrate your system with our ordering flow—auth, endpoints, examples, and error codes.
                                        </p>
                                    </div>
                                    <Code2 className="h-5 w-5 text-zinc-400" />
                                </div>

                                <div className="mt-5 grid gap-4 md:grid-cols-2">
                                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-semibold text-zinc-900">Quickstart</h3>
                                            <span className="text-[11px] text-zinc-400 font-medium tracking-tight">5 MIN</span>
                                        </div>
                                        <p className="mt-1 text-sm text-zinc-500">
                                            Get an API key, make your first request, and understand responses.
                                        </p>
                                        <div className="mt-4">
                                            <Button variant="outline" className="border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50">
                                                View API Guide
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-semibold text-zinc-900">Reference</h3>
                                            <span className="text-[11px] text-zinc-400 font-medium tracking-tight">ALL ENDPOINTS</span>
                                        </div>
                                        <p className="mt-1 text-sm text-zinc-500">
                                            Endpoint list, request/response payloads, status codes.
                                        </p>
                                        <div className="mt-4">
                                            <Button variant="outline" className="border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50">
                                                Open Reference
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Compliance */}
                            <div
                                id="compliance"
                                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-zinc-900">Compliance & Standards</h2>
                                        <p className="mt-2 text-zinc-600">
                                            Certificates, testing reports, and standards documentation.
                                        </p>
                                    </div>
                                    <ShieldCheck className="h-5 w-5 text-zinc-400" />
                                </div>

                                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                                    <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                                        <Download className="h-4 w-4 mr-2" />
                                        Download Compliance Pack
                                    </Button>
                                    <Button variant="outline" className="border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50">
                                        View Certificates
                                    </Button>
                                </div>
                            </div>

                            {/* Support */}
                            <div
                                id="support"
                                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-zinc-900">Support</h2>
                                        <p className="mt-2 text-zinc-600">
                                            Need help? Reach out and we’ll guide you fast.
                                        </p>
                                    </div>
                                    <LifeBuoy className="h-5 w-5 text-zinc-400" />
                                </div>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                                        <h3 className="text-sm font-semibold text-zinc-900">Help Center</h3>
                                        <p className="mt-1 text-sm text-zinc-500">
                                            FAQs, common issues, and step-by-step guidance.
                                        </p>
                                        <div className="mt-4">
                                            <Button variant="outline" className="border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50">
                                                Open Help Center
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                                        <h3 className="text-sm font-semibold text-zinc-900">Contact</h3>
                                        <p className="mt-1 text-sm text-zinc-500">
                                            For pricing, custom orders, or partnerships.
                                        </p>
                                        <div className="mt-4">
                                            <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                                                Get a Quote
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom CTA strip */}
                            <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-6 shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <div className="text-sm font-semibold text-zinc-900">
                                            Want a faster onboarding?
                                        </div>
                                        <div className="text-sm text-zinc-600 mt-1">
                                            We can share templates, specs, and integration examples tailored to your needs.
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button variant="outline" className="border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50">
                                            Talk to Support
                                        </Button>
                                        <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                                            Get a Quote
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>

            <Footer showContactForm={false} />
        </div>
    );
};

export default Documentation;

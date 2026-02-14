import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
// ✨ Home আইকন ইমপোর্ট করা হয়েছে এবং অপ্রয়োজনীয় আইকন (LifeBuoy, Search) রিমুভ করা হয়েছে
import { Home, BookOpen, ShieldCheck } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; // ✨ অ্যানিমেশনের জন্য ইমপোর্ট
import { cn } from "@/lib/utils"; // ✨ অ্যানিমেশনের জন্য ইমপোর্ট



const faqs = [
    {
        q: "What is your order minimum (MOQ)?",
        a: "Our Minimum Order Quantity (MOQ) varies depending on the product type and customization. Please contact our sales team for specific details regarding your item of interest."
    },
    {
        q: "Can I get a sample before placing a bulk order?",
        a: "Yes, we provide samples for quality assurance. Sample fees may apply, which are typically credited towards your bulk order. Please reach out to us to request a sample."
    },
    {
        q: "What are your shipping and delivery terms?",
        a: "We ship globally. Our standard terms are FOB, but we can also arrange CIF upon request. Delivery timelines depend on the order size and destination, which will be estimated when you place your order."
    },
    {
        q: "How do you ensure product quality?",
        a: "We follow a strict quality assurance process, from sourcing raw materials to final inspection. Our facilities are certified, and we adhere to international quality standards. You can read more in our Quality Guide."
    }
];

const HelpCenter = () => {
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

                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        Help Center
                    </h1>
                    <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                        How can we help you today? Find answers to common questions below.
                    </p>
                </div>
            </section>

            {/* FAQ সেকশন */}
            <section className="py-16 md:py-24 flex-1">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* সাইডবার */}
                        <div className="md:col-span-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Support Topics</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Button variant="ghost" className="w-full justify-start text-primary bg-primary/10">Frequently Asked Questions</Button>
                                </li>
                                <li>
                                    <Button variant="ghost" asChild className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-foreground">
                                        <Link to="/documentation">Documentation</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="ghost" asChild className="w-full justify-start text-gray-700 hover:bg-gray-100 hover:text-foreground">
                                        <Link to="/quality-guide">Quality Guide</Link>
                                    </Button>
                                </li>
                            </ul>
                        </div>

                        {/* Accordion */}
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Frequently Asked Questions
                            </h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="bg-white border-gray-200 rounded-lg shadow-sm mb-4 px-6">
                                        <AccordionTrigger className="text-lg font-semibold text-gray-800 text-left hover:no-underline">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            <Footer showContactForm={false} />
        </div>
    );
};

export default HelpCenter;
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LifeBuoy, Search, BookOpen, ShieldCheck } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

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
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            {/* পেজ হেডার */}
            <section className="relative pt-28 pb-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <LifeBuoy className="w-16 h-16 text-white mx-auto mb-6" />
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Help Center
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                            How can we help you today? Find answers to common questions below or search for your topic.
                        </p>
                        <div className="relative max-w-lg mx-auto">
                            <Input
                                type="search"
                                placeholder="Search for answers (e.g., shipping, MOQ...)"
                                className="w-full h-12 pl-12 pr-4 text-gray-900 rounded-full"
                            />
                            <Search className="w-5 h-5 text-gray-500 absolute left-5 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
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
                                    <Button variant="ghost" className="w-full justify-start text-blue-600 bg-blue-50">Frequently Asked Questions</Button>
                                </li>
                                <li>
                                    <Button variant="ghost" asChild className="w-full justify-start text-gray-700">
                                        <Link to="/documentation">Documentation</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="ghost" asChild className="w-full justify-start text-gray-700">
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
                                        <AccordionContent className="text-gray-600 leading-relaxed">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HelpCenter;
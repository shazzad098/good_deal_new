// src/pages/ContactPage.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // ✨ লোডিং স্টেট যোগ করুন
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✨ handleSubmit ফাংশনটি EmailJS দিয়ে আপডেট করা হয়েছে
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLoading) return; // যদি 이미 লোডিং হয়, তবে আবার সাবমিট করতে দেবেন না

        setIsLoading(true);

        // এই অবজেক্টের কী-গুলো (name, email) আপনার EmailJS টেমপ্লেটের ভ্যারিয়েবলের সাথে মিলতে হবে
        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        emailjs.send(
            'service_g6qnxbq',     // 👈 ধাপ ১ থেকে পাওয়া Service ID এখানে দিন
            'template_40cbwiz',    // 👈 ধাপ ১ থেকে পাওয়া Template ID এখানে দিন
            templateParams,
            'Agb1GE2gyTNqliAeg'      // 👈 ধাপ ১ থেকে পাওয়া Public Key এখানে দিন
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast({
                    title: "Message Sent!",
                    description: "We'll get back to you within 24 hours.",
                });
                // ফর্ম রিসেট করুন
                setFormData({ name: "", email: "", phone: "", message: "" });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem sending your message.",
                    variant: "destructive",
                });
            })
            .finally(() => {
                setIsLoading(false); // লোডিং শেষ
            });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            {/* পেজ হেডার */}
            <section className="relative pt-28 pb-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <Mail className="w-16 h-16 text-white mx-auto mb-6" />
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            We're here to help. Send us a message, and we'll get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* কন্ট্যাক্ট ফর্ম সেকশন */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Left Side - Contact Info */}
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Have a project in mind? Let's get to work. Reach out to us directly or fill out the form.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-800 mb-1">Call Us</div>
                                        <div className="text-gray-600">+880 1619 302150</div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-800 mb-1">Email Us</div>
                                        <a
                                            href="mailto:good.deal326@gmail.com"
                                            className="text-gray-600 hover:text-primary transition-colors duration-200"
                                        >
                                            good.deal326@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-800 mb-1">Visit Us</div>
                                        <div className="text-gray-600">
                                            123 Textile Avenue, Dhaka, Bangladesh
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Send Us a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-gray-50 border-gray-200"
                                        required
                                    />
                                    <Input
                                        name="phone"
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-gray-50 border-gray-200"
                                        required
                                    />
                                </div>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border-gray-200"
                                    required
                                />
                                <Textarea
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="bg-gray-50 border-gray-200"
                                    required
                                />
                                <Button
                                    type="submit"
                                    variant="cta"
                                    size="lg"
                                    className="w-full rounded-full"
                                    disabled={isLoading} // ✨ লোডিং অবস্থায় বাটনটি disable করুন
                                >
                                    {isLoading ? "Sending..." : "Send Message"} {/* ✨ লোডিং টেক্সট দেখান */}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
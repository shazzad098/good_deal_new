import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const footerLinks = {
        company: [
            { name: "About Us", href: "#about" },
            { name: "Our Team", href: "#" },
            { name: "Careers", href: "#" },
        ],
        products: [
            { name: "T-Shirts", href: "#collections" },
            { name: "Polo Shirts", href: "#collections" },
            { name: "Hoodies", href: "#collections" },
        ],
        support: [
            { name: "Help Center", href: "#" },
            { name: "Documentation", href: "#" },
            { name: "Quality Guide", href: "#" },
        ],
    };

    return (
        <footer className="bg-[#1a1a1a] text-background">
            {/* Contact Form Section */}
            <div className="container mx-auto px-4 py-16 border-b border-background/10">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Side - Contact Info */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Have a Project in Mind?<br />
                            Let's get to work.
                        </h3>

                        <div className="space-y-6 mt-8">
                            <div className="flex gap-4">
                                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                                <div>
                                    <div className="font-semibold mb-1">Call Us</div>
                                    <div className="text-background/70">+1 (555) 123-4567</div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                                <div>
                                    <div className="font-semibold mb-1">Email Us</div>
                                    <div className="text-background/70">info@gooddeal.com</div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                                <div>
                                    <div className="font-semibold mb-1">Visit Us</div>
                                    <div className="text-background/70">
                                        123 Textile District, Manufacturing Hub
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <Input
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-background/5 border-background/20 text-background placeholder:text-background/50"
                                    required
                                />
                                <Input
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="bg-background/5 border-background/20 text-background placeholder:text-background/50"
                                    required
                                />
                            </div>
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-background/5 border-background/20 text-background placeholder:text-background/50"
                                required
                            />
                            <Textarea
                                name="message"
                                placeholder="Tell us about your project..."
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="bg-background/5 border-background/20 text-background placeholder:text-background/50"
                                required
                            />
                            <Button type="submit" variant="cta" size="lg" className="w-full rounded-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Good Deal</h3>
                        <p className="text-background/70 mb-6">
                            Premium textiles for global markets. Quality, trust, and partnership in every thread.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Products</h4>
                        <ul className="space-y-3">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-background/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-background/60 text-sm">
                            © {currentYear} Good Deal. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-background/60 hover:text-background transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-background/60 hover:text-background transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

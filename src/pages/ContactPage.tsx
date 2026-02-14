// src/pages/ContactPage.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, Building2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_g6qnxbq",
        "template_40cbwiz",
        templateParams,
        "Agb1GE2gyTNqliAeg"
      )
      .then(() => {
        toast({
          title: "Message sent ✅",
          description: "We’ll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Something went wrong",
          description: "There was a problem sending your message.",
          variant: "destructive",
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <Navbar />

      {/* HERO (Light + subtle gradient) */}
      <section className="relative pt-28 pb-12 border-b border-zinc-200 overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white" />
          <div className="absolute -top-28 left-1/2 h-44 w-[720px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -top-40 right-10 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm">
                <Mail className="h-3.5 w-3.5 text-zinc-600" />
                Contact
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                Let’s talk.
              </h1>

              <p className="mt-3 text-base md:text-lg text-zinc-600 max-w-2xl">
                Share your requirements and we’ll reply with next steps.
                We typically respond within 24 hours.
              </p>
            </div>

            {/* Quick highlights */}
            <div className="rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-zinc-600 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Response time
                  </div>
                  <div className="text-sm text-zinc-600">
                    Within 24 hours (business days)
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3">
                <Building2 className="h-5 w-5 text-zinc-600 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Best for
                  </div>
                  <div className="text-sm text-zinc-600">
                    Bulk orders, partnerships, custom requests
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-zinc-900">
                Contact information
              </h2>
              <p className="mt-2 text-zinc-600">
                Prefer direct contact? Use the details below.
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-zinc-700 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">
                        Phone
                      </div>
                      <div className="text-sm text-zinc-600">
                        +880 1619 302150
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-zinc-700 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">
                        Email
                      </div>
                      <a
                        href="mailto:good.deal326@gmail.com"
                        className="text-sm text-zinc-600 hover:text-zinc-900 transition"
                      >
                        good.deal326@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-zinc-700 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">
                        Address
                      </div>
                      <div className="text-sm text-zinc-600">
                        123 Textile Avenue, Dhaka, Bangladesh
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Helpful note */}
              <div className="mt-7 rounded-2xl border border-zinc-200 bg-white p-5">
                <div className="text-sm font-semibold text-zinc-900">
                  What to include in your message
                </div>
                <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                  <li>• Product type + quantity</li>
                  <li>• Target delivery timeline</li>
                  <li>• Any special requirements</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-zinc-900">
                Send a message
              </h2>
              <p className="mt-2 text-zinc-600">
                Fill in the form and we’ll reply soon.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={cn(
                      "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400",
                      "focus-visible:ring-2 focus-visible:ring-zinc-900/10"
                    )}
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={cn(
                      "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400",
                      "focus-visible:ring-2 focus-visible:ring-zinc-900/10"
                    )}
                  />
                </div>

                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400",
                    "focus-visible:ring-2 focus-visible:ring-zinc-900/10"
                  )}
                />

                <Textarea
                  name="message"
                  placeholder="Tell us what you need…"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={cn(
                    "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400",
                    "focus-visible:ring-2 focus-visible:ring-zinc-900/10"
                  )}
                />

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className={cn(
                    "w-full rounded-xl",
                    "bg-zinc-900 text-white hover:bg-zinc-900/90"
                  )}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send message
                    </span>
                  )}
                </Button>

                <div className="text-xs text-zinc-500">
                  By sending this message, you agree to be contacted back regarding your inquiry.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer showContactForm={false} />
    </div>
  );
};

export default ContactPage;

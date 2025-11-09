import { Button } from "@/components/ui/button";

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
        Ready to Build Your Vision?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your textile projects to life.
    Our team is ready to provide customized solutions for your business needs.
    </p>
    <Button variant="cta" size="lg" className="rounded-full text-lg px-8 py-6 h-auto">
        Get Started Today
    </Button>
    </div>
    </div>
    </section>
);
};

export default Contact;

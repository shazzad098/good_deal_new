import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to work with us?</h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                    We're always looking for new partnerships and exciting projects. Let's build something great together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="rounded-full px-8">
                        <Link to="/contact">Get a Quote</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                        <Link to="/about">Learn More</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;

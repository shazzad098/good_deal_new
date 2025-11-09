import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroWorker from "@/assets/hero-worker.jpg";
import heroFabrics from "@/assets/hero-fabrics.jpg";
import heroFactory from "@/assets/hero-factory.jpg";

const Hero = () => {
    return (
        <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
        Focused on delivering
    <span className="block">thoughtful design <span className="italic">and</span></span>
    <span className="block text-primary">flawless execution.</span>
    </h1>

    <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
        We deliver exceptional knitwear solutions through ethical sourcing,
        sustainable production, and reliable export services. Connecting continents
    with premium quality textiles.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 pt-4">
    <Button variant="cta" size="lg" className="rounded-full">
        Get Started
    </Button>
    <div className="flex items-center gap-2 text-muted-foreground">
    <CheckCircle className="w-5 h-5 text-primary" />
        <span>15+ Years Experience</span>
    </div>
    </div>
    </div>

    {/* Hero Image Collage */}
    <div className="relative h-[500px] lg:h-[600px]">
        {/* Main large image */}
        <div className="absolute top-0 right-0 w-[60%] h-[70%] rounded-2xl overflow-hidden shadow-2xl z-20">
    <img
        src={heroWorker}
    alt="Textile Professional"
    className="w-full h-full object-cover"
        />
        </div>

    {/* Bottom left image */}
    <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-2xl overflow-hidden shadow-xl z-10">
    <img
        src={heroFabrics}
    alt="Premium Fabrics"
    className="w-full h-full object-cover"
        />
        </div>

    {/* Top left small image */}
    <div className="absolute top-10 left-[15%] w-[45%] h-[35%] rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-background">
    <img
        src={heroFactory}
    alt="Manufacturing"
    className="w-full h-full object-cover"
        />
        </div>

    {/* Decorative elements */}
    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
        </div>
        </div>
        </div>
        </section>
);
};

export default Hero;

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import Collections from "@/components/home/Collections";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Insights from "@/components/home/Insights";
import Contact from "@/components/home/Contact";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Mission />
            <Collections />
            <WhyChooseUs />
            <Process />
            <Testimonials />
            <Insights />
            <Contact />
            <Footer showContactForm={false} />
        </div>
    );
};

export default Index;

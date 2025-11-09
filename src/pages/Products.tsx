import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";
import { ArrowRight, Tag, Star, Filter } from "lucide-react";
import { cn } from "@/lib/utils"; // cn utility function ইমপোর্ট করা হয়েছে

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

// অ্যাসেট ইমপোর্ট
import tshirtImage from "@/assets/product-tshirt.jpg";
import poloImage from "@/assets/product-polo.jpg";
import hoodieImage from "@/assets/product-hoodie.jpg";
import denimImage from "@/assets/product-denim.jpg";
import sweaterImage from "@/assets/hero-fabrics.jpg";
import sportswearImage from "@/assets/hero-worker.jpg";

const allProducts = [
    {
        title: "Premium T-Shirts",
        description: "100% cotton comfort for everyday wear with superior breathability and softness.",
        image: tshirtImage,
        category: "Cotton Essentials",
        price: "$29.99",
        rating: 4.8,
        featured: true
    },
    {
        title: "Classic Polo Shirts",
        description: "Timeless style meets modern quality with premium fabric and perfect fit.",
        image: poloImage,
        category: "Business Casual",
        price: "$45.99",
        rating: 4.6,
        featured: false
    },
    {
        title: "Premium Hoodies",
        description: "Cozy warmth with superior craftsmanship and durable construction.",
        image: hoodieImage,
        category: "Comfort Wear",
        price: "$69.99",
        rating: 4.9,
        featured: true
    },
    {
        title: "Durable Denim",
        description: "Premium denim built to last with exceptional comfort and style.",
        image: denimImage,
        category: "Denim Collection",
        price: "$89.99",
        rating: 4.7,
        featured: false
    },
    {
        title: "Knit Sweaters",
        description: "Elegant and warm for all seasons with luxurious texture and finish.",
        image: sweaterImage,
        category: "Knitwear",
        price: "$79.99",
        rating: 4.8,
        featured: true
    },
    {
        title: "Active Sportswear",
        description: "Performance fabrics for an active life with moisture-wicking technology.",
        image: sportswearImage,
        category: "Performance",
        price: "$54.99",
        rating: 4.5,
        featured: false
    },
];

// ফিল্টার অপশন
const categories = ["All", "Cotton Essentials", "Business Casual", "Comfort Wear", "Denim Collection", "Knitwear", "Performance"];

// একটি পুনঃব্যবহারযোগ্য প্রোডাক্ট কার্ড কম্পোনেন্ট
const ProductCard = ({ title, description, image, category, price, rating, featured }: typeof allProducts[0]) => (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {featured && (
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                </div>
            )}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Tag className="w-3 h-3 text-blue-600" /> {category}
            </div>
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2">
                    Quick View
                </Button>
            </div>
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                    {title}
                </h3>
                <span className="text-2xl font-bold text-blue-600">{price}</span>
            </div>
            <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
                <span className="text-sm text-gray-600 ml-1">({rating})</span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                {description}
            </p>
            <div className="flex justify-between items-center">
                <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50">
                    Add to Cart
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 font-semibold">
                    View Details <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
            </div>
        </div>
    </div>
);

const ProductsPage = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [headerLoaded, setHeaderLoaded] = useState(false);

    // useEffect: হেডার অ্যানিমেশনের জন্য
    useEffect(() => {
        const timer = setTimeout(() => {
            setHeaderLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // ফিল্টারিং লজিক
    const filteredProducts = allProducts.filter(product =>
        selectedCategory === "All" || product.category === selectedCategory
    );

    // ক্যাটাগরি বাটন রেন্ডার করার জন্য ফাংশন
    const renderCategoryButtons = () => (
        categories.map((cat) => (
            <Button
                key={cat}
                // 'All' সিলেক্টেড থাকলে, বাটনটি default (নীল) থাকবে
                variant={cat === selectedCategory ? "default" : "outline"}
                className={`
                    ${cat === selectedCategory
                    ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                    : "border-gray-300 hover:bg-gray-100 text-gray-800"
                }
                    w-full md:w-auto
                `}
                onClick={() => {
                    setSelectedCategory(cat);
                    setIsDrawerOpen(false); // বাটন ক্লিক করলে ড্রয়ার বন্ধ হবে
                }}
            >
                {cat}
            </Button>
        ))
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            {/* পেজ হেডার: স্টাইলিশ ব্যাকগ্রাউন্ড ও অ্যানিমেশন */}
            <section className="relative pt-28 pb-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* ডেকোরেটিভ ব্যাকগ্রাউন্ড প্যাটার্ন (Dots) */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.1)" />
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                    </svg>
                </div>

                {/* কন্টেন্ট এবং অ্যানিমেশন */}
                <div className={cn(
                    "container mx-auto px-6 relative z-10 text-center transition-all duration-1000 ease-out",
                    headerLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                )}>
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Premium Collections
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                            Discover our exquisite range of premium knitwear and textile products,
                            meticulously crafted with superior quality materials for the global market.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3">
                                Shop Now
                            </Button>
                            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ফিল্টার সেকশন */}
            <section className="py-4 md:py-8 bg-white border-b border-gray-200 sticky top-[65px] z-30 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-4 justify-between items-center">

                        {/* === ডেস্কটপ ফিল্টার === (মোবাইলে হাইড থাকবে) */}
                        <div className="hidden md:flex flex-wrap gap-2">
                            {renderCategoryButtons()}
                        </div>

                        {/* === মোবাইল ফিল্টার ড্রয়ার === (মোবাইলে দৃশ্যমান) */}
                        <div className="md:hidden">
                            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                                <DrawerTrigger asChild>
                                    <Button variant="outline" className="border-gray-300 hover:bg-gray-50 text-gray-800">
                                        <Filter className="w-4 h-4 mr-2" />
                                        Filter Categories
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>Filter by Category</DrawerTitle>
                                    </DrawerHeader>
                                    {/* ড্রয়ারের ভিতরে বাটনগুলো ২ কলামে দেখানো হচ্ছে */}
                                    <div className="p-4 grid grid-cols-2 gap-2">
                                        {renderCategoryButtons()}
                                    </div>
                                    <DrawerFooter>
                                        <DrawerClose asChild>
                                            <Button variant="outline">Close</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </div>

                        {/* প্রোডাক্ট কাউন্ট */}
                        <div className="text-sm text-gray-600">
                            Showing {filteredProducts.length} products
                        </div>
                    </div>
                </div>
            </section>

            {/* প্রোডাক্ট গ্রিড */}
            <section className="py-16 flex-1">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                description={product.description}
                                image={product.image}
                                category={product.category}
                                price={product.price}
                                rating={product.rating}
                                featured={product.featured}
                            />
                        ))}
                    </div>

                    {/* যদি কোনো প্রোডাক্ট না পাওয়া যায় */}
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-semibold text-gray-700">No Products Found</h3>
                            <p className="text-gray-500 mt-2">Try selecting a different category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA সেকশন (অপরিবর্তিত) */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Style?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who trust our premium quality products.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg">
                        Start Shopping Today
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProductsPage;
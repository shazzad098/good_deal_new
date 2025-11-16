import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Tag, Star, Filter, Home } from "lucide-react"; // Home আইকন ইমপোর্ট করা হয়েছে
import { cn } from "@/lib/utils";

// Card কম্পোনেন্ট ইমপোর্ট করা হয়েছে
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";

// Breadcrumb কম্পোনেন্ট ইমপোর্ট করা হয়েছে
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

// অ্যাসেট ইমপোর্ট (অপরিবর্তিত)
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

// ফিল্টার অপশন (অপরিবর্তিত)
const categories = ["All", "Cotton Essentials", "Business Casual", "Comfort Wear", "Denim Collection", "Knitwear", "Performance"];

// ✨ নতুন ডিজাইনের প্রোডাক্ট কার্ড
const ProductCard = ({ title, description, image, category, price, rating, featured }: typeof allProducts[0]) => (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardContent className="p-0">
            <div className="aspect-[4/5] overflow-hidden relative bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {featured && (
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                        Featured
                    </div>
                )}
            </div>
            <div className="p-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{category}</span>
                <CardTitle className="mt-1 mb-2 text-lg font-bold text-foreground line-clamp-1">
                    {title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2 h-[40px]">
                    {description}
                </CardDescription>
            </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4 pt-0">
            <div className="text-xl font-bold text-foreground">{price}</div>
            <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="text-sm text-muted-foreground font-medium">{rating}</span>
            </div>
        </CardFooter>
    </Card>
);


const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [headerLoaded, setHeaderLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHeaderLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const filteredProducts = allProducts.filter(product =>
        selectedCategory === "All" || product.category === selectedCategory
    );

    // ক্যাটাগরি বাটন রেন্ডার করার ফাংশন (স্টাইল আপডেট করা হয়েছে)
    const renderCategoryButtons = () => (
        categories.map((cat) => (
            <Button
                key={cat}
                variant={cat === selectedCategory ? "default" : "outline"} // শুধু ভ্যারিয়েন্ট ব্যবহার
                className="w-full md:w-auto transition-all duration-200"
                onClick={() => {
                    setSelectedCategory(cat);
                    setIsDrawerOpen(false);
                }}
            >
                {cat}
            </Button>
        ))
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            {/* ✨ নতুন হেডার সেকশন (ব্রেডক্রাম্ব সহ) */}
            <section className="pt-28 pb-12 bg-white border-b border-gray-200">
                <div className={cn(
                    "container mx-auto px-6 transition-all duration-1000 ease-out",
                    headerLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                )}>
                    <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="flex items-center gap-1">
                                    <Home className="w-4 h-4" />
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Collections</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        Our Collections
                    </h1>
                    <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                        Discover our exquisite range of premium knitwear and textile products.
                    </p>
                </div>
            </section>

            {/* ফিল্টার সেকশন (অপরিবর্তিত, শুধু স্টিকি টপ ভ্যালু আপডেট) */}
            <section className="py-4 md:py-6 bg-white border-b border-gray-200 sticky top-[65px] z-30 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-4 justify-between items-center">
                        {/* ডেস্কটপ ফিল্টার */}
                        <div className="hidden md:flex flex-wrap gap-2">
                            {renderCategoryButtons()}
                        </div>

                        {/* মোবাইল ফিল্টার ড্রয়ার */}
                        <div className="md:hidden">
                            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                                <DrawerTrigger asChild>
                                    <Button variant="outline">
                                        <Filter className="w-4 h-4 mr-2" />
                                        Filter Categories
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>Filter by Category</DrawerTitle>
                                    </DrawerHeader>
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
                        <div className="text-sm text-muted-foreground font-medium">
                            Showing {filteredProducts.length} products
                        </div>
                    </div>
                </div>
            </section>

            {/* প্রোডাক্ট গ্রিড (অপরিবর্তিত) */}
            <section className="py-16 flex-1">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {filteredProducts.map((product, index) => (
                            <ProductCard
                                key={index}
                                {...product} // সহজ props পাসিং
                            />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-semibold text-gray-700">No Products Found</h3>
                            <p className="text-muted-foreground mt-2">Try selecting a different category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ✨ নিচের CTA সেকশনটি রিমুভ করা হয়েছে */}

            <Footer />
        </div>
    );
};

export default ProductsPage;
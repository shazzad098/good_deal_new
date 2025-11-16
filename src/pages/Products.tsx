import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Tag, Star, Filter, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; // ✨ Link ইমপোর্ট করা হয়েছে

// ✨ ডেটা এখন নতুন ফাইল থেকে ইমপোর্ট করা হচ্ছে
import { allProducts, categories, slugify } from "@/data/products";

// Card কম্পোনেন্ট ইমপোর্ট
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";

// Breadcrumb কম্পোনেন্ট ইমপোর্ট
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Drawer কম্পোনেন্ট ইমপোর্ট
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";


// ✨ প্রোডাক্ট কার্ড আপডেট: cursor-pointer যোগ করা হয়েছে
const ProductCard = ({ title, description, image, category, price, rating, featured }: typeof allProducts[0]) => (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
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
            <div className="text-2xl font-bold text-primary">{price}</div>
            <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="text-sm text-muted-foreground font-medium">{rating}</span>
            </div>
        </CardFooter>
    </Card>
);


const ProductsPage = () => {
    // ... (useState, useEffect, filteredProducts অপরিবর্তিত) ...
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

    // ... (renderCategoryButtons অপরিবর্তিত) ...
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

            {/* হেডার সেকশন (অপরিবর্তিত) */}
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

            {/* ফিল্টার সেকশন (অপরিবর্তিত) */}
            <section className="py-4 md:py-6 bg-white border-b border-gray-200 sticky top-[65px] z-30 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-4 justify-between items-center">
                        {/* ডেস্কটপ ফিল্টার */}
                        <div className="hidden md:flex flex-wrap gap-2">
                            {renderCategoryButtons()}
                        </div>

                        {/* মোবাইল ফিল্টার ড্রয়ার */}
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

            {/* প্রোডাক্ট গ্রিড */}
            <section className="py-16 flex-1">
                <div className="container mx-auto px-6">
                    {/* ✨ পরিবর্তন: গ্রিডের প্রতিটি আইটেমকে Link দিয়ে Wrap করা হয়েছে */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {filteredProducts.map((product, index) => (
                            <Link 
                                to={`/products/${slugify(product.title)}`} 
                                key={index}
                                className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                            >
                                <ProductCard
                                    {...product}
                                />
                            </Link>
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


            <Footer />
        </div>
    );
};

export default ProductsPage;
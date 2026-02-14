// src/pages/ProductDetailPage.tsx

import { useParams, Navigate, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// ✨ Product টাইপ এবং useState ইমপোর্ট করা হয়েছে
import { allProducts, slugify, Product } from "@/data/products";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
// ✨ নতুন আইকন ইমপোর্ট করা হয়েছে
import { Star, Home, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

// ✨ নতুন UI কম্পোনেন্ট ইমপোর্ট করা হয়েছে
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const ProductDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();

    // URL-এর slug দিয়ে প্রোডাক্টটি খুঁজে বের করা
    const product = allProducts.find(p => slugify(p.title) === slug) as Product | undefined;

    // ✨ স্টেট ভ্যারিয়েবল যোগ করা হয়েছে
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(product?.colors[0].name || "");
    const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");

    // যদি প্রোডাক্ট খুঁজে না পাওয়া যায়, তবে 404 পেজে রিডাইরেক্ট করা
    if (!product) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            {/* হেডার ও ব্রেডক্রাম্ব (অপরিবর্তিত) */}
            <section className="pt-28 pb-12 bg-white border-b border-gray-200">
                <div className="container mx-auto px-6">

                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        {product.title}
                    </h1>
                </div>
            </section>

            {/* প্রোডাক্ট ডিটেইলস সেকশন (আপডেটেড) */}
            <section className="py-16 md:py-24 flex-1">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Product Image */}
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-lg sticky top-32">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-auto object-cover rounded-md aspect-square"
                            />
                        </div>

                        {/* Product Info */}
                        <div>
                            <Badge variant="outline" className="text-sm mb-3 border-primary text-primary">
                                {product.category}
                            </Badge>
                            <p className="text-lg text-muted-foreground mb-4">{product.description}</p>

                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 fill-primary text-primary" />
                                    <span className="text-lg text-foreground font-bold">{product.rating}</span>
                                </div>
                                <span className="text-muted-foreground">(based on reviews)</span>
                            </div>

                            <div className="text-5xl font-bold text-primary mb-8">
                                {product.price}
                            </div>

                            {/* ✨ কালার সিলেক্টর */}
                            <div className="mb-6">
                                <Label className="text-base font-medium text-foreground">Color: <span className="text-muted-foreground font-normal">{selectedColor}</span></Label>
                                <div className="flex gap-3 mt-2">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={cn(
                                                "h-9 w-9 rounded-full border-2 transition-all",
                                                selectedColor === color.name ? "border-primary ring-2 ring-primary ring-offset-2" : "border-gray-300"
                                            )}
                                            style={{ backgroundColor: color.hex }}
                                            title={color.name}
                                        >
                                            <span className="sr-only">{color.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* ✨ সাইজ সিলেক্টর */}
                            <div className="mb-6">
                                <Label className="text-base font-medium text-foreground">Size</Label>
                                <RadioGroup
                                    defaultValue={selectedSize}
                                    onValueChange={setSelectedSize}
                                    className="flex flex-wrap gap-3 mt-2"
                                >
                                    {product.sizes.map((size) => (
                                        <Label
                                            key={size}
                                            htmlFor={`size-${size}`}
                                            className={cn(
                                                "flex items-center justify-center rounded-md border h-10 px-4 text-sm font-medium transition-colors cursor-pointer",
                                                selectedSize === size
                                                    ? "bg-primary text-primary-foreground border-primary"
                                                    : "bg-white hover:bg-gray-100"
                                            )}
                                        >
                                            {size}
                                            <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                                        </Label>
                                    ))}
                                </RadioGroup>
                            </div>

                            {/* ✨ কোয়ান্টিটি সিলেক্টর */}
                            <div className="mb-8">
                                <Label className="text-base font-medium text-foreground">Quantity</Label>
                                <div className="flex items-center gap-2 mt-2">
                                    <Button variant="outline" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="text-lg font-medium w-12 text-center border-y border-gray-200 h-10 flex items-center justify-center bg-white">{quantity}</span>
                                    <Button variant="outline" size="icon" onClick={() => setQuantity(q => q + 1)}>
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" variant="cta" className="text-lg w-full sm:w-auto flex-1">
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Add to Cart
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg w-full sm:w-auto">Get a Quote</Button>
                            </div>

                            {/* ✨ ডিটেইলস অ্যাকর্ডিয়ন */}
                            <div className="mt-12">
                                <Accordion type="single" collapsible defaultValue="details" className="w-full">
                                    <AccordionItem value="details" className="border-b border-gray-200">
                                        <AccordionTrigger className="text-lg font-medium hover:no-underline">Product Details</AccordionTrigger>
                                        <AccordionContent className="pt-2">
                                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                                {product.details.map((detail, i) => (
                                                    <li key={i}>{detail}</li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="care" className="border-b-0">
                                        <AccordionTrigger className="text-lg font-medium hover:no-underline">Care Instructions</AccordionTrigger>
                                        <AccordionContent className="pt-2">
                                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                                {product.care.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer showContactForm={false} />
        </div>
    );
};

export default ProductDetailPage;
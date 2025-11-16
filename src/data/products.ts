// src/data/products.ts

import tshirtImage from "@/assets/product-tshirt.jpg";
import poloImage from "@/assets/product-polo.jpg";
import hoodieImage from "@/assets/product-hoodie.jpg";
import denimImage from "@/assets/product-denim.jpg";
import sweaterImage from "@/assets/hero-fabrics.jpg";
import sportswearImage from "@/assets/hero-worker.jpg";

// টাইটেল থেকে URL-ফ্রেন্ডলি slug (লিঙ্ক) তৈরির ফাংশন
export const slugify = (text: string) => 
    text.toLowerCase()
        .replace(/\s+/g, '-')       // স্পেস-কে হাইফেন (-) দিয়ে পরিবর্তন
        .replace(/[^\w-]+/g, '')   // অপ্রয়োজনীয় ক্যারেক্টার রিমুভ
        .replace(/--+/g, '-');      // একাধিক হাইফেনকে একটি করা

// ✨ নতুন টাইপ যোগ করা হয়েছে
type Color = {
  name: string;
  hex: string;
};

export type Product = {
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
  rating: number;
  featured: boolean;
  sizes: string[];
  colors: Color[];
  details: string[];
  care: string[];
};

// ✨ allProducts অ্যারে আপডেট করা হয়েছে
export const allProducts: Product[] = [
    {
        title: "Premium T-Shirts",
        description: "100% cotton comfort for everyday wear with superior breathability and softness.",
        image: tshirtImage,
        category: "Cotton Essentials",
        price: "$29.99",
        rating: 4.8,
        featured: true,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Black", hex: "#000000" },
            { name: "Navy", hex: "#0A2342" },
        ],
        details: [
            "Crafted from 100% premium long-staple cotton.",
            "180 GSM mid-weight fabric.",
            "Pre-shrunk to minimize shrinkage.",
            "Modern tailored fit.",
        ],
        care: [
            "Machine wash cold with like colors.",
            "Tumble dry low.",
            "Do not bleach.",
            "Iron on low heat if necessary.",
        ]
    },
    {
        title: "Classic Polo Shirts",
        description: "Timeless style meets modern quality with premium fabric and perfect fit.",
        image: poloImage,
        category: "Business Casual",
        price: "$45.99",
        rating: 4.6,
        featured: false,
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Red", hex: "#B22222" },
            { name: "Forest Green", hex: "#228B22" },
        ],
        details: [
            "Piqué knit cotton blend for breathability.",
            "Durable two-button placket.",
            "Ribbed collar and cuffs.",
            "Side-split hem for comfort.",
        ],
        care: [
            "Machine wash warm.",
            "Tumble dry medium.",
            "Do not iron on collar.",
        ]
    },
    {
        title: "Premium Hoodies",
        description: "Cozy warmth with superior craftsmanship and durable construction.",
        image: hoodieImage,
        category: "Comfort Wear",
        price: "$69.99",
        rating: 4.9,
        featured: true,
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "Flag Style", hex: "#4A80C2" }, // একটি রিপ্রেজেন্টেটিভ কালার
            { name: "Heather Grey", hex: "#C0C0C0" },
            { name: "Charcoal", hex: "#36454F" },
        ],
        details: [
            "Heavy-weight 320 GSM fleece interior.",
            "Durable metal YKK zipper.",
            "Spacious kangaroo pocket.",
            "Double-lined hood with drawstrings.",
        ],
        care: [
            "Machine wash cold, inside out.",
            "Tumble dry low or hang dry.",
            "Do not iron decoration.",
        ]
    },
    {
        title: "Durable Denim",
        description: "Premium denim built to last with exceptional comfort and style.",
        image: denimImage,
        category: "Denim Collection",
        price: "$89.99",
        rating: 4.7,
        featured: false,
        sizes: ["30W", "32W", "34W", "36W"],
        colors: [
            { name: "Indigo Wash", hex: "#283E58" },
            { name: "Black Wash", hex: "#222222" },
        ],
        details: [
            "12.5 oz stretch denim (98% cotton, 2% elastane).",
            "Classic 5-pocket styling.",
            "Reinforced belt loops.",
            "Available in Slim and Straight fit.",
        ],
        care: [
            "Wash infrequently. Machine wash cold, inside out.",
            "Hang dry to preserve fit and color.",
        ]
    },
    {
        title: "Knit Sweaters",
        description: "Elegant and warm for all seasons with luxurious texture and finish.",
        image: sweaterImage,
        category: "Knitwear",
        price: "$79.99",
        rating: 4.8,
        featured: true,
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "Beige", hex: "#F5F5DC" },
            { name: "Olive Green", hex: "#556B2F" },
            { name: "Burgundy", hex: "#800020" },
        ],
        details: [
            "Made from a soft merino wool blend.",
            "Ribbed crew neck, cuffs, and hem.",
            "Lightweight yet warm.",
            "Ideal for layering.",
        ],
        care: [
            "Hand wash cold or dry clean.",
            "Lay flat to dry.",
            "Do not wring or twist.",
        ]
    },
    {
        title: "Active Sportswear",
        description: "Performance fabrics for an active life with moisture-wicking technology.",
        image: sportswearImage,
        category: "Performance",
        price: "$54.99",
        rating: 4.5,
        featured: false,
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "Volt Yellow", hex: "#CEFF00" },
            { name: "Cool Grey", hex: "#8C92AC" },
            { name: "Black", hex: "#000000" },
        ],
        details: [
            "Moisture-wicking & quick-dry fabric.",
            "4-way stretch for maximum mobility.",
            "Reflective logos for visibility.",
            "Flatlock seams to prevent chafing.",
        ],
        care: [
            "Machine wash cold.",
            "Do not use fabric softener.",
            "Tumble dry low.",
        ]
    },
];

// ক্যাটাগরি অ্যারে (অপরিবর্তিত)
export const categories = ["All", "Cotton Essentials", "Business Casual", "Comfort Wear", "Denim Collection", "Knitwear", "Performance"];
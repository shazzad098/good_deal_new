import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Star, Filter, Home, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

import { allProducts, categories, slugify } from "@/data/products";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";


/* ✅ More premium product card */
const ProductCard = ({
  title,
  description,
  image,
  category,
  price,
  rating,
  featured,
}: typeof allProducts[0]) => (
  <Card
    className={cn(
      "group overflow-hidden cursor-pointer",
      "rounded-2xl border border-zinc-200 bg-white",
      "shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    )}
  >
    <CardContent className="p-0">
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* subtle overlay for premium look */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/35 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
            Featured
          </div>
        )}

        {/* Price chip (top-right) */}
        <div className="absolute top-3 right-3 rounded-full border border-white/20 bg-white/80 backdrop-blur px-3 py-1 text-xs font-semibold text-zinc-900">
          {price}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {category}
          </span>

          <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-700">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            {rating}
          </span>
        </div>

        <CardTitle className="mt-2 text-lg font-bold text-foreground line-clamp-1">
          {title}
        </CardTitle>

        <CardDescription className="mt-1 text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
          {description}
        </CardDescription>

        <div className="mt-4 inline-flex items-center gap-1 text-xs text-zinc-600 group-hover:text-zinc-900 transition">
          View details <ChevronRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </CardContent>

    {/* footer minimal (optional) */}
    <CardFooter className="px-4 pb-4 pt-0" />
  </Card>
);

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [headerLoaded, setHeaderLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = allProducts.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  const renderCategoryButtons = () =>
    categories.map((cat) => {
      const active = cat === selectedCategory;

      return (
        <Button
          key={cat}
          variant={active ? "default" : "outline"}
          className={cn(
            "rounded-full h-9 px-4",
            active
              ? "bg-zinc-900 text-white hover:bg-zinc-900/90"
              : "border-zinc-200 bg-white hover:bg-zinc-50"
          )}
          onClick={() => {
            setSelectedCategory(cat);
            setIsDrawerOpen(false);
          }}
        >
          {cat}
        </Button>
      );
    });

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <Navbar />

      {/* HERO (light + premium) */}
      <section className="relative pt-28 pb-10 bg-white border-b border-zinc-200 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white" />
          <div className="absolute -top-28 left-1/2 h-44 w-[720px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -top-40 right-10 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div
          className={cn(
            "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out",
            headerLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          )}
        >


          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Explore Catalog
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Our <span className="text-primary">Master Collections</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-600 mt-4 max-w-2xl leading-relaxed">
            Meticulously engineered apparel designed for leading global markets.
            Discover the perfect blend of tradition and technical innovation.
          </p>
        </div>
      </section>

      {/* FILTER BAR (clean + sticky) */}
      <section className="sticky top-[65px] z-30 border-b border-zinc-200 bg-white/85 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            {/* Desktop filter pills */}
            <div className="hidden md:flex flex-wrap gap-2">
              {renderCategoryButtons()}
            </div>

            {/* Mobile drawer */}
            <div className="md:hidden">
              <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <DrawerTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full border-zinc-200 bg-white hover:bg-zinc-50"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filter categories
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
                      <Button variant="outline" className="rounded-full">
                        Close
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>

            {/* Count */}
            <div className="text-sm text-zinc-600">
              Showing <span className="font-semibold text-zinc-900">{filteredProducts.length}</span>{" "}
              products
              {selectedCategory !== "All" && (
                <>
                  {" "}
                  in <span className="font-semibold text-zinc-900">{selectedCategory}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-10 md:py-14 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {filteredProducts.map((product, index) => (
              <Link
                to={`/products/${slugify(product.title)}`}
                key={index}
                className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl"
              >
                <ProductCard {...product} />
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="mx-auto max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900">No products found</h3>
                <p className="text-zinc-600 mt-2">
                  Try selecting a different category.
                </p>
                <div className="mt-5">
                  <Button
                    className="rounded-full bg-zinc-900 text-white hover:bg-zinc-900/90"
                    onClick={() => setSelectedCategory("All")}
                  >
                    Reset filters
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer showContactForm={false} />
    </div>
  );
};

export default ProductsPage;

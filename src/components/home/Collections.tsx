import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import tshirtImage from "@/assets/product-tshirt.jpg";
import poloImage from "@/assets/product-polo.jpg";
import hoodieImage from "@/assets/product-hoodie.jpg";
import denimImage from "@/assets/product-denim.jpg";
import { Link } from "react-router-dom";
import { slugify } from "@/data/products";

const Collections = () => {
  const products = [
    {
      title: "Premium T-Shirts",
      description: "100% cotton comfort for everyday wear",
      image: tshirtImage,
      category: "Cotton Essentials",
    },
    {
      title: "Classic Polo Shirts",
      description: "Timeless style meets modern quality",
      image: poloImage,
      category: "Business Casual",
    },
    {
      title: "Premium Hoodies",
      description: "Cozy warmth with superior craftsmanship",
      image: hoodieImage,
      category: "Comfort Wear",
    },
    {
      title: "Durable Denim",
      description: "Durable denim built to last",
      image: denimImage,
      category: "Denim Collection",
    },
  ];

  return (
    <section id="collections" className="py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Signature Series
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4 leading-tight">
              Premium Textile <br className="hidden md:block" />
              <span className="text-primary">Collections</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our diverse range of high-quality apparel, from organic cotton essentials
              to specialized performance wear, meticulously crafted for the global market.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <Button variant="outline" className="rounded-full border-zinc-200 hover:bg-zinc-50" asChild>
              <Link to="/products" className="flex items-center gap-2 px-6">
                Browse Full Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary/20 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-white p-1"
                  asChild
                >
                  <Link to={`/products/${slugify(product.title)}`}>
                    View Details <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg" className="rounded-full" asChild>
            <Link to="/products">Explore All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collections;

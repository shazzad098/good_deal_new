import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const Insights = () => {
    const articles = [
        {
            title: "How to tell whether your building is due for a deep restoration",
            category: "Industry Insights",
            date: "Nov 15, 2024",
            image: blog1,
            readTime: "5 min read"
        },
        {
            title: "The tech that will revolutionize construction & real estate in the coming decade",
            category: "Technology",
            date: "Nov 10, 2024",
            image: blog2,
            readTime: "7 min read"
        },
        {
            title: "Add sustainable practices to an already-running building",
            category: "Sustainability",
            date: "Nov 5, 2024",
            image: blog3,
            readTime: "6 min read"
        },
        {
            title: "Understanding global textile export regulations and compliance",
            category: "Export Guide",
            date: "Nov 1, 2024",
            image: blog1,
            readTime: "8 min read"
        },
        {
            title: "Quality standards in textile manufacturing: What buyers need to know",
            category: "Quality Control",
            date: "Oct 28, 2024",
            image: blog2,
            readTime: "5 min read"
        },
        {
            title: "How to pick affordable knitwear designs with maximum durability",
            category: "Product Guide",
            date: "Oct 25, 2024",
            image: blog3,
            readTime: "6 min read"
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                            Insights & Industry<br />Updates
                        </h2>
                        <p className="text-muted-foreground">
                            Stay informed with the latest trends and insights
                        </p>
                    </div>
                    <Button variant="outline" className="rounded-full">
                        View All Articles <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-video overflow-hidden bg-secondary/20">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <Calendar className="w-3 h-3" />
                                        <span>{article.date}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary p-0">
                                        Read More <ArrowRight className="ml-1 w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insights;

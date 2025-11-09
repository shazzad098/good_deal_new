import { Award, Leaf, Globe, Users, CheckCircle, TrendingUp } from "lucide-react";

const Mission = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Title Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Built on Experience. Driven by Quality.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our mission is to deliver premium textiles that exceed expectations
                    </p>
                </div>

                {/* Stats and Values Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {/* Large Stat Card */}
                    <div className="md:col-span-2 bg-card p-8 rounded-2xl border border-border relative overflow-hidden">
                        <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full"></div>
                        <Award className="w-12 h-12 text-primary mb-4" />
                        <div className="text-5xl font-bold text-foreground mb-2">1680+</div>
                        <p className="text-muted-foreground">Successful Projects Delivered</p>
                    </div>

                    {/* Team Photos & Count */}
                    <div className="bg-card p-8 rounded-2xl border border-border">
                        <Users className="w-10 h-10 text-primary mb-4" />
                        <div className="text-4xl font-bold text-foreground mb-2">25+</div>
                        <p className="text-muted-foreground text-sm">Expert Team Members</p>
                        <div className="flex -space-x-2 mt-4">
                            <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"></div>
                            <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-background"></div>
                            <div className="w-8 h-8 rounded-full bg-primary/40 border-2 border-background"></div>
                        </div>
                    </div>

                    {/* Satisfaction Rate */}
                    <div className="bg-card p-8 rounded-2xl border border-border">
                        <CheckCircle className="w-10 h-10 text-primary mb-4" />
                        <div className="text-4xl font-bold text-foreground mb-2">98%</div>
                        <p className="text-muted-foreground text-sm">Client Satisfaction Rate</p>
                    </div>
                </div>

                {/* Services/Values Section */}
                <div className="bg-secondary/10 rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-6">
                                End-to-End Construction<br />Services You Can Rely On.
                            </h3>
                            <p className="text-muted-foreground mb-8">
                                From sourcing premium materials to delivering finished products globally,
                                we provide comprehensive textile solutions backed by decades of expertise.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Ethical Sourcing</h4>
                                    <p className="text-sm text-muted-foreground">Certified suppliers committed to fair labor and quality</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Leaf className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Sustainable Production</h4>
                                    <p className="text-sm text-muted-foreground">Eco-friendly processes minimizing environmental impact</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Reliable Export</h4>
                                    <p className="text-sm text-muted-foreground">On-time global delivery with quality assurance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;

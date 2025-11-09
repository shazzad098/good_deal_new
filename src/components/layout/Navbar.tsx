import { Button } from "@/components/ui/button";
import { Menu, X, LifeBuoy, BookOpen, ShieldCheck } from "lucide-react";
import React from "react"; // ✨ সমাধান: React কে ইমপোর্ট করা হয়েছে
import { useState } from "react"; // ✨ useState ইমপোর্ট করা হয়েছে
import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// একটি পুনঃব্যবহারযোগ্য লিস্ট আইটেম কম্পোনেন্ট
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Collections", href: "/products" },
        { name: "Process", href: "/#process" },
    ];

    const supportLinks = [
        { title: "Help Center", href: "/help", description: "Find answers to common questions.", icon: <LifeBuoy className="h-4 w-4" /> },
        { title: "Documentation", href: "/documentation", description: "Technical guides and product specs.", icon: <BookOpen className="h-4 w-4" /> },
        { title: "Quality Guide", href: "/quality-guide", description: "Our commitment to excellence.", icon: <ShieldCheck className="h-4 w-4" /> },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-foreground">Good Deal</span>
                    </Link>

                    {/* ডেস্কটপ নেভিগেশন (NavigationMenu সহ) */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.name}>
                                    <Link to={item.href} className={navigationMenuTriggerStyle()}>
                                        {item.name}
                                    </Link>
                                </NavigationMenuItem>
                            ))}

                            {/* সাপোর্ট ড্রপডাউন */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {supportLinks.map((link) => (
                                            <ListItem
                                                key={link.title}
                                                title={link.title}
                                                href={link.href}
                                                asChild
                                            >
                                                <Link to={link.href}>
                                                    {link.description}
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="cta" size="default" asChild>
                            <Link to="/#contact">Get a Quote</Link>
                        </Button>
                    </div>

                    {/* মোবাইল মেনু বাটন */}
                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* মোবাইল নেভিগেশন (সাপোর্ট লিঙ্ক সহ) */}
                {isOpen && (
                    <div className="md:hidden py-4 space-y-4 border-t border-border">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="block text-foreground hover:text-primary transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* মোবাইলে সাপোর্ট লিঙ্কগুলো */}
                        <div className="pt-2 border-t border-border">
                            <h4 className="text-sm font-semibold text-muted-foreground mb-2 px-0">Support</h4>
                            {supportLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    to={link.href}
                                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.icon}
                                    {link.title}
                                </Link>
                            ))}
                        </div>

                        <Button variant="cta" size="default" className="w-full" asChild>
                            <Link to="/#contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
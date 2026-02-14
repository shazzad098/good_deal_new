// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/Products";
import HelpCenterPage from "./pages/HelpCenter";
import DocumentationPage from "./pages/Documentation";
import QualityGuidePage from "./pages/QualityGuide";
import AboutPage from "./pages/About";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// ✨ ধাপ ৩.১: নতুন প্রোডাক্ট ডিটেইল পেজ ইমপোর্ট করুন
import ProductDetailPage from "./pages/ProductDetailPage";

// ✨ ScrollToTop কম্পোনেন্ট ইমপোর্ট করা হয়েছে
import ScrollToTop from "./components/layout/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <ScrollToTop /> {/* ✨ এই কম্পোনেন্টটি এখানে যোগ করা হয়েছে */}
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/products" element={<ProductsPage />} />

                    {/* ✨ ধাপ ৩.২: নতুন রুটটি এখানে যোগ করুন */}
                    <Route path="/products/:slug" element={<ProductDetailPage />} />

                    <Route path="/help" element={<HelpCenterPage />} />
                    <Route path="/documentation" element={<DocumentationPage />} />
                    <Route path="/quality-guide" element={<QualityGuidePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
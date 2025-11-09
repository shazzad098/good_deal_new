import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/Products";

// ✨ নতুন পেজগুলো ইমপোর্ট করা হয়েছে
import HelpCenterPage from "./pages/HelpCenter";
import DocumentationPage from "./pages/Documentation";
import QualityGuidePage from "./pages/QualityGuide";


const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/products" element={<ProductsPage />} />

                    {/* ✨ নতুন রুটগুলো যোগ করা হয়েছে */}
                    <Route path="/help" element={<HelpCenterPage />} />
                    <Route path="/documentation" element={<DocumentationPage />} />
                    <Route path="/quality-guide" element={<QualityGuidePage />} />

                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
// src/components/layout/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // প্রতিটি রুট পরিবর্তনের সময় পেজের শুরুতে স্ক্রল করুন
        window.scrollTo(0, 0);
    }, [pathname]); // pathname পরিবর্তন হলেই এই ইফেক্টটি কাজ করবে

    return null; // এই কম্পোনেন্টটি কোনো UI রেন্ডার করবে না
};

export default ScrollToTop;
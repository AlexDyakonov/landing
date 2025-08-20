import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DynamicCursor } from "@/components/ui/dynamic-cursor"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Dynamic Pixel Cursor - всегда включен */}
        <DynamicCursor enabled={true} />
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageSwitcher />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/en" element={<Index />} />
            <Route path="/en/" element={<Index />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/*" element={<BlogPage />} />
            <Route path="/en/blog" element={<BlogPage />} />
            <Route path="/en/blog/*" element={<BlogPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
};

export default App;

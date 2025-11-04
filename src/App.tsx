import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shoes from "./pages/Shoes";
import Clothing from "./pages/Clothing";
import Bags from "./pages/Bags";
import Accessories from "./pages/Accessories";
import Womens from "./pages/Womens";
import Mens from "./pages/Mens";
import Kids from "./pages/Kids";
import Clearance from "./pages/Clearance";
import Brands from "./pages/Brands";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/clearance" element={<Clearance />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

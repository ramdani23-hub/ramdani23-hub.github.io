import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Heart, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      {/* Top Bar */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="font-medium">$100+ receives <span className="text-primary">free shipping</span></span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">1-888-676-2660</span>
              </div>
              <Button variant="ghost" size="sm">Live Chat</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-4xl font-bold text-primary italic">6pm</h1>
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-6 text-sm font-medium uppercase">
              <Link to="/shoes" className="hover:text-primary transition-colors">Shoes</Link>
              <Link to="/clothing" className="hover:text-primary transition-colors">Clothing</Link>
              <Link to="/bags" className="hover:text-primary transition-colors">Bags</Link>
              <Link to="/accessories" className="hover:text-primary transition-colors">Accessories</Link>
              <Link to="/womens" className="hover:text-primary transition-colors">Women's</Link>
              <Link to="/mens" className="hover:text-primary transition-colors">Men's</Link>
              <Link to="/kids" className="hover:text-primary transition-colors">Kids'</Link>
              <Link to="/clearance" className="hover:text-primary transition-colors text-primary">Clearance</Link>
              <Link to="/brands" className="hover:text-primary transition-colors">Brands</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="border-t bg-muted/20">
        <div className="container mx-auto px-4 py-3">
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search 6pm.com"
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

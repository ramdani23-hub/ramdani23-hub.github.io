import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-5xl font-bold">Cool Weather, Cool Closet</h2>
              <p className="text-xl text-muted-foreground">Your ideal wardrobe starts here.</p>
              <p className="text-3xl font-bold">UP TO 70% OFF MSRP!</p>
              <Link to="/clearance">
                <Button size="lg" className="text-lg px-8">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Hot Deals Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Hot Deals Selling Fast</h2>
              <Link to="/clearance">
                <Button variant="outline">View All Deals</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Shoes", path: "/shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop" },
                { name: "Clothing", path: "/clothing", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop" },
                { name: "Bags", path: "/bags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop" },
                { name: "Accessories", path: "/accessories", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=300&fit=crop" },
              ].map((category) => (
                <Link key={category.name} to={category.path} className="group">
                  <div className="relative overflow-hidden rounded-lg aspect-square">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Promo Banner */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Sign Up for Exclusive Deals</h2>
              <p className="text-lg mb-6">Get up to 70% off top brands delivered to your inbox</p>
              <div className="max-w-md mx-auto flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded text-foreground"
                />
                <Button variant="secondary" size="lg">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

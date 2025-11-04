import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const Brands = () => {
  const brands = [...new Set(products.map((p) => p.brand))].sort();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Shop by Brand</h1>
          <p className="text-muted-foreground mb-12">
            Browse your favorite brands at discount prices. Up to 70% off MSRP!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand}
                to={`/brands/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                className="border rounded-lg p-8 hover:shadow-lg hover:border-primary transition-all flex items-center justify-center group"
              >
                <h3 className="text-xl font-bold text-center group-hover:text-primary transition-colors">
                  {brand}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Featured Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Nike", "Adidas", "Coach"].map((brand) => {
                const brandProducts = products.filter((p) => p.brand === brand);
                return (
                  <div key={brand} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-4">{brand}</h3>
                    <p className="text-muted-foreground mb-4">
                      {brandProducts.length} products available with discounts up to 70%
                    </p>
                    <Link
                      to={`/brands/${brand.toLowerCase()}`}
                      className="text-primary font-medium hover:underline"
                    >
                      Shop {brand} →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Brands;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Clearance = () => {
  const clearanceProducts = products.filter((p) => p.category.includes("clearance") || p.discount >= 60);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-sale text-sale-foreground py-12 mb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Clearance Sale</h1>
            <p className="text-2xl">Up to 70% OFF MSRP on Everything!</p>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <p className="text-muted-foreground mb-12 text-center">
            Limited time offers on top brands. Shop now before they're gone!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clearanceProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Clearance;

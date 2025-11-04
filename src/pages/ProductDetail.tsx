import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category.some((c) => product.category.includes(c)))
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div>
              <div className="sticky top-24">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted mb-4">
                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase font-medium mb-2">
                  {product.brand}
                </p>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground">(247 reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  MSRP: ${product.originalPrice.toFixed(2)}
                </span>
                <Badge className="bg-sale text-sale-foreground text-lg font-bold px-3 py-1">
                  {product.discount}% OFF
                </Badge>
              </div>

              {product.lowStock && (
                <Badge variant="destructive" className="text-sm">
                  Low Stock - Order Soon!
                </Badge>
              )}

              <div className="border-t border-b py-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Button key={size} variant="outline" className="min-w-[60px]">
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Color</label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <Button key={color} variant="outline">
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button size="lg" className="w-full text-lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Add to Wishlist
                </Button>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-bold mb-2">Product Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Free Shipping</span> on orders $100+
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Easy Returns</span> within 30 days
                </p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

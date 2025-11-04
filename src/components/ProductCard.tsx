import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
  discount: number;
  lowStock?: boolean;
}

const ProductCard = ({ id, name, brand, price, originalPrice, image, discount, lowStock }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-card border hover:shadow-lg transition-all">
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={image}
            alt={`${brand} ${name}`}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 hover:bg-background"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            <Badge className="bg-sale text-sale-foreground font-bold">
              {discount}% OFF
            </Badge>
            {lowStock && (
              <Badge variant="destructive">
                Low Stock
              </Badge>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          <div className="text-sm text-muted-foreground uppercase font-medium">{brand}</div>
          <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
            <span className="text-sm text-muted-foreground line-through">
              MSRP: ${originalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

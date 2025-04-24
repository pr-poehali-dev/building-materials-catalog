import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  discount?: number;
  isNew?: boolean;
  category: string;
  slug: string;
}

const ProductCard = ({ 
  id, 
  title, 
  price, 
  image, 
  discount, 
  isNew, 
  category,
  slug 
}: ProductCardProps) => {
  const discountedPrice = discount ? price - (price * discount / 100) : price;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <Link to={`/product/${slug}`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-52 object-cover"
          />
        </Link>
        
        {(discount || isNew) && (
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {discount && (
              <span className="bg-construction-accent text-white text-xs font-semibold px-2 py-1 rounded">
                -{discount}%
              </span>
            )}
            {isNew && (
              <span className="bg-construction-secondary text-white text-xs font-semibold px-2 py-1 rounded">
                Новинка
              </span>
            )}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <Link to={`/catalog/${category}`}>
          <span className="text-xs text-construction-muted uppercase tracking-wider">
            {category}
          </span>
        </Link>
        
        <Link to={`/product/${slug}`}>
          <h3 className="font-medium text-lg mt-1 hover:text-construction-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="mt-3 flex justify-between items-end">
          <div>
            {discount ? (
              <div className="flex flex-col">
                <span className="text-sm line-through text-construction-muted">
                  {price.toLocaleString()} ₽
                </span>
                <span className="text-lg font-bold text-construction-primary">
                  {discountedPrice.toLocaleString()} ₽
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-construction-primary">
                {price.toLocaleString()} ₽
              </span>
            )}
          </div>
          
          <Button size="icon" className="bg-construction-primary hover:bg-construction-primary/90">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

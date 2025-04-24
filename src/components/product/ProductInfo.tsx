import React, { useState } from "react";
import { StarIcon, Truck, Shield, Heart, ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductInfoProps {
  title: string;
  sku: string;
  manufacturer: string;
  stockStatus: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  sku,
  manufacturer,
  stockStatus,
  price,
  oldPrice,
  rating,
  reviewCount,
}) => {
  const [quantity, setQuantity] = useState(1);
  
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon 
              key={i} 
              className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-500">{reviewCount} отзывов</span>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center">
          <span className="text-sm text-gray-500">Артикул:</span>
          <span className="ml-2 text-sm">{sku}</span>
        </div>
        <div className="flex items-center mt-1">
          <span className="text-sm text-gray-500">Производитель:</span>
          <span className="ml-2 text-sm">{manufacturer}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {stockStatus}
        </span>
      </div>
      
      <div className="mt-6">
        <div className="flex items-baseline">
          {oldPrice && (
            <span className="text-gray-500 line-through text-lg mr-2">
              {oldPrice.toLocaleString()} ₽
            </span>
          )}
          <span className="text-3xl font-bold text-construction-primary">
            {price.toLocaleString()} ₽
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Цена за упаковку (250 шт)</p>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center">
          <div className="flex items-center border rounded-md mr-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-10 text-center">{quantity}</span>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={incrementQuantity}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <Button className="bg-construction-primary hover:bg-construction-primary/90 flex-1">
            <ShoppingCart className="h-4 w-4 mr-2" />
            В корзину
          </Button>
        </div>
        
        <Button variant="outline" className="w-full">
          <Heart className="h-4 w-4 mr-2" />
          В избранное
        </Button>
      </div>
      
      <div className="mt-8 space-y-3">
        <div className="flex items-start">
          <Truck className="h-5 w-5 text-construction-primary mt-0.5 mr-3" />
          <div>
            <h4 className="font-medium">Доставка</h4>
            <p className="text-sm text-gray-500">Доставка по городу от 500 ₽. Самовывоз со склада.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Shield className="h-5 w-5 text-construction-primary mt-0.5 mr-3" />
          <div>
            <h4 className="font-medium">Гарантия</h4>
            <p className="text-sm text-gray-500">Официальная гарантия от производителя.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

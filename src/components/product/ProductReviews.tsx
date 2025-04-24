import React from "react";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductReviewsProps {
  reviewCount: number;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviewCount }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Отзывы о товаре ({reviewCount})</h3>
        <Button>Написать отзыв</Button>
      </div>
      
      <div className="mt-6 space-y-6">
        <div className="border-b pb-6">
          <div className="flex justify-between">
            <div>
              <h4 className="font-medium">Иван Петров</h4>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
            <span className="text-sm text-gray-500">12.04.2023</span>
          </div>
          <p className="mt-3 text-sm">
            Отличный кирпич! Ровный, крепкий, цвет соответствует заявленному. Использовал для облицовки фасада дома, результат впечатляет.
          </p>
        </div>
        
        <div className="border-b pb-6">
          <div className="flex justify-between">
            <div>
              <h4 className="font-medium">Алексей Сидоров</h4>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
            <span className="text-sm text-gray-500">27.03.2023</span>
          </div>
          <p className="mt-3 text-sm">
            Хороший кирпич за свои деньги. Доставили быстро, упаковка не нарушена. Есть небольшие сколы у некоторых кирпичей, но это в пределах нормы.
          </p>
        </div>
      </div>
      
      <Button variant="outline" className="mt-4 w-full">Показать больше отзывов</Button>
    </div>
  );
};

export default ProductReviews;

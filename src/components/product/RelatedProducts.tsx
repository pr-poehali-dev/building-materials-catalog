import React from "react";
import ProductCard from "@/components/ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  discount?: number;
  isNew?: boolean;
  category: string;
  slug: string;
}

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Сопутствующие товары</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            discount={product.discount}
            isNew={product.isNew}
            category={product.category}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

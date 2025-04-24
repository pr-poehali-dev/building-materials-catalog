import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "Цемент М500 Д0, 50 кг",
    price: 450,
    image: "/placeholder.svg",
    category: "Стройматериалы",
    slug: "cement-m500"
  },
  {
    id: 2,
    title: "Металлочерепица Монтеррей, 1.15x2 м",
    price: 780,
    image: "/placeholder.svg",
    discount: 15,
    category: "Кровельные материалы",
    slug: "metal-tile-monterrey"
  },
  {
    id: 3,
    title: "Обои виниловые на флизелиновой основе",
    price: 1350,
    image: "/placeholder.svg",
    isNew: true,
    category: "Отделочные материалы",
    slug: "vinyl-wallpaper"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Популярные товары</h2>
          <Button 
            variant="outline" 
            className="border-construction-primary text-construction-primary hidden md:inline-flex"
          >
            Все товары
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
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
        
        <div className="text-center mt-8 md:hidden">
          <Button 
            variant="outline" 
            className="border-construction-primary text-construction-primary"
          >
            Все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

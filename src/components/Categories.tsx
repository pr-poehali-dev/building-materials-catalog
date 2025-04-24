import CategoryCard from "./CategoryCard";

const categoriesData = [
  {
    id: 1,
    title: "Кровельные материалы",
    image: "/placeholder.svg",
    productCount: 128,
    slug: "roofing"
  },
  {
    id: 2,
    title: "Стройматериалы",
    image: "/placeholder.svg",
    productCount: 245,
    slug: "construction"
  },
  {
    id: 3,
    title: "Отделочные материалы",
    image: "/placeholder.svg",
    productCount: 186,
    slug: "finishing"
  }
];

const Categories = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Категории товаров</h2>
          <p className="text-construction-muted max-w-2xl mx-auto">
            Мы предлагаем широкий выбор строительных и отделочных материалов
            высокого качества от проверенных производителей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              productCount={category.productCount}
              slug={category.slug}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="/catalog" 
            className="text-construction-primary hover:text-construction-primary/80 font-medium inline-flex items-center"
          >
            Смотреть все категории
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;

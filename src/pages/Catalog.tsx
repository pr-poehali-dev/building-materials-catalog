import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, SlidersHorizontal, Grid3X3, LayoutList, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

// Моковые данные для товаров
const products = [
  {
    id: 1,
    title: "Цемент ПЦ-500 Д0, 50 кг",
    price: 450,
    image: "/placeholder.svg",
    discount: 10,
    isNew: false,
    category: "Цемент",
    slug: "cement-pc-500-d0-50kg"
  },
  {
    id: 2,
    title: "Кирпич облицовочный красный, 250 шт",
    price: 3800,
    image: "/placeholder.svg",
    discount: 0,
    isNew: true,
    category: "Кирпич",
    slug: "red-facing-brick-250pcs"
  },
  {
    id: 3,
    title: "Пеноблок 200x300x600 мм",
    price: 145,
    image: "/placeholder.svg",
    discount: 0,
    isNew: false,
    category: "Блоки",
    slug: "foam-block-200x300x600"
  },
  {
    id: 4,
    title: "Сетка арматурная 100x100 мм, ⌀4 мм",
    price: 650,
    image: "/placeholder.svg",
    discount: 5,
    isNew: true,
    category: "Арматура",
    slug: "reinforcing-mesh-100x100-4mm"
  },
  {
    id: 5,
    title: "Шпаклевка финишная Knauf Ротбанд, 25 кг",
    price: 780,
    image: "/placeholder.svg",
    discount: 0,
    isNew: false,
    category: "Шпаклевка",
    slug: "knauf-rotband-filler-25kg"
  },
  {
    id: 6,
    title: "Профиль для гипсокартона UD-27, 3 м",
    price: 120,
    image: "/placeholder.svg",
    discount: 0,
    isNew: false,
    category: "Профили",
    slug: "drywall-profile-ud27-3m"
  },
  {
    id: 7,
    title: "Песок строительный, 50 кг",
    price: 190,
    image: "/placeholder.svg",
    discount: 0,
    isNew: false,
    category: "Сыпучие материалы",
    slug: "construction-sand-50kg"
  },
  {
    id: 8,
    title: "Утеплитель минеральная вата, 50 мм",
    price: 1350,
    image: "/placeholder.svg",
    discount: 15,
    isNew: false,
    category: "Утеплители",
    slug: "mineral-wool-insulation-50mm"
  },
];

// Категории фильтров
const categories = [
  { id: "cement", name: "Цемент" },
  { id: "brick", name: "Кирпич" },
  { id: "blocks", name: "Блоки" },
  { id: "reinforcement", name: "Арматура" },
  { id: "fillers", name: "Шпаклевка" },
  { id: "profiles", name: "Профили" },
  { id: "bulk", name: "Сыпучие материалы" },
  { id: "insulation", name: "Утеплители" },
];

const brands = [
  { id: "knauf", name: "Knauf" },
  { id: "volma", name: "Volma" },
  { id: "technonikol", name: "ТехноНИКОЛЬ" },
  { id: "eurotec", name: "Eurotec" },
  { id: "bosch", name: "Bosch" },
];

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [viewMode, setViewMode] = useState("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Каталог</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex justify-between items-center mt-6 mb-8">
          <h1 className="text-3xl font-bold">Каталог товаров</h1>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              className={viewMode === "grid" ? "bg-construction-primary/10" : ""}
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className={viewMode === "list" ? "bg-construction-primary/10" : ""}
              onClick={() => setViewMode("list")}
            >
              <LayoutList className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="md:hidden flex items-center gap-2"
              onClick={toggleMobileFilters}
            >
              <Filter className="h-4 w-4" />
              <span>Фильтры</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with filters - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg flex items-center">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Фильтры
                </h3>
              </div>
              
              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-3">Цена, ₽</h4>
                  <div className="mb-4">
                    <Slider
                      defaultValue={[0, 5000]}
                      max={5000}
                      step={100}
                      onValueChange={(value) => setPriceRange(value)}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>{priceRange[0]} ₽</span>
                    <span>{priceRange[1]} ₽</span>
                  </div>
                </div>
                
                <Separator />
                
                {/* Categories */}
                <div>
                  <h4 className="font-medium mb-3">Категории</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category.id}`} />
                        <label
                          htmlFor={`category-${category.id}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                {/* Brands */}
                <div>
                  <h4 className="font-medium mb-3">Бренды</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand.id} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${brand.id}`} />
                        <label
                          htmlFor={`brand-${brand.id}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {brand.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                {/* Availability */}
                <div>
                  <h4 className="font-medium mb-3">Наличие</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="in-stock" />
                      <label
                        htmlFor="in-stock"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        В наличии
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="on-order" />
                      <label
                        htmlFor="on-order"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Под заказ
                      </label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">Применить</Button>
              </div>
            </div>
          </aside>
          
          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
              <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-lg flex flex-col">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="font-semibold text-lg">Фильтры</h3>
                  <Button variant="ghost" size="icon" onClick={toggleMobileFilters}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-6">
                    {/* Price Range */}
                    <div>
                      <h4 className="font-medium mb-3">Цена, ₽</h4>
                      <div className="mb-4">
                        <Slider
                          defaultValue={[0, 5000]}
                          max={5000}
                          step={100}
                          onValueChange={(value) => setPriceRange(value)}
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>{priceRange[0]} ₽</span>
                        <span>{priceRange[1]} ₽</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Categories */}
                    <div>
                      <h4 className="font-medium mb-3">Категории</h4>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-category-${category.id}`} />
                            <label
                              htmlFor={`mobile-category-${category.id}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Brands */}
                    <div>
                      <h4 className="font-medium mb-3">Бренды</h4>
                      <div className="space-y-2">
                        {brands.map((brand) => (
                          <div key={brand.id} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-brand-${brand.id}`} />
                            <label
                              htmlFor={`mobile-brand-${brand.id}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {brand.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Availability */}
                    <div>
                      <h4 className="font-medium mb-3">Наличие</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-in-stock" />
                          <label
                            htmlFor="mobile-in-stock"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            В наличии
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-on-order" />
                          <label
                            htmlFor="mobile-on-order"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Под заказ
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t p-4">
                  <Button className="w-full" onClick={toggleMobileFilters}>Применить</Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Product list */}
          <div className="flex-1">
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "flex flex-col space-y-6"
            }>
              {products.map((product) => (
                <div key={product.id} className={viewMode === "list" ? "w-full" : ""}>
                  <ProductCard 
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    discount={product.discount}
                    isNew={product.isNew}
                    category={product.category}
                    slug={product.slug}
                  />
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-1">
                <Button variant="outline" size="icon" disabled>
                  <span className="sr-only">Previous page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="bg-construction-primary text-white">
                  <span className="sr-only">Page 1</span>1
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Page 2</span>2
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Page 3</span>3
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Next page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { StarIcon, Truck, Shield, ArrowLeft, Plus, Minus, ShoppingCart, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Мок данных для деталей продукта
const productDetails = {
  id: 2,
  title: "Кирпич облицовочный красный, 250 шт",
  slug: "red-facing-brick-250pcs",
  price: 3800,
  oldPrice: 4200,
  discount: 0,
  description: "Облицовочный кирпич красного цвета для наружных работ. Идеально подходит для фасадов зданий. Поставляется упаковками по 250 штук.",
  manufacturer: "КирпичСтрой",
  sku: "KB-123456",
  stockStatus: "В наличии",
  weight: "800 кг",
  dimensions: "250x120x65 мм",
  images: [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ],
  rating: 4.5,
  reviewCount: 28,
  specifications: [
    { name: "Материал", value: "Глина" },
    { name: "Тип", value: "Облицовочный" },
    { name: "Цвет", value: "Красный" },
    { name: "Размер", value: "250x120x65 мм" },
    { name: "Морозостойкость", value: "F50" },
    { name: "Прочность", value: "М150" },
    { name: "Вес одного кирпича", value: "3.2 кг" },
    { name: "Количество в упаковке", value: "250 шт" },
  ],
  category: "Кирпич",
  categorySlug: "brick",
};

// Мок данных для связанных товаров
const relatedProducts = [
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

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [mainImage, setMainImage] = useState(productDetails.images[0]);
  const [quantity, setQuantity] = useState(1);
  
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
              <BreadcrumbLink href="/catalog">Каталог</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/catalog/${productDetails.categorySlug}`}>{productDetails.category}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{productDetails.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <Link 
          to="/catalog" 
          className="mt-4 inline-flex items-center text-sm text-construction-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Вернуться к каталогу
        </Link>

        <div className="mt-6 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <div className="mb-4 rounded-lg overflow-hidden border">
                <img 
                  src={mainImage} 
                  alt={productDetails.title} 
                  className="w-full h-[350px] object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {productDetails.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`border rounded overflow-hidden cursor-pointer ${mainImage === image ? 'ring-2 ring-construction-primary' : ''}`}
                    onClick={() => setMainImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${productDetails.title} - изображение ${index + 1}`} 
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold">{productDetails.title}</h1>
              
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(productDetails.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">{productDetails.reviewCount} отзывов</span>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">Артикул:</span>
                  <span className="ml-2 text-sm">{productDetails.sku}</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-500">Производитель:</span>
                  <span className="ml-2 text-sm">{productDetails.manufacturer}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {productDetails.stockStatus}
                </span>
              </div>
              
              <div className="mt-6">
                <div className="flex items-baseline">
                  {productDetails.oldPrice && (
                    <span className="text-gray-500 line-through text-lg mr-2">
                      {productDetails.oldPrice.toLocaleString()} ₽
                    </span>
                  )}
                  <span className="text-3xl font-bold text-construction-primary">
                    {productDetails.price.toLocaleString()} ₽
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
          </div>
          
          {/* Product Tabs */}
          <Tabs defaultValue="description" className="p-6 border-t">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="specs">Характеристики</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="pt-6">
              <div className="prose max-w-none">
                <p>{productDetails.description}</p>
                <h3 className="text-lg font-medium mt-4">Область применения</h3>
                <p>
                  Облицовочный кирпич используется для наружных работ по отделке фасадов зданий и сооружений. 
                  Также подходит для строительства заборов, столбов и других декоративных элементов.
                </p>
                <h3 className="text-lg font-medium mt-4">Преимущества</h3>
                <ul>
                  <li>Высокая прочность и морозостойкость</li>
                  <li>Устойчивость к атмосферным воздействиям</li>
                  <li>Экологическая безопасность</li>
                  <li>Долговечность</li>
                  <li>Эстетичный внешний вид</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="specs" className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y">
                    {productDetails.specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="px-4 py-3 text-sm font-medium">{spec.name}</td>
                        <td className="px-4 py-3 text-sm">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="pt-6">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Отзывы о товаре ({productDetails.reviewCount})</h3>
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
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Сопутствующие товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;

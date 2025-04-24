import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Импорт выделенных компонентов
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDescription from "@/components/product/ProductDescription";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import ProductReviews from "@/components/product/ProductReviews";
import RelatedProducts from "@/components/product/RelatedProducts";

// Импорт хука для данных о товаре
import { useProductData } from "@/hooks/useProductData";

const ProductDetail = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const { loading, product, relatedProducts } = useProductData(slug);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex justify-center items-center">
          <p>Загрузка...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex justify-center items-center">
          <p>Товар не найден</p>
        </main>
        <Footer />
      </div>
    );
  }

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
              <BreadcrumbLink href={`/catalog/${product.categorySlug}`}>{product.category}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.title}</BreadcrumbPage>
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
            {/* Галерея изображений товара */}
            <ProductImageGallery 
              images={product.images} 
              title={product.title}
            />
            
            {/* Информация о товаре */}
            <ProductInfo
              title={product.title}
              sku={product.sku}
              manufacturer={product.manufacturer}
              stockStatus={product.stockStatus}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
          </div>
          
          {/* Вкладки с дополнительной информацией */}
          <Tabs defaultValue="description" className="p-6 border-t">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="specs">Характеристики</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="pt-6">
              <ProductDescription description={product.description} />
            </TabsContent>
            
            <TabsContent value="specs" className="pt-6">
              <ProductSpecifications specifications={product.specifications} />
            </TabsContent>
            
            <TabsContent value="reviews" className="pt-6">
              <ProductReviews reviewCount={product.reviewCount} />
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Связанные товары */}
        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;

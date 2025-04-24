import { useState, useEffect } from "react";

// Типы данных для товара
export interface ProductDetails {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice?: number;
  discount: number;
  description: string;
  manufacturer: string;
  sku: string;
  stockStatus: string;
  weight: string;
  dimensions: string;
  images: string[];
  rating: number;
  reviewCount: number;
  specifications: { name: string; value: string }[];
  category: string;
  categorySlug: string;
}

export interface RelatedProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  discount?: number;
  isNew?: boolean;
  category: string;
  slug: string;
}

// Мок данных для деталей товара
const mockProductDetails: ProductDetails = {
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
const mockRelatedProducts: RelatedProduct[] = [
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

export const useProductData = (productSlug: string) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);

  useEffect(() => {
    // Здесь в реальном приложении должен быть запрос к API
    // Имитируем задержку загрузки
    const timer = setTimeout(() => {
      setProduct(mockProductDetails);
      setRelatedProducts(mockRelatedProducts);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [productSlug]);

  return { loading, product, relatedProducts };
};

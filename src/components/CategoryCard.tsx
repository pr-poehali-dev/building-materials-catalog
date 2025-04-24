import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  productCount: number;
  slug: string;
}

const CategoryCard = ({ title, image, productCount, slug }: CategoryCardProps) => {
  return (
    <Link to={`/catalog/${slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg group-hover:text-construction-primary transition-colors">
            {title}
          </h3>
          <p className="text-construction-muted text-sm mt-1">
            {productCount} товаров
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

import React, { useState } from "react";

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductImageGalleryProps {
  images: string[];
  title: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, title }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <div className="mb-4 rounded-lg overflow-hidden border">
        <img 
          src={mainImage} 
          alt={title} 
          className="w-full h-[350px] object-cover"
        />
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`border rounded overflow-hidden cursor-pointer ${
              mainImage === image ? 'ring-2 ring-construction-primary' : ''
            }`}
            onClick={() => setMainImage(image)}
          >
            <img 
              src={image} 
              alt={`${title} - изображение ${index + 1}`} 
              className="w-full h-20 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;

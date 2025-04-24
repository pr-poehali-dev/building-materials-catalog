import React from "react";

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <div className="prose max-w-none">
      <p>{description}</p>
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
  );
};

export default ProductDescription;

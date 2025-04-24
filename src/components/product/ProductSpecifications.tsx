import React from "react";

interface Specification {
  name: string;
  value: string;
}

interface ProductSpecificationsProps {
  specifications: Specification[];
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ specifications }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <tbody className="divide-y">
          {specifications.map((spec, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="px-4 py-3 text-sm font-medium">{spec.name}</td>
              <td className="px-4 py-3 text-sm">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSpecifications;

import { Truck, ShieldCheck, Clock, Percent } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Truck className="h-10 w-10 text-construction-primary" />,
      title: "Доставка по городу",
      description: "Быстрая доставка в день заказа или в удобное для вас время"
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-construction-primary" />,
      title: "Гарантия качества",
      description: "Работаем только с проверенными производителями"
    },
    {
      icon: <Clock className="h-10 w-10 text-construction-primary" />,
      title: "Удобный график",
      description: "Работаем без выходных с 8:00 до 20:00"
    },
    {
      icon: <Percent className="h-10 w-10 text-construction-primary" />,
      title: "Выгодные цены",
      description: "Регулярные акции и скидки для постоянных клиентов"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-construction-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

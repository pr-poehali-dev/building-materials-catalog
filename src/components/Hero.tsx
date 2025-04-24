import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-construction-light">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Строительные материалы <span className="text-construction-primary">высшего качества</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Широкий ассортимент строительных и отделочных материалов 
              для любых задач — от фундамента до кровли
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-construction-primary hover:bg-construction-primary/90 text-white">
                Перейти в каталог
              </Button>
              <Button variant="outline" className="border-construction-primary text-construction-primary">
                Получить консультацию
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Строительные материалы" 
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="text-white font-bold">
                  <p className="text-sm mb-1">Акция месяца</p>
                  <p className="text-xl">Скидка 15% на кровельные материалы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

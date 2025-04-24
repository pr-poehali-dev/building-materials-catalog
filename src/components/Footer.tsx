import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-construction-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Компания */}
          <div>
            <h4 className="text-xl font-bold mb-4">СтройМаркет</h4>
            <p className="text-gray-400 mb-4">
              Ваш надежный поставщик строительных и отделочных материалов с 2005 года
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Каталог */}
          <div>
            <h4 className="text-xl font-bold mb-4">Каталог</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/construction" className="text-gray-400 hover:text-white transition-colors">
                  Стройматериалы
                </Link>
              </li>
              <li>
                <Link to="/catalog/roofing" className="text-gray-400 hover:text-white transition-colors">
                  Кровельные материалы
                </Link>
              </li>
              <li>
                <Link to="/catalog/finishing" className="text-gray-400 hover:text-white transition-colors">
                  Отделочные материалы
                </Link>
              </li>
              <li>
                <Link to="/catalog/tools" className="text-gray-400 hover:text-white transition-colors">
                  Инструменты
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h4 className="text-xl font-bold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-400 hover:text-white transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/return" className="text-gray-400 hover:text-white transition-colors">
                  Возврат и обмен
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-xl font-bold mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-construction-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">8 (800) 555-35-35</p>
                  <p className="text-sm text-gray-400">Пн-Вс: 8:00-20:00</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-construction-primary flex-shrink-0" />
                <span>info@stroymarket.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-construction-primary flex-shrink-0 mt-0.5" />
                <span>г. Москва, ул. Строителей, д. 10, стр. 4</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>© 2023 СтройМаркет. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/policy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

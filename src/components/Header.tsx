import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, ShoppingCart, Search, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-construction-primary">СтройМаркет</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-construction-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="font-medium hover:text-construction-primary transition-colors">
              Каталог
            </Link>
            <Link to="/about" className="font-medium hover:text-construction-primary transition-colors">
              О компании
            </Link>
            <Link to="/contacts" className="font-medium hover:text-construction-primary transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Contact and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-construction-primary" />
              <span className="font-medium">8 (800) 555-35-35</span>
            </div>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium py-2 hover:text-construction-primary transition-colors"
                onClick={toggleMenu}
              >
                Главная
              </Link>
              <Link 
                to="/catalog" 
                className="font-medium py-2 hover:text-construction-primary transition-colors"
                onClick={toggleMenu}
              >
                Каталог
              </Link>
              <Link 
                to="/about" 
                className="font-medium py-2 hover:text-construction-primary transition-colors"
                onClick={toggleMenu}
              >
                О компании
              </Link>
              <Link 
                to="/contacts" 
                className="font-medium py-2 hover:text-construction-primary transition-colors"
                onClick={toggleMenu}
              >
                Контакты
              </Link>
              <div className="flex items-center py-2">
                <Phone className="h-4 w-4 mr-2 text-construction-primary" />
                <span className="font-medium">8 (800) 555-35-35</span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

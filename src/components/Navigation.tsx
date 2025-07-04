
import { Button } from "@/components/ui/button";
import { Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">МедКонсульт</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Услуги
            </Link>
            <Link to="/ai-consultant" className="text-gray-600 hover:text-blue-600 transition-colors">
              AI-Консультант
            </Link>
            <Link to="/paid-consultations" className="text-gray-600 hover:text-blue-600 transition-colors">
              Платные консультации
            </Link>
            <Link to="/institutions" className="text-gray-600 hover:text-blue-600 transition-colors">
              Медучреждения
            </Link>
            <Link to="/pharmacies" className="text-gray-600 hover:text-blue-600 transition-colors">
              Аптеки
            </Link>
            <Link to="/advertising" className="text-gray-600 hover:text-blue-600 transition-colors">
              Реклама
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              О нас
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Контакты
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


import { Heart, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">МедКонсульт</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональные медицинские консультации для вашего здоровья и благополучия.
            </p>
            <div className="flex space-x-4">
              <Phone className="w-5 h-5 text-blue-400" />
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Основные услуги</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Кардиология</li>
              <li>Терапия</li>
              <li>Педиатрия</li>
              <li>Психология</li>
              <li>Дерматология</li>
              <li>Неврология</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Специализированные услуги</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Семейная медицина</li>
              <li>Эндокринология</li>
              <li>Профилактика</li>
              <li>Срочные консультации</li>
              <li>Нетрадиционная медицина</li>
              <li>Народная медицина</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>+7 (495) 123-45-67</p>
              <p>info@medconsult.ru</p>
              <p>г. Москва, ул. Медицинская, д. 15</p>
              <div className="mt-4">
                <p className="text-xs">Режим работы:</p>
                <p className="text-xs">Пн-Пт: 8:00-20:00</p>
                <p className="text-xs">Сб-Вс: 9:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 МедКонсульт. Все права защищены.</p>
          <p className="text-xs mt-2">Лицензия на медицинскую деятельность № ЛО-77-01-123456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

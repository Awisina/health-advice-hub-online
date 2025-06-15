
import { GraduationCap, Clock, CreditCard } from "lucide-react";

const ConsultationAdvantages = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Преимущества наших консультаций
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Опытные специалисты</h4>
          <p className="text-gray-600">
            Только врачи с многолетним опытом и высокой квалификацией
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Удобное время</h4>
          <p className="text-gray-600">
            Гибкий график приема, включая вечерние часы и выходные
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-purple-600" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Прозрачные цены</h4>
          <p className="text-gray-600">
            Фиксированная стоимость без скрытых платежей
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultationAdvantages;

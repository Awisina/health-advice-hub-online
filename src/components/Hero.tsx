
import { Button } from "@/components/ui/button";
import { Calendar, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Профессиональные{" "}
              <span className="text-blue-600">медицинские консультации</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Получите квалифицированную медицинскую помощь по лечению и профилактике 
              заболеваний от опытных специалистов
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="w-5 h-5 mr-2" />
                Записаться на консультацию
              </Button>
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-100 rounded-lg p-8">
              <Heart className="w-32 h-32 text-blue-600 mx-auto" />
              <div className="text-center mt-4">
                <p className="text-lg font-semibold text-gray-800">
                  Ваше здоровье - наш приоритет
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

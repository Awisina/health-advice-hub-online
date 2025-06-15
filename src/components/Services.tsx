
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield, Clock, Thermometer, User } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Кардиология",
      description: "Диагностика и лечение заболеваний сердечно-сосудистой системы"
    },
    {
      icon: Thermometer,
      title: "Терапия",
      description: "Общая терапевтическая помощь и профилактика заболеваний"
    },
    {
      icon: User,
      title: "Педиатрия",
      description: "Медицинская помощь детям от рождения до 18 лет"
    },
    {
      icon: Shield,
      title: "Профилактика",
      description: "Комплексные программы профилактики и оздоровления"
    },
    {
      icon: Clock,
      title: "Срочные консультации",
      description: "Оперативная медицинская помощь в экстренных случаях"
    },
    {
      icon: Users,
      title: "Семейная медицина",
      description: "Комплексное медицинское обслуживание всей семьи"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр медицинских консультаций для лечения 
            и профилактики различных заболеваний
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

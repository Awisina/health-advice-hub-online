
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Shield, Clock, Thermometer, User, Brain, Leaf, Stethoscope, Baby, Flower2, Eye } from "lucide-react";

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
      icon: Baby,
      title: "Педиатрия",
      description: "Медицинская помощь детям от рождения до 18 лет"
    },
    {
      icon: Shield,
      title: "Профилактика",
      description: "Комплексные программы профилактики и оздоровления"
    },
    {
      icon: Brain,
      title: "Психология",
      description: "Психологическая помощь и консультирование по психическому здоровью"
    },
    {
      icon: Eye,
      title: "Дерматология",
      description: "Диагностика и лечение заболеваний кожи, волос и ногтей"
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
    },
    {
      icon: Stethoscope,
      title: "Неврология",
      description: "Диагностика и лечение заболеваний нервной системы"
    },
    {
      icon: Leaf,
      title: "Нетрадиционная медицина",
      description: "Альтернативные методы лечения: иглоуколка, мануальная терапия"
    },
    {
      icon: Flower2,
      title: "Народная медицина",
      description: "Консультации по применению народных средств и фитотерапии"
    },
    {
      icon: User,
      title: "Эндокринология",
      description: "Лечение гормональных нарушений и заболеваний эндокринной системы"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Предоставляем полный спектр медицинских консультаций для лечения 
            и профилактики различных заболеваний, включая традиционные и альтернативные методы лечения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <service.icon className="w-12 h-12 text-blue-600 mb-3" />
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Комплексный подход к вашему здоровью
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Мы сочетаем современные медицинские технологии с проверенными временем 
              традиционными методами лечения, обеспечивая индивидуальный подход к каждому пациенту.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Безопасность</h4>
                <p className="text-sm text-gray-600">Только проверенные методы лечения</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Опыт</h4>
                <p className="text-sm text-gray-600">Команда высококвалифицированных специалистов</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Забота</h4>
                <p className="text-sm text-gray-600">Индивидуальный подход к каждому</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

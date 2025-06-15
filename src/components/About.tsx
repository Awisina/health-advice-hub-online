
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "1000+", label: "Довольных пациентов" },
    { icon: Heart, value: "15+", label: "Лет опыта" },
    { icon: Shield, value: "24/7", label: "Поддержка" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              О нашем сайте
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Мы предоставляем высококачественные медицинские консультации, 
              сочетая современные технологии с индивидуальным подходом к каждому пациенту.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Наша команда опытных врачей специализируется на лечении и профилактике 
              широкого спектра заболеваний, обеспечивая комплексную медицинскую помощь.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-blue-50">
            <CardContent className="text-center">
              <Heart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Наша миссия
              </h3>
              <p className="text-gray-600">
                Обеспечить доступную и качественную медицинскую помощь каждому пациенту, 
                способствуя улучшению здоровья и качества жизни населения через 
                профессиональные консультации и профилактические программы.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

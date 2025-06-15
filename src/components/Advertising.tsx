
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Pill, Stethoscope, ShieldCheck, Sparkles, Gift } from "lucide-react";

const Advertising = () => {
  const ads = [
    {
      id: 1,
      title: "Витамины для иммунитета",
      description: "Укрепите свой иммунитет с нашими натуральными витаминными комплексами",
      image: "bg-gradient-to-r from-orange-400 to-red-400",
      icon: Pill,
      price: "от 890 ₽",
      discount: "20% скидка",
      company: "VitaHealth"
    },
    {
      id: 2,
      title: "Медицинская страховка",
      description: "Полная медицинская защита для вас и вашей семьи",
      image: "bg-gradient-to-r from-blue-400 to-purple-400",
      icon: ShieldCheck,
      price: "от 2 500 ₽/мес",
      discount: "Первый месяц бесплатно",
      company: "МедГарант"
    },
    {
      id: 3,
      title: "Умные часы для здоровья",
      description: "Следите за своим здоровьем 24/7 с новыми смарт-часами",
      image: "bg-gradient-to-r from-green-400 to-teal-400",
      icon: Heart,
      price: "от 15 990 ₽",
      discount: "Бесплатная доставка",
      company: "HealthTech"
    },
    {
      id: 4,
      title: "Профессиональные медприборы",
      description: "Качественное медицинское оборудование для дома и клиник",
      image: "bg-gradient-to-r from-indigo-400 to-blue-400",
      icon: Stethoscope,
      price: "от 5 000 ₽",
      discount: "Гарантия 3 года",
      company: "МедТехника"
    }
  ];

  const bannerAds = [
    {
      title: "Скидки до 50% на лекарства",
      subtitle: "Только в этом месяце!",
      company: "Аптека.ру",
      bgColor: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    {
      title: "Бесплатная онлайн диагностика",
      subtitle: "Проверьте свое здоровье прямо сейчас",
      company: "МедДиагностика",
      bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="advertising" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Рекомендуемые продукты и услуги
          </h2>
          <p className="text-xl text-gray-600">
            Проверенные решения для вашего здоровья от наших партнеров
          </p>
        </div>

        {/* Баннерная реклама */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {bannerAds.map((banner, index) => (
            <div key={index} className={`${banner.bgColor} rounded-xl p-8 text-white relative overflow-hidden`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Gift className="w-8 h-8" />
                  <span className="text-sm opacity-90">{banner.company}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{banner.title}</h3>
                <p className="text-lg opacity-90 mb-4">{banner.subtitle}</p>
                <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  Узнать подробнее
                </Button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-8 -translate-y-8"></div>
            </div>
          ))}
        </div>

        {/* Карточки товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ads.map((ad) => {
            const IconComponent = ad.icon;
            return (
              <Card key={ad.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className={`${ad.image} rounded-lg p-6 mb-4 relative`}>
                    <IconComponent className="w-8 h-8 text-white mx-auto" />
                    <div className="absolute top-2 right-2 bg-white text-xs px-2 py-1 rounded-full text-gray-800 font-medium">
                      {ad.discount}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{ad.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {ad.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{ad.price}</span>
                    <span className="text-sm text-gray-500">{ad.company}</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Информационный блок */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Хотите разместить рекламу?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Разместите рекламу ваших медицинских продуктов и услуг на нашем сайте. 
            Мы поможем вам достичь целевой аудитории и увеличить продажи.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Разместить рекламу
            </Button>
            <Button variant="outline" size="lg">
              Узнать тарифы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertising;

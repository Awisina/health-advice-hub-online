
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const MedicalInstitutions = () => {
  const institutions = [
    {
      id: 1,
      name: "Городская больница №1",
      type: "Госпиталь",
      address: "г. Москва, ул. Центральная, д. 25",
      phone: "+7 (495) 123-45-67",
      email: "info@hospital1.ru",
      workingHours: "Круглосуточно",
      services: ["Кардиология", "Терапия", "Хирургия", "Педиатрия"],
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      id: 2,
      name: "Поликлиника \"Здоровье\"",
      type: "Поликлиника",
      address: "г. Москва, пр. Мира, д. 12",
      phone: "+7 (495) 234-56-78",
      email: "reception@health-clinic.ru",
      workingHours: "Пн-Пт: 8:00-20:00, Сб: 9:00-15:00",
      services: ["Терапия", "Неврология", "Эндокринология"],
      coordinates: { lat: 55.7697, lng: 37.6393 }
    },
    {
      id: 3,
      name: "Частная клиника \"МедЭксперт\"",
      type: "Частная клиника",
      address: "г. Москва, ул. Новая, д. 8",
      phone: "+7 (495) 345-67-89",
      email: "info@medexpert.ru",
      workingHours: "Пн-Вс: 8:00-22:00",
      services: ["Кардиология", "Дерматология", "Психология", "Диагностика"],
      coordinates: { lat: 55.751244, lng: 37.618423 }
    },
    {
      id: 4,
      name: "Детская больница им. Филатова",
      type: "Детская больница",
      address: "г. Москва, ул. Садовая-Кудринская, д. 15",
      phone: "+7 (495) 456-78-90",
      email: "info@dgkb13.ru",
      workingHours: "Круглосуточно",
      services: ["Педиатрия", "Детская хирургия", "Неонатология"],
      coordinates: { lat: 55.7663, lng: 37.5950 }
    },
    {
      id: 5,
      name: "Центр народной медицины",
      type: "Альтернативная медицина",
      address: "г. Москва, ул. Арбат, д. 30",
      phone: "+7 (495) 567-89-01",
      email: "info@folk-medicine.ru",
      workingHours: "Пн-Сб: 9:00-19:00",
      services: ["Иглоукалывание", "Фитотерапия", "Мануальная терапия"],
      coordinates: { lat: 55.7520, lng: 37.5924 }
    },
    {
      id: 6,
      name: "Медицинский центр \"Жизнь\"",
      type: "Медицинский центр",
      address: "г. Москва, Ленинский пр., д. 42",
      phone: "+7 (495) 678-90-12",
      email: "info@life-medical.ru",
      workingHours: "Пн-Пт: 7:00-21:00, Сб-Вс: 9:00-18:00",
      services: ["Профилактика", "Семейная медицина", "Лабораторная диагностика"],
      coordinates: { lat: 55.7033, lng: 37.5297 }
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Госпиталь": return "bg-red-100 text-red-800";
      case "Поликлиника": return "bg-blue-100 text-blue-800";
      case "Частная клиника": return "bg-green-100 text-green-800";
      case "Детская больница": return "bg-purple-100 text-purple-800";
      case "Альтернативная медицина": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const openInMaps = (coordinates: { lat: number; lng: number }, name: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}&query_place_id=${encodeURIComponent(name)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="institutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Медицинские учреждения
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Широкая сеть госпиталей, поликлиник и частных клиник для оказания качественной медицинской помощи
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {institutions.map((institution) => (
            <Card key={institution.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg leading-tight">{institution.name}</CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(institution.type)}`}>
                    {institution.type}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{institution.address}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <a href={`tel:${institution.phone}`} className="text-sm text-blue-600 hover:underline">
                    {institution.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a href={`mailto:${institution.email}`} className="text-sm text-blue-600 hover:underline">
                    {institution.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{institution.workingHours}</span>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-500 mb-2">Специализации:</p>
                  <div className="flex flex-wrap gap-1">
                    {institution.services.map((service, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4"
                  onClick={() => openInMaps(institution.coordinates, institution.name)}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Показать на карте
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Найдите ближайшее медучреждение
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Воспользуйтесь интерактивной картой для поиска медицинских учреждений в вашем районе. 
            Все адреса, контакты и специализации доступны в один клик.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-red-600 font-bold">6+</span>
              </div>
              <p className="text-sm font-semibold">Медучреждений</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold">24/7</span>
              </div>
              <p className="text-sm font-semibold">Круглосуточная помощь</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">15+</span>
              </div>
              <p className="text-sm font-semibold">Специализаций</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 font-bold">GPS</span>
              </div>
              <p className="text-sm font-semibold">Навигация</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalInstitutions;

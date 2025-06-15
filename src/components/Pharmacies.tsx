
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Truck, Heart } from "lucide-react";

const Pharmacies = () => {
  const pharmacies = [
    {
      id: 1,
      name: "Аптека №1 'ФармМед'",
      address: "г. Москва, ул. Тверская, д. 12",
      phone: "+7 (495) 123-45-67",
      hours: "Пн-Вс: 8:00-22:00",
      delivery: true,
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      id: 2,
      name: "Центральная аптека",
      address: "г. Москва, Красная площадь, д. 1", 
      phone: "+7 (495) 234-56-78",
      hours: "Круглосуточно",
      delivery: true,
      coordinates: { lat: 55.7539, lng: 37.6208 }
    },
    {
      id: 3,
      name: "Аптека 'Здоровье'",
      address: "г. Москва, ул. Арбат, д. 25",
      phone: "+7 (495) 345-67-89",
      hours: "Пн-Сб: 9:00-21:00, Вс: 10:00-20:00",
      delivery: false,
      coordinates: { lat: 55.7519, lng: 37.5931 }
    },
    {
      id: 4,
      name: "Социальная аптека",
      address: "г. Москва, Проспект Мира, д. 45",
      phone: "+7 (495) 456-78-90",
      hours: "Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-19:00",
      delivery: true,
      coordinates: { lat: 55.7849, lng: 37.6344 }
    }
  ];

  const openInGoogleMaps = (pharmacy: any) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${pharmacy.coordinates.lat},${pharmacy.coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <section id="pharmacies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Аптеки
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Найдите ближайшую аптеку с необходимыми лекарствами. Удобное расположение, 
            широкий ассортимент и услуги доставки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pharmacies.map((pharmacy) => (
            <Card key={pharmacy.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-green-700">{pharmacy.name}</span>
                  {pharmacy.delivery && (
                    <span className="flex items-center text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      <Truck className="w-4 h-4 mr-1" />
                      Доставка
                    </span>
                  )}
                </CardTitle>
                <CardDescription>
                  Полный спектр фармацевтических услуг
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-600">{pharmacy.address}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <a 
                    href={`tel:${pharmacy.phone}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {pharmacy.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{pharmacy.hours}</span>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => openInGoogleMaps(pharmacy)}
                    className="flex items-center"
                  >
                    <MapPin className="w-4 h-4 mr-1" />
                    На карте
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Позвонить
                  </Button>
                  
                  {pharmacy.delivery && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-green-600 border-green-600 hover:bg-green-50"
                    >
                      <Truck className="w-4 h-4 mr-1" />
                      Заказать
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Наши преимущества
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-gray-600">
                Доставка лекарств на дом в течение 2-4 часов по городу
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Качественные препараты</h4>
              <p className="text-gray-600">
                Только сертифицированные лекарства от проверенных производителей
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Круглосуточно</h4>
              <p className="text-gray-600">
                Некоторые аптеки работают 24/7 для экстренных случаев
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Не нашли нужную аптеку?
          </h3>
          <p className="text-gray-600 mb-6">
            Свяжитесь с нами, и мы поможем найти ближайшую аптеку с необходимыми препаратами
          </p>
          <Button className="bg-green-600 hover:bg-green-700">
            <Phone className="w-4 h-4 mr-2" />
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pharmacies;

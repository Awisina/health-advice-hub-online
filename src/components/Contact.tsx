
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Clock, MapPin, User, Stethoscope } from "lucide-react";

const Contact = () => {
  const medicalInstitutions = [
    {
      region: "Москва",
      district: "Центральный",
      name: "Центральная городская больница",
      address: "г. Москва, ул. Тверская, д. 15",
      phone: "+7 (495) 123-45-67",
      email: "info@cgb-moscow.ru",
      doctors: [
        { name: "Иванов Петр Сергеевич", specialty: "Кардиолог", phone: "+7 (495) 123-45-68" },
        { name: "Смирнова Елена Александровна", specialty: "Терапевт", phone: "+7 (495) 123-45-69" }
      ]
    },
    {
      region: "Санкт-Петербург",
      district: "Центральный",
      name: "Городская поликлиника №1",
      address: "г. Санкт-Петербург, Невский пр., д. 45",
      phone: "+7 (812) 345-67-89",
      email: "info@gp1-spb.ru",
      doctors: [
        { name: "Козлов Андрей Викторович", specialty: "Невролог", phone: "+7 (812) 345-67-90" },
        { name: "Федорова Анна Николаевна", specialty: "Педиатр", phone: "+7 (812) 345-67-91" }
      ]
    },
    {
      region: "Свердловская область",
      district: "Центральный",
      name: "Областная клиническая больница",
      address: "г. Екатеринбург, ул. Ленина, д. 28",
      phone: "+7 (343) 456-78-90",
      email: "info@okb-ekb.ru",
      doctors: [
        { name: "Петрова Ольга Дмитриевна", specialty: "Гинеколог", phone: "+7 (343) 456-78-91" }
      ]
    },
    {
      region: "Новосибирская область",
      district: "Центральный",
      name: "Медицинский центр 'Здоровье'",
      address: "г. Новосибирск, ул. Красный пр., д. 12",
      phone: "+7 (383) 567-89-01",
      email: "info@zdorovie-nsk.ru",
      doctors: [
        { name: "Волков Михаил Алексеевич", specialty: "Хирург", phone: "+7 (383) 567-89-02" }
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600">
            Запишитесь на консультацию или получите ответы на ваши вопросы
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Записаться на консультацию</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (999) 123-45-67" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea 
                  id="message" 
                  placeholder="Опишите ваш вопрос или симптомы" 
                  rows={4}
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <Phone className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <Mail className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@medconsult.ru</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Время работы</h3>
                  <p className="text-gray-600">Пн-Пт: 8:00-20:00</p>
                  <p className="text-gray-600">Сб-Вс: 9:00-18:00</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <MapPin className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Медицинская, д. 15</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Медицинские учреждения по регионам */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Медицинские учреждения по регионам
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {medicalInstitutions.map((institution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-blue-700">{institution.name}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                          {institution.region}
                        </span>
                        <span className="bg-gray-50 text-gray-700 px-2 py-1 rounded text-sm">
                          {institution.district}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <span className="text-gray-600">{institution.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <a 
                      href={`tel:${institution.phone}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {institution.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <a 
                      href={`mailto:${institution.email}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {institution.email}
                    </a>
                  </div>

                  {/* Врачи в учреждении */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Stethoscope className="w-4 h-4 mr-2 text-green-600" />
                      Врачи
                    </h4>
                    <div className="space-y-2">
                      {institution.doctors.map((doctor, doctorIndex) => (
                        <div key={doctorIndex} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center space-x-2">
                                <User className="w-4 h-4 text-gray-500" />
                                <span className="font-medium text-gray-900">{doctor.name}</span>
                              </div>
                              <span className="text-sm text-green-600 ml-6">{doctor.specialty}</span>
                            </div>
                            <a 
                              href={`tel:${doctor.phone}`}
                              className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                            >
                              <Phone className="w-3 h-3 mr-1" />
                              {doctor.phone}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

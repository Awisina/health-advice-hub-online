
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, Star, GraduationCap, Calendar, CreditCard } from "lucide-react";
import { useState } from "react";

const PaidConsultations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const doctors = [
    {
      id: 1,
      name: "Иванов Петр Сергеевич",
      specialty: "Кардиолог",
      experience: 15,
      rating: 4.9,
      reviews: 127,
      price: 3500,
      location: "г. Москва, ул. Тверская, д. 15",
      phone: "+7 (495) 123-45-67",
      availability: "Сегодня: 14:00, 16:30",
      region: "Москва",
      district: "Центральный",
      education: "РНИМУ им. Н.И. Пирогова",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Смирнова Елена Александровна",
      specialty: "Терапевт",
      experience: 12,
      rating: 4.8,
      reviews: 89,
      price: 2800,
      location: "г. Москва, ул. Арбат, д. 32",
      phone: "+7 (495) 234-56-78",
      availability: "Завтра: 10:00, 15:00",
      region: "Москва",
      district: "Западный",
      education: "МГУ им. М.В. Ломоносова",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Козлов Андрей Викторович",
      specialty: "Невролог",
      experience: 18,
      rating: 4.9,
      reviews: 156,
      price: 4200,
      location: "г. Санкт-Петербург, Невский пр., д. 45",
      phone: "+7 (812) 345-67-89",
      availability: "Сегодня: 11:00, 17:00",
      region: "Санкт-Петербург",
      district: "Центральный",
      education: "СПбГМУ им. И.П. Павлова",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Петрова Ольга Дмитриевна",
      specialty: "Гинеколог",
      experience: 20,
      rating: 4.7,
      reviews: 203,
      price: 3800,
      location: "г. Екатеринбург, ул. Ленина, д. 28",
      phone: "+7 (343) 456-78-90",
      availability: "Завтра: 09:00, 13:30",
      region: "Свердловская область",
      district: "Центральный",
      education: "УГМУ",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Волков Михаил Алексеевич",
      specialty: "Хирург",
      experience: 22,
      rating: 4.9,
      reviews: 178,
      price: 5000,
      location: "г. Новосибирск, ул. Красный пр., д. 12",
      phone: "+7 (383) 567-89-01",
      availability: "Сегодня: 13:00, 18:00",
      region: "Новосибирская область",
      district: "Центральный",
      education: "НГМУ",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Федорова Анна Николаевна",
      specialty: "Педиатр",
      experience: 10,
      rating: 4.8,
      reviews: 142,
      price: 2500,
      location: "г. Санкт-Петербург, ул. Рубинштейна, д. 18",
      phone: "+7 (812) 678-90-12",
      availability: "Завтра: 08:00, 14:00",
      region: "Санкт-Петербург",
      district: "Центральный",
      education: "СПбГПМУ",
      image: "/placeholder.svg"
    }
  ];

  const regions = ["all", ...Array.from(new Set(doctors.map(doctor => doctor.region)))];
  const districts = selectedRegion === "all" 
    ? ["all", ...Array.from(new Set(doctors.map(doctor => doctor.district)))]
    : ["all", ...Array.from(new Set(doctors.filter(doctor => doctor.region === selectedRegion).map(doctor => doctor.district)))];
  
  const specialties = ["all", ...Array.from(new Set(doctors.map(doctor => doctor.specialty)))];

  const filteredDoctors = doctors.filter(doctor => {
    const regionMatch = selectedRegion === "all" || doctor.region === selectedRegion;
    const districtMatch = selectedDistrict === "all" || doctor.district === selectedDistrict;
    const specialtyMatch = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty;
    return regionMatch && districtMatch && specialtyMatch;
  });

  const bookAppointment = (doctor: any) => {
    alert(`Запись к врачу ${doctor.name} на консультацию за ${doctor.price} руб.`);
  };

  return (
    <section id="paid-consultations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Платные консультации
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Получите квалифицированную медицинскую помощь от ведущих специалистов. 
            Индивидуальный подход и качественное обслуживание.
          </p>
        </div>

        {/* Фильтры */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="w-full sm:w-48">
            <Select value={selectedRegion} onValueChange={(value) => {
              setSelectedRegion(value);
              setSelectedDistrict("all");
            }}>
              <SelectTrigger>
                <SelectValue placeholder="Регион" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все регионы</SelectItem>
                {regions.filter(region => region !== "all").map(region => (
                  <SelectItem key={region} value={region}>{region}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-48">
            <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
              <SelectTrigger>
                <SelectValue placeholder="Район" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все районы</SelectItem>
                {districts.filter(district => district !== "all").map(district => (
                  <SelectItem key={district} value={district}>{district}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full sm:w-48">
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Специальность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все специальности</SelectItem>
                {specialties.filter(specialty => specialty !== "all").map(specialty => (
                  <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-blue-700">{doctor.name}</CardTitle>
                      <CardDescription className="text-lg font-medium text-green-600">
                        {doctor.specialty}
                      </CardDescription>
                      <div className="flex items-center space-x-2 mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{doctor.rating}</span>
                        <span className="text-sm text-gray-500">({doctor.reviews} отзывов)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{doctor.price} ₽</div>
                    <div className="text-sm text-gray-500">за консультацию</div>
                  </div>
                </div>
                <div className="flex gap-2 text-xs mt-2">
                  <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">{doctor.region}</span>
                  <span className="bg-gray-50 text-gray-700 px-2 py-1 rounded">{doctor.district}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium">Опыт: {doctor.experience} лет</div>
                    <div className="text-sm text-gray-600">{doctor.education}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-600">{doctor.location}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <a 
                    href={`tel:${doctor.phone}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {doctor.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-green-600 font-medium">{doctor.availability}</span>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button 
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 flex-1"
                    onClick={() => bookAppointment(doctor)}
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    Записаться
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Позвонить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Врачи в выбранном регионе или специальности не найдены.</p>
            <p className="text-gray-400 text-sm mt-2">Попробуйте изменить фильтры поиска.</p>
          </div>
        )}

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

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Нужна помощь с записью?
          </h3>
          <p className="text-gray-600 mb-6">
            Наши операторы помогут подобрать врача и записать на удобное время
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Phone className="w-4 h-4 mr-2" />
            +7 (800) 123-45-67
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaidConsultations;

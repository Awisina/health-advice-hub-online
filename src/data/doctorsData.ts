
export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  reviews: number;
  price: number;
  location: string;
  phone: string;
  availability: string;
  region: string;
  district: string;
  education: string;
  image: string;
}

export const doctorsData: Doctor[] = [
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

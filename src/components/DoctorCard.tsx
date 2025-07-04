
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star, GraduationCap, Calendar, TrendingUp } from "lucide-react";
import { calculateCommission, defaultCommissionSettings } from "@/utils/commissionCalculator";
import { calculateExperience } from "@/utils/experienceCalculator";

interface Doctor {
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
  careerStartDate: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctor: Doctor) => void;
}

const DoctorCard = ({ doctor, onBookAppointment }: DoctorCardProps) => {
  const commissionResult = calculateCommission(doctor.price, defaultCommissionSettings);
  const calculatedExperience = calculateExperience(doctor.careerStartDate);

  return (
    <Card className="hover:shadow-lg transition-shadow">
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
            <div className="text-xs text-blue-600 mt-1">
              <TrendingUp className="w-3 h-3 inline mr-1" />
              Врач получит: {commissionResult.doctorEarnings} ₽
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-xs mt-2">
          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">{doctor.region}</span>
          <span className="bg-gray-50 text-gray-700 px-2 py-1 rounded">{doctor.district}</span>
          <span className="bg-green-50 text-green-700 px-2 py-1 rounded">
            Комиссия: {commissionResult.commissionAmount} ₽
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <GraduationCap className="w-5 h-5 text-gray-400" />
          <div>
            <div className="text-sm font-medium">Опыт: {calculatedExperience} лет</div>
            <div className="text-sm text-gray-600">{doctor.education}</div>
            <div className="text-xs text-gray-500 mt-1">
              Карьера с {new Date(doctor.careerStartDate).toLocaleDateString('ru-RU', { 
                year: 'numeric', 
                month: 'long' 
              })}
            </div>
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
            onClick={() => onBookAppointment(doctor)}
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
  );
};

export default DoctorCard;

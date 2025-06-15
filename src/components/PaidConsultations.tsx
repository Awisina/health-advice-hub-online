
import { Button } from "@/components/ui/button";
import { CreditCard, Phone } from "lucide-react";
import { useState } from "react";
import { calculateCommission, defaultCommissionSettings } from "@/utils/commissionCalculator";
import { doctorsData, Doctor } from "@/data/doctorsData";
import DoctorFilters from "@/components/DoctorFilters";
import DoctorCard from "@/components/DoctorCard";
import ConsultationAdvantages from "@/components/ConsultationAdvantages";

const PaidConsultations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const filteredDoctors = doctorsData.filter(doctor => {
    const regionMatch = selectedRegion === "all" || doctor.region === selectedRegion;
    const districtMatch = selectedDistrict === "all" || doctor.district === selectedDistrict;
    const specialtyMatch = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty;
    return regionMatch && districtMatch && specialtyMatch;
  });

  const bookAppointment = (doctor: Doctor) => {
    const commissionResult = calculateCommission(doctor.price, defaultCommissionSettings);
    alert(`Запись к врачу ${doctor.name}\n\nСтоимость: ${doctor.price} ₽\nКомиссия сайта: ${commissionResult.commissionAmount} ₽\nДоход врача: ${commissionResult.doctorEarnings} ₽`);
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

        <DoctorFilters
          doctors={doctorsData}
          selectedRegion={selectedRegion}
          selectedDistrict={selectedDistrict}
          selectedSpecialty={selectedSpecialty}
          onRegionChange={setSelectedRegion}
          onDistrictChange={setSelectedDistrict}
          onSpecialtyChange={setSelectedSpecialty}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={bookAppointment}
            />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Врачи в выбранном регионе или специальности не найдены.</p>
            <p className="text-gray-400 text-sm mt-2">Попробуйте изменить фильтры поиска.</p>
          </div>
        )}

        <ConsultationAdvantages />

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

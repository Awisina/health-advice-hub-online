
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Doctor {
  region: string;
  district: string;
  specialty: string;
}

interface DoctorFiltersProps {
  doctors: Doctor[];
  selectedRegion: string;
  selectedDistrict: string;
  selectedSpecialty: string;
  onRegionChange: (value: string) => void;
  onDistrictChange: (value: string) => void;
  onSpecialtyChange: (value: string) => void;
}

const DoctorFilters = ({
  doctors,
  selectedRegion,
  selectedDistrict,
  selectedSpecialty,
  onRegionChange,
  onDistrictChange,
  onSpecialtyChange
}: DoctorFiltersProps) => {
  const regions = ["all", ...Array.from(new Set(doctors.map(doctor => doctor.region)))];
  const districts = selectedRegion === "all" 
    ? ["all", ...Array.from(new Set(doctors.map(doctor => doctor.district)))]
    : ["all", ...Array.from(new Set(doctors.filter(doctor => doctor.region === selectedRegion).map(doctor => doctor.district)))];
  
  const specialties = ["all", ...Array.from(new Set(doctors.map(doctor => doctor.specialty)))];

  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
      <div className="w-full sm:w-48">
        <Select value={selectedRegion} onValueChange={(value) => {
          onRegionChange(value);
          onDistrictChange("all");
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
        <Select value={selectedDistrict} onValueChange={onDistrictChange}>
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
        <Select value={selectedSpecialty} onValueChange={onSpecialtyChange}>
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
  );
};

export default DoctorFilters;

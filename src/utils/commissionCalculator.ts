
export interface CommissionSettings {
  commissionRate: number; // процент комиссии (от 0 до 100)
  minimumCommission?: number; // минимальная комиссия в рублях
  maximumCommission?: number; // максимальная комиссия в рублях
}

export interface CommissionResult {
  originalPrice: number;
  commissionAmount: number;
  doctorEarnings: number;
  siteEarnings: number;
  commissionRate: number;
}

export const calculateCommission = (
  consultationPrice: number,
  settings: CommissionSettings
): CommissionResult => {
  // Рассчитываем комиссию как процент от стоимости консультации
  let commissionAmount = (consultationPrice * settings.commissionRate) / 100;
  
  // Применяем минимальную комиссию если установлена
  if (settings.minimumCommission && commissionAmount < settings.minimumCommission) {
    commissionAmount = settings.minimumCommission;
  }
  
  // Применяем максимальную комиссию если установлена
  if (settings.maximumCommission && commissionAmount > settings.maximumCommission) {
    commissionAmount = settings.maximumCommission;
  }
  
  // Не позволяем комиссии превышать стоимость консультации
  if (commissionAmount > consultationPrice) {
    commissionAmount = consultationPrice;
  }
  
  const doctorEarnings = consultationPrice - commissionAmount;
  
  return {
    originalPrice: consultationPrice,
    commissionAmount: Math.round(commissionAmount),
    doctorEarnings: Math.round(doctorEarnings),
    siteEarnings: Math.round(commissionAmount),
    commissionRate: settings.commissionRate
  };
};

// Пример настроек комиссии по умолчанию (может быть изменено учредителем)
export const defaultCommissionSettings: CommissionSettings = {
  commissionRate: 15, // 15% комиссия
  minimumCommission: 200, // минимум 200 рублей
  maximumCommission: 1000 // максимум 1000 рублей
};

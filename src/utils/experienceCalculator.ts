
/**
 * Вычисляет стаж работы в годах на основе даты начала карьеры
 * @param careerStartDate - дата начала карьеры в формате YYYY-MM-DD
 * @returns количество полных лет стажа
 */
export const calculateExperience = (careerStartDate: string): number => {
  const startDate = new Date(careerStartDate);
  const currentDate = new Date();
  
  // Вычисляем разность в годах
  let years = currentDate.getFullYear() - startDate.getFullYear();
  
  // Проверяем, прошел ли день рождения в этом году
  const monthDiff = currentDate.getMonth() - startDate.getMonth();
  const dayDiff = currentDate.getDate() - startDate.getDate();
  
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years--;
  }
  
  return Math.max(0, years); // Возвращаем 0, если дата начала карьеры в будущем
};

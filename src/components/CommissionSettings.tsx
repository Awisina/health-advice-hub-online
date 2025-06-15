
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Calculator, Percent, Ruble } from "lucide-react";
import { useState } from "react";
import { CommissionSettings as CommissionSettingsType, calculateCommission, defaultCommissionSettings } from "@/utils/commissionCalculator";

const CommissionSettings = () => {
  const [settings, setSettings] = useState<CommissionSettingsType>(defaultCommissionSettings);
  const [testPrice, setTestPrice] = useState(3500);

  const handleSettingsChange = (field: keyof CommissionSettingsType, value: number) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const saveSettings = () => {
    // Здесь будет сохранение в базу данных через Supabase
    alert(`Настройки комиссии сохранены:\n- Процент: ${settings.commissionRate}%\n- Мин. комиссия: ${settings.minimumCommission || 0}₽\n- Макс. комиссия: ${settings.maximumCommission || 'не ограничена'}₽`);
  };

  const testResult = calculateCommission(testPrice, settings);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Настройки комиссии
          </h2>
          <p className="text-lg text-gray-600">
            Управление процентной долей сайта от платных консультаций
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Настройки комиссии */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Percent className="w-5 h-5 mr-2 text-blue-600" />
                Параметры комиссии
              </CardTitle>
              <CardDescription>
                Установите процент и ограничения для комиссии сайта
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="commissionRate">Процент комиссии (%)</Label>
                <Input
                  id="commissionRate"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={settings.commissionRate}
                  onChange={(e) => handleSettingsChange('commissionRate', parseFloat(e.target.value) || 0)}
                  className="mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Основной процент комиссии с каждой консультации
                </p>
              </div>

              <div>
                <Label htmlFor="minimumCommission">Минимальная комиссия (₽)</Label>
                <Input
                  id="minimumCommission"
                  type="number"
                  min="0"
                  value={settings.minimumCommission || ''}
                  onChange={(e) => handleSettingsChange('minimumCommission', parseInt(e.target.value) || undefined)}
                  className="mt-1"
                  placeholder="Не установлена"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Минимальная сумма комиссии в рублях
                </p>
              </div>

              <div>
                <Label htmlFor="maximumCommission">Максимальная комиссия (₽)</Label>
                <Input
                  id="maximumCommission"
                  type="number"
                  min="0"
                  value={settings.maximumCommission || ''}
                  onChange={(e) => handleSettingsChange('maximumCommission', parseInt(e.target.value) || undefined)}
                  className="mt-1"
                  placeholder="Не установлена"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Максимальная сумма комиссии в рублях
                </p>
              </div>

              <Button onClick={saveSettings} className="w-full bg-blue-600 hover:bg-blue-700">
                Сохранить настройки
              </Button>
            </CardContent>
          </Card>

          {/* Калькулятор и примеры */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-green-600" />
                Калькулятор комиссии
              </CardTitle>
              <CardDescription>
                Проверьте как будет рассчитываться комиссия
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="testPrice">Стоимость консультации (₽)</Label>
                <Input
                  id="testPrice"
                  type="number"
                  min="0"
                  value={testPrice}
                  onChange={(e) => setTestPrice(parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <h4 className="font-semibold text-gray-900">Расчет комиссии:</h4>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Стоимость консультации:</span>
                  <span className="font-medium">{testResult.originalPrice} ₽</span>
                </div>
                
                <div className="flex justify-between text-red-600">
                  <span>Комиссия сайта ({testResult.commissionRate}%):</span>
                  <span className="font-medium">-{testResult.commissionAmount} ₽</span>
                </div>
                
                <div className="flex justify-between text-green-600 font-semibold border-t pt-2">
                  <span>Доход врача:</span>
                  <span>{testResult.doctorEarnings} ₽</span>
                </div>
                
                <div className="flex justify-between text-blue-600 font-semibold">
                  <span>Доход сайта:</span>
                  <span>{testResult.siteEarnings} ₽</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Примеры расчета:</h4>
                {[2000, 3500, 5000, 7000].map(price => {
                  const result = calculateCommission(price, settings);
                  return (
                    <div key={price} className="flex justify-between text-sm py-1">
                      <span>{price} ₽</span>
                      <span className="text-blue-700">
                        Врач: {result.doctorEarnings} ₽ | Сайт: {result.siteEarnings} ₽
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Ruble className="w-5 h-5 mr-2 text-green-600" />
              Статистика доходов
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">156</div>
                <div className="text-sm text-gray-600">Консультаций сегодня</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">487,200 ₽</div>
                <div className="text-sm text-gray-600">Общий оборот</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">73,080 ₽</div>
                <div className="text-sm text-gray-600">Комиссия сайта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">414,120 ₽</div>
                <div className="text-sm text-gray-600">Доходы врачей</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CommissionSettings;

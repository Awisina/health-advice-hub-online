
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Settings, TrendingUp } from "lucide-react";
import { useState } from "react";
import { CommissionSettings as CommissionSettingsType, defaultCommissionSettings } from "@/utils/commissionCalculator";

const CommissionSettings = () => {
  const [settings, setSettings] = useState<CommissionSettingsType>(defaultCommissionSettings);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // В реальном приложении здесь была бы отправка данных на сервер
    console.log("Сохранены настройки комиссии:", settings);
    setIsEditing(false);
    alert("Настройки комиссии сохранены!");
  };

  const handleReset = () => {
    setSettings(defaultCommissionSettings);
  };

  return (
    <section id="commission-settings" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Настройки комиссии
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Управление процентными отчислениями с платных консультаций. 
            Настройки доступны только для учредителей.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-green-600" />
              <span>Параметры комиссии</span>
            </CardTitle>
            <CardDescription>
              Установите процент комиссии и ограничения для платных консультаций
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="commissionRate">Процент комиссии (%)</Label>
                <Input
                  id="commissionRate"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={settings.commissionRate}
                  onChange={(e) => setSettings({
                    ...settings,
                    commissionRate: parseFloat(e.target.value) || 0
                  })}
                  disabled={!isEditing}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="minimumCommission">Минимальная комиссия (₽)</Label>
                <Input
                  id="minimumCommission"
                  type="number"
                  min="0"
                  step="10"
                  value={settings.minimumCommission || ''}
                  onChange={(e) => setSettings({
                    ...settings,
                    minimumCommission: parseFloat(e.target.value) || undefined
                  })}
                  disabled={!isEditing}
                  placeholder="Не установлено"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="maximumCommission">Максимальная комиссия (₽)</Label>
                <Input
                  id="maximumCommission"
                  type="number"
                  min="0"
                  step="10"
                  value={settings.maximumCommission || ''}
                  onChange={(e) => setSettings({
                    ...settings,
                    maximumCommission: parseFloat(e.target.value) || undefined
                  })}
                  disabled={!isEditing}
                  placeholder="Не установлено"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Примеры расчета комиссии
              </h4>
              <div className="space-y-2 text-sm text-blue-800">
                <div className="flex justify-between">
                  <span>Консультация за 2000 ₽:</span>
                  <span className="font-medium">
                    Комиссия: {Math.max(
                      settings.minimumCommission || 0,
                      Math.min(
                        settings.maximumCommission || Infinity,
                        (2000 * settings.commissionRate) / 100
                      )
                    )} ₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Консультация за 5000 ₽:</span>
                  <span className="font-medium">
                    Комиссия: {Math.max(
                      settings.minimumCommission || 0,
                      Math.min(
                        settings.maximumCommission || Infinity,
                        (5000 * settings.commissionRate) / 100
                      )
                    )} ₽
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              {!isEditing ? (
                <Button 
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Редактировать
                </Button>
              ) : (
                <>
                  <Button 
                    onClick={handleSave}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Сохранить
                  </Button>
                  <Button 
                    onClick={() => setIsEditing(false)}
                    variant="outline"
                  >
                    Отмена
                  </Button>
                  <Button 
                    onClick={handleReset}
                    variant="outline"
                    className="text-gray-600"
                  >
                    Сбросить
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CommissionSettings;

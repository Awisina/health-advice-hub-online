
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Send, User, Stethoscope, AlertTriangle } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIConsultant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Здравствуйте! Я ваш AI-консультант по медицинским вопросам. Я могу помочь с первичной консультацией, но помните: мои рекомендации не заменяют профессиональную медицинскую помощь. Как дела с вашим здоровьем?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Симуляция ответа AI (в реальном приложении здесь был бы API вызов)
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('головная боль') || input.includes('голова болит')) {
      return 'При головной боли рекомендую: 1) Отдохнуть в тихом месте 2) Выпить воды 3) Приложить холодный компресс. Если боль сильная или не проходит более 24 часов, обязательно обратитесь к врачу.';
    }
    
    if (input.includes('температура') || input.includes('жар')) {
      return 'При повышенной температуре: 1) Пейте больше жидкости 2) Отдыхайте 3) При температуре выше 38.5°C можно принять жаропонижающее. Если температура держится более 3 дней или выше 39°C, срочно к врачу!';
    }
    
    if (input.includes('кашель')) {
      return 'При кашле помогает: 1) Теплое питье 2) Увлажнение воздуха 3) Избегайте курения. Если кашель с кровью, длится более 2 недель или сопровождается высокой температурой - к врачу!';
    }
    
    if (input.includes('давление')) {
      return 'Для контроля давления: 1) Регулярно измеряйте давление 2) Ограничьте соль 3) Больше двигайтесь 4) Управляйте стрессом. При давлении выше 140/90 обязательно к кардиологу!';
    }

    return 'Спасибо за вопрос! Для точной диагностики рекомендую обратиться к специалисту. Могу предложить записаться на консультацию к одному из наших врачей. Есть ли еще вопросы о здоровье?';
  };

  const quickQuestions = [
    'Что делать при головной боли?',
    'Как снизить температуру?',
    'Профилактика простуды',
    'Когда обращаться к врачу?'
  ];

  return (
    <section id="ai-consultant" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">AI-Консультант</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Получите первичную медицинскую консультацию с помощью искусственного интеллекта
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Чат-интерфейс */}
          <div className="lg:col-span-2">
            <Card className="h-96">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center space-x-2">
                  <Stethoscope className="h-5 w-5" />
                  <span>Медицинская консультация</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col h-80">
                {/* Сообщения */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.sender === 'ai' && <Bot className="h-4 w-4 mt-1 text-blue-600" />}
                          {message.sender === 'user' && <User className="h-4 w-4 mt-1" />}
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-4 w-4 text-blue-600" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Поле ввода */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Опишите ваши симптомы..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Боковая панель */}
          <div className="space-y-6">
            {/* Быстрые вопросы */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Частые вопросы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto p-3 text-sm"
                    onClick={() => setInputMessage(question)}
                  >
                    {question}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Предупреждение */}
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2 text-amber-800">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Важно!</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-amber-700">
                  AI-консультант предоставляет только общую информацию и не заменяет 
                  профессиональную медицинскую помощь. При серьезных симптомах 
                  обязательно обратитесь к врачу!
                </p>
              </CardContent>
            </Card>

            {/* Экстренная помощь */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">Экстренная помощь</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700 mb-3">
                  При угрозе жизни немедленно звоните:
                </p>
                <Button variant="destructive" className="w-full">
                  📞 103 - Скорая помощь
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;

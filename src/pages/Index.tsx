import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Icon name="Package" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">ПоддонТорг</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-primary">Каталог</a>
              <a href="#buy" className="text-gray-600 hover:text-primary">Покупка</a>
              <a href="#sell" className="text-gray-600 hover:text-primary">Продажа</a>
              <a href="#delivery" className="text-gray-600 hover:text-primary">Доставка</a>
              <a href="#prices" className="text-gray-600 hover:text-primary">Цены</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary">Контакты</a>
            </nav>
            <Button>Связаться с нами</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent">Европоддоны стандарта 1200x800 мм</Badge>
              <h2 className="text-5xl font-bold mb-6">Покупка и продажа поддонов</h2>
              <p className="text-xl mb-8 text-gray-100">
                Надежный партнер в торговле европоддонами. Высокое качество, быстрая доставка, выгодные цены.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить поддоны
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="DollarSign" size={20} className="mr-2" />
                  Продать поддоны
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/97eebac9-3d0a-48d8-b0f2-fb93fca9b302.jpg" 
                alt="Европоддоны" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h3>
            <p className="text-xl text-gray-600">Профессиональный подход к торговле поддонами</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Качество</h4>
              <p className="text-gray-600">Только сертифицированные европоддоны стандарта 1200x800 мм</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Доставка</h4>
              <p className="text-gray-600">Быстрая доставка по всей России собственным транспортом</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Выгода</h4>
              <p className="text-gray-600">Лучшие цены на рынке и гибкие условия сотрудничества</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-2">
                  <Icon name="ShoppingCart" size={24} className="text-white" />
                </div>
                <CardTitle>Покупка поддонов</CardTitle>
                <CardDescription>Широкий ассортимент европоддонов различных категорий</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Новые поддоны</li>
                  <li>• Б/у в отличном состоянии</li>
                  <li>• Восстановленные поддоны</li>
                  <li>• Оптовые поставки</li>
                </ul>
                <Button className="w-full mt-4">Купить</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-2">
                  <Icon name="DollarSign" size={24} className="text-white" />
                </div>
                <CardTitle>Продажа поддонов</CardTitle>
                <CardDescription>Выкупаем поддоны по выгодным ценам</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Оценка на месте</li>
                  <li>• Самовывоз</li>
                  <li>• Быстрая оплата</li>
                  <li>• Любые объемы</li>
                </ul>
                <Button variant="outline" className="w-full mt-4">Продать</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-2">
                  <Icon name="Truck" size={24} className="text-white" />
                </div>
                <CardTitle>Доставка</CardTitle>
                <CardDescription>Логистические решения для вашего бизнеса</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• По всей России</li>
                  <li>• Собственный автопарк</li>
                  <li>• Экспресс доставка</li>
                  <li>• Отслеживание груза</li>
                </ul>
                <Button variant="outline" className="w-full mt-4">Заказать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Цены на поддоны</h3>
            <p className="text-xl text-gray-600">Актуальные цены на европоддоны 1200x800 мм</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Новые поддоны</CardTitle>
                <div className="text-4xl font-bold text-primary">450₽</div>
                <CardDescription>за штуку</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Первый сорт
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Термообработка
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Сертификат качества
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Гарантия 2 года
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Б/У поддоны</CardTitle>
                <div className="text-4xl font-bold text-secondary">320₽</div>
                <CardDescription>за штуку</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Отличное состояние
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Проверка качества
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Быстрая доставка
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Гарантия 1 год
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Восстановленные</CardTitle>
                <div className="text-4xl font-bold text-accent">280₽</div>
                <CardDescription>за штуку</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Отремонтированные
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Контроль качества
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Экономичный вариант
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Гарантия 6 месяцев
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section id="delivery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Доставка и логистика</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">По всей России</h4>
                    <p className="text-gray-600">Доставляем поддоны в любой регион России</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Быстрая доставка</h4>
                    <p className="text-gray-600">Стандартная доставка 3-5 дней, экспресс за 1-2 дня</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Надежность</h4>
                    <p className="text-gray-600">Собственный автопарк и проверенные партнеры</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="mt-8">
                Рассчитать доставку
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/0205e384-7ae2-43b2-aa1b-10a41cfd815b.jpg" 
                alt="Доставка поддонов" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h3>
          <p className="text-xl mb-8 text-gray-100">
            Свяжитесь с нами для получения персонального предложения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Package" size={24} />
                <span className="text-xl font-bold">ПоддонТорг</span>
              </div>
              <p className="text-gray-400">Надежный партнер в торговле европоддонами</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Покупка поддонов</li>
                <li>Продажа поддонов</li>
                <li>Доставка</li>
                <li>Логистика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (800) 123-45-67</li>
                <li>info@poddontorg.ru</li>
                <li>Москва, ул. Складская, 15</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Пн-Пт: 8:00 - 20:00</li>
                <li>Сб: 9:00 - 18:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ПоддонТорг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Users, Calendar, Star, Heart, Shield, Award, MapPin, Flag } from "lucide-react";
import heroImage from "@/assets/hero-liberation.jpg";
import eternalFlame from "@/assets/eternal-flame.jpg";
import liberationCelebration from "@/assets/liberation-celebration.jpg";
import partisans from "@/assets/partisans.jpg";
import heroMedal from "@/assets/hero-medal.jpg";
import victoryCelebration from "@/assets/victory-celebration.jpg";
import brestFortress from "@/assets/brest-fortress.jpg";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-memorial-dark/80 via-memorial-dark/50 to-memorial-dark" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <Badge className="mb-6 bg-primary text-primary-foreground px-6 py-2 text-lg font-semibold shadow-glow-red">
            1944 — 2024
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground drop-shadow-2xl">
            80 лет Великой Победы
          </h1>
          <p className="text-xl md:text-3xl mb-4 text-foreground/90 font-light">
            Освобождение Республики Беларусь
          </p>
          <p className="text-lg md:text-2xl mb-8 text-foreground/80 font-light">
            и Победа советского народа в Великой Отечественной войне
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto animate-glow-pulse" />
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 bg-gradient-memorial">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <Flame className="w-16 h-16 mx-auto mb-8 text-primary animate-glow-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Память, которая живет в веках
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
            3 июля 1944 года стало днем освобождения столицы Беларуси — Минска. Эта дата ознаменовала 
            начало полного освобождения республики от немецко-фашистских захватчиков.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
            Операция «Багратион» — одна из крупнейших военных операций в истории человечества, 
            принесла свободу белорусскому народу и стала переломным моментом в ходе Второй мировой войны.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-accent font-semibold">
            Победа советского народа в Великой Отечественной войне — это подвиг всех народов СССР, 
            единство которых стало несокрушимой силой против фашизма.
          </p>
        </div>
      </section>

      {/* Partisan Movement Section */}
      <section className="py-24 px-4 bg-memorial-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${partisans})` }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <Shield className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Партизанское движение Беларуси
            </h2>
            <p className="text-xl text-muted-foreground">
              Народная война в тылу врага
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className="p-8 bg-card/80 backdrop-blur-sm fade-in-section hover:shadow-glow-red transition-all duration-300">
              <img
                src={partisans}
                alt="Партизаны Беларуси"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Народные мстители</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                В партизанском движении Беларуси участвовало более 374 тысяч человек. 
                Они контролировали значительную часть территории, создавая партизанские зоны.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Партизаны совершили тысячи диверсий, уничтожили огромное количество техники 
                и живой силы противника, нарушали коммуникации и снабжение немецких войск.
              </p>
            </Card>

            <div className="space-y-6 fade-in-section">
              {[
                { number: "374 000", label: "партизан сражались за свободу" },
                { number: "1 255", label: "партизанских отрядов" },
                { number: "60%", label: "территории под партизанским контролем" },
                { number: "11 000", label: "диверсий на железных дорогах" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 bg-memorial-dark border-l-4 border-secondary"
                >
                  <div className="text-3xl font-black text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 bg-gradient-hero">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Хронология освобождения
            </h2>
            <p className="text-xl text-muted-foreground">
              Операция «Багратион» — триумф советского военного искусства
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                date: "23 июня 1944",
                title: "Начало операции «Багратион»",
                description: "Войска 1-го Прибалтийского, 3-го, 2-го и 1-го Белорусских фронтов начали масштабное наступление. Координация четырех фронтов демонстрирует мощь советской военной машины.",
              },
              {
                date: "27 июня 1944",
                title: "Окружение витебской группировки",
                description: "Первый крупный успех операции. Пять немецких дивизий окружены и разгромлены.",
              },
              {
                date: "3 июля 1944",
                title: "Освобождение Минска",
                description: "Столица Беларуси освобождена. В окружение попало более 100 тысяч немецких солдат. День независимости Республики Беларусь.",
              },
              {
                date: "13 июля 1944",
                title: "Освобождение Вильнюса",
                description: "Продолжение триумфального наступления. Советские войска освобождают древний город.",
              },
              {
                date: "28 июля 1944",
                title: "Освобождение Бреста",
                description: "Город-герой, где началась война, был полностью освобожден. Символическое завершение обороны Брестской крепости.",
              },
              {
                date: "29 августа 1944",
                title: "Завершение операции",
                description: "Беларусь полностью освобождена. Красная Армия вышла к границам Восточной Пруссии. Операция признана одной из самых успешных в истории войн.",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="p-8 bg-memorial-charcoal border-l-4 border-primary hover:shadow-glow-red transition-all duration-300 fade-in-section"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-48 flex-shrink-0">
                    <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                      {event.date}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-lg">{event.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-4 bg-memorial-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <Star className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Масштаб операции
            </h2>
            <p className="text-xl text-muted-foreground">
              Цифры, вошедшие в историю
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "2,3 млн",
                label: "Советских воинов участвовали",
                icon: Users,
              },
              {
                number: "400 тыс.",
                label: "Враг потерял убитыми",
                icon: Star,
              },
              {
                number: "67 дней",
                label: "Длилась операция",
                icon: Calendar,
              },
              {
                number: "600 км",
                label: "Продвижение на запад",
                icon: Flame,
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-8 text-center bg-memorial-charcoal border-2 border-primary/20 hover:border-primary hover:shadow-elevated transition-all duration-300 fade-in-section"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl md:text-5xl font-black mb-2 text-accent">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heroes Section */}
      <section className="py-24 px-4 bg-gradient-memorial relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroMedal})` }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <Award className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Герои Советского Союза
            </h2>
            <p className="text-xl text-muted-foreground">
              Подвиг, достойный вечной славы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Иван Черняховский",
                title: "Командующий 3-м Белорусским фронтом",
                achievement: "Самый молодой командующий фронтом в истории",
              },
              {
                name: "Константин Рокоссовский",
                title: "Командующий 1-м Белорусским фронтом",
                achievement: "Маршал двух стран: СССР и Польши",
              },
              {
                name: "Василий Захаров",
                title: "Начальник Генерального штаба",
                achievement: "Координатор операции «Багратион»",
              },
            ].map((hero, index) => (
              <Card
                key={index}
                className="p-6 bg-memorial-charcoal hover:shadow-glow-gold transition-all duration-300 fade-in-section text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                  <Star className="w-10 h-10 text-memorial-dark" />
                </div>
                <h3 className="text-xl font-bold mb-2">{hero.name}</h3>
                <p className="text-primary font-semibold mb-2">{hero.title}</p>
                <p className="text-muted-foreground text-sm">{hero.achievement}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur-sm fade-in-section text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <img
                src={heroMedal}
                alt="Золотая Звезда Героя"
                className="w-48 h-48 object-cover rounded-lg"
              />
              <div className="text-left max-w-2xl">
                <h3 className="text-3xl font-bold mb-4">
                  Более 2 000 Героев Советского Союза
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  За освобождение Беларуси звания Героя Советского Союза были удостоены 
                  более 2000 воинов. Среди них представители всех народов СССР — 
                  русские, белорусы, украинцы, евреи, татары, казахи и многие другие.
                </p>
                <p className="text-lg text-accent font-semibold">
                  Их подвиг объединил все народы в борьбе за свободу и независимость.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Cities-Heroes Section */}
      <section className="py-24 px-4 bg-memorial-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Города-герои и крепость-герой
            </h2>
            <p className="text-xl text-muted-foreground">
              Символы несгибаемого мужества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group fade-in-section hover:shadow-glow-red transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={brestFortress}
                  alt="Брестская крепость"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-memorial-dark via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Крепость-герой
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold mb-2">Брестская крепость</h3>
                  <p className="text-muted-foreground">
                    Здесь началась война. Здесь был совершен первый подвиг.
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              {[
                {
                  city: "Минск",
                  title: "Город-герой",
                  description: "Столица Беларуси, центр партизанского движения",
                },
                {
                  city: "Москва",
                  title: "Город-герой",
                  description: "Сердце страны, не покорившееся врагу",
                },
                {
                  city: "Ленинград",
                  title: "Город-герой",
                  description: "900 дней блокады не сломили дух народа",
                },
                {
                  city: "Сталинград",
                  title: "Город-герой",
                  description: "Переломная битва Великой Отечественной",
                },
              ].map((city, index) => (
                <Card
                  key={index}
                  className="p-6 bg-memorial-dark hover:shadow-glow-gold transition-all duration-300 fade-in-section"
                >
                  <div className="flex items-start gap-4">
                    <Flag className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold mb-1">{city.city}</h4>
                      <Badge className="bg-accent text-accent-foreground mb-2">
                        {city.title}
                      </Badge>
                      <p className="text-muted-foreground">{city.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Memorial Section */}
      <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${eternalFlame})` }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center fade-in-section">
          <Flame className="w-20 h-20 mx-auto mb-8 text-primary animate-glow-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Вечная память героям
          </h2>
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
            "Никто не забыт, ничто не забыто"
          </blockquote>
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
            <p>
              Каждый третий житель Беларуси погиб в годы Великой Отечественной войны.
            </p>
            <p>
              27 миллионов граждан СССР отдали свои жизни за Победу над фашизмом.
            </p>
            <p className="text-2xl text-accent font-semibold">
              Мы помним их подвиг. Мы чтим их память. Мы передаем эту память будущим поколениям.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-memorial-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Галерея Памяти
            </h2>
            <p className="text-xl text-muted-foreground">
              Моменты, запечатленные историей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group fade-in-section hover:shadow-glow-red transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={liberationCelebration}
                  alt="Радость освобождения"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-memorial-dark via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">Радость освобождения</h3>
                  <p className="text-sm text-muted-foreground">1944 год</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group fade-in-section hover:shadow-glow-gold transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={victoryCelebration}
                  alt="Праздник Победы"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-memorial-dark via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">Праздник Победы</h3>
                  <p className="text-sm text-muted-foreground">Москва, 1945</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group fade-in-section hover:shadow-glow-gold transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={eternalFlame}
                  alt="Вечный огонь"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-memorial-dark via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">Вечный огонь</h3>
                  <p className="text-sm text-muted-foreground">Символ памяти</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Unity Section */}
      <section className="py-24 px-4 bg-gradient-memorial">
        <div className="max-w-4xl mx-auto fade-in-section">
          <Card className="p-12 bg-card/80 backdrop-blur-sm text-center">
            <Users className="w-20 h-20 mx-auto mb-8 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Единство народов СССР
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Победа в Великой Отечественной войне стала возможна благодаря единству 
              всех народов Советского Союза. Плечом к плечу сражались представители 
              более 100 национальностей.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Русские, белорусы, украинцы, казахи, грузины, армяне, азербайджанцы, 
              узбеки, таджики, киргизы, туркмены, эстонцы, латыши, литовцы, молдаване 
              и многие другие народы показали, что вместе они — непобедимая сила.
            </p>
            <div className="text-2xl font-bold text-accent">
              Это была война всего советского народа за свободу и независимость!
            </div>
          </Card>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-32 px-4 bg-memorial-charcoal relative">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-1 bg-primary" />
              <Star className="w-12 h-12 text-accent animate-glow-pulse" />
              <div className="w-16 h-1 bg-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Мы помним. Мы гордимся.
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-4">
            80 лет свободы и независимости
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12">
            Подвиг советского народа будет жить вечно
          </p>
          <div className="text-7xl md:text-8xl font-black bg-gradient-accent bg-clip-text text-transparent mb-6">
            1944–2024
          </div>
          <p className="text-xl text-muted-foreground uppercase tracking-wider mb-4">
            Слава героям освободителям
          </p>
          <p className="text-xl text-muted-foreground uppercase tracking-wider">
            Вечная слава Советскому народу-победителю
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-memorial-dark border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">
            © 2024 — К 80-летию освобождения Республики Беларусь
          </p>
          <p>
            и Победы советского народа в Великой Отечественной войне
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

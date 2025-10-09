import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Users, Calendar, Star, Heart } from "lucide-react";
import heroImage from "@/assets/hero-liberation.jpg";
import eternalFlame from "@/assets/eternal-flame.jpg";
import liberationCelebration from "@/assets/liberation-celebration.jpg";

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
          <p className="text-xl md:text-3xl mb-8 text-foreground/90 font-light">
            Освобождение Республики Беларусь
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
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Операция «Багратион» — одна из крупнейших военных операций в истории человечества, 
            принесла свободу белорусскому народу и стала переломным моментом в ходе Второй мировой войны.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 bg-memorial-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Хронология освобождения
            </h2>
            <p className="text-xl text-muted-foreground">
              Ключевые даты операции «Багратион»
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                date: "23 июня 1944",
                title: "Начало операции",
                description: "Войска 1-го Прибалтийского, 3-го, 2-го и 1-го Белорусских фронтов начали наступление.",
              },
              {
                date: "3 июля 1944",
                title: "Освобождение Минска",
                description: "Столица Беларуси освобождена. В окружение попало более 100 тысяч немецких солдат.",
              },
              {
                date: "13 июля 1944",
                title: "Освобождение Вильнюса",
                description: "Продолжение успешного наступления на запад.",
              },
              {
                date: "28 июля 1944",
                title: "Освобождение Бреста",
                description: "Город-герой, где началась война, был полностью освобожден.",
              },
              {
                date: "29 августа 1944",
                title: "Завершение операции",
                description: "Беларусь полностью освобождена. Красная Армия вышла к границам Восточной Пруссии.",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-l-4 border-primary hover:shadow-glow-red transition-all duration-300 fade-in-section"
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
      <section className="py-24 px-4 bg-gradient-hero">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <Star className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Цена Победы
            </h2>
            <p className="text-xl text-muted-foreground">
              Числа, которые нельзя забыть
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "2,3 млн",
                label: "Участников операции",
                icon: Users,
              },
              {
                number: "400 тыс.",
                label: "Враг потерял",
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

      {/* Memorial Section */}
      <section className="py-24 px-4 bg-memorial-dark relative overflow-hidden">
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
          <p className="text-xl text-muted-foreground leading-relaxed">
            Каждый третий житель Беларуси погиб в годы Великой Отечественной войны. 
            Мы помним их подвиг. Мы чтим их память. Мы передаем эту память будущим поколениям.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-memorial-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Галерея Памяти
            </h2>
            <p className="text-xl text-muted-foreground">
              Моменты освобождения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group fade-in-section hover:shadow-glow-red transition-all duration-300">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={liberationCelebration}
                  alt="Радость освобождения"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-memorial-dark via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Радость освобождения</h3>
                  <p className="text-muted-foreground">1944 год</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group fade-in-section hover:shadow-glow-gold transition-all duration-300">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={eternalFlame}
                  alt="Вечный огонь"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-memorial-dark via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Вечный огонь памяти</h3>
                  <p className="text-muted-foreground">Символ вечной памяти</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-32 px-4 bg-gradient-hero relative">
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
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-12">
            80 лет свободы и независимости
          </p>
          <div className="text-8xl font-black bg-gradient-accent bg-clip-text text-transparent mb-4">
            1944–2024
          </div>
          <p className="text-xl text-muted-foreground uppercase tracking-wider">
            Слава героям освободителям
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-memorial-dark border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 — К 80-летию освобождения Республики Беларусь</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

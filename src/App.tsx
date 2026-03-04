import React from 'react';
import { motion } from 'motion/react';
import { Camera, Video, Heart, Calendar, Mail, Phone, Instagram, Facebook, ArrowRight, Check, Star, Users, MapPin, Drone, Clock } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-8 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-brand-teal/5">
    <div className="text-lg font-serif tracking-[0.2em] uppercase text-brand-teal font-semibold">TwojeWspomnienia</div>
    <div className="hidden md:flex gap-12 text-[9px] uppercase tracking-[0.4em] font-light">
      <a href="#o-nas" className="hover:text-brand-teal transition-colors">O nas</a>
      <a href="#oferta" className="hover:text-brand-teal transition-colors">Cennik</a>
      <a href="#portfolio" className="hover:text-brand-teal transition-colors">Portfolio</a>
      <a href="#kontakt" className="hover:text-brand-teal transition-colors">Kontakt</a>
    </div>
    <a href="#kontakt" className="px-6 py-2 border border-brand-teal text-brand-teal text-[9px] uppercase tracking-widest rounded-full hover:bg-brand-teal hover:text-white transition-all">
      Rezerwuj termin
    </a>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center px-8 md:px-24 bg-white overflow-hidden pt-20">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl relative z-10"
      >
        <span className="block text-[10px] uppercase tracking-[0.6em] text-brand-teal mb-8 font-semibold">TwojeWspomnienia.pl</span>
        <h1 className="text-4xl md:text-6xl font-serif leading-[1.2] mb-8 text-brand-ink">
          Zatrzymujemy <span className="italic font-extralight text-brand-teal">najpiękniejsze</span> chwile. <br />
          Dyskretnie i z pasją.
        </h1>
        <p className="max-w-md text-sm text-brand-muted font-light leading-relaxed tracking-wide mb-10">
          Jesteśmy rodzinnym zespołem fotografów i filmowców. Tworzymy pamiątki, które zostają z Wami na całe życie.
        </p>
        <div className="flex gap-6">
          <a href="#oferta" className="px-8 py-3 bg-brand-teal text-white text-[9px] uppercase tracking-widest rounded-full hover:bg-brand-teal-light transition-all">
            Nasza Oferta
          </a>
          <a href="#kontakt" className="px-8 py-3 border border-brand-ink/10 text-brand-ink text-[9px] uppercase tracking-widest rounded-full hover:border-brand-teal transition-all">
            Kontakt
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative grid grid-cols-2 gap-4"
      >
        <div className="space-y-4">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400" className="w-full h-64 object-cover rounded-2xl shadow-lg" alt="Wedding 1" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" className="w-full h-48 object-cover rounded-2xl shadow-lg" alt="Wedding 2" referrerPolicy="no-referrer" />
        </div>
        <div className="space-y-4 pt-12">
          <img src="https://images.unsplash.com/photo-1520856629106-ee9b12197bd4?auto=format&fit=crop&q=80&w=400" className="w-full h-48 object-cover rounded-2xl shadow-lg" alt="Wedding 3" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400" className="w-full h-64 object-cover rounded-2xl shadow-lg" alt="Wedding 4" referrerPolicy="no-referrer" />
        </div>
      </motion.div>
    </div>
  </section>
);

const AboutUs = () => (
  <section id="o-nas" className="py-32 px-8 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=600" className="w-full h-80 object-cover rounded-3xl" alt="Photography work" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600" className="w-full h-80 object-cover rounded-3xl mt-12" alt="Camera gear" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-brand-teal text-white p-8 rounded-3xl hidden md:block">
          <p className="text-3xl font-serif italic">Rodzinna pasja</p>
          <p className="text-[10px] uppercase tracking-widest mt-2 opacity-80">Ania, Piotr i Janek</p>
        </div>
      </div>
      <div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-teal font-bold mb-6 block">Poznajmy się</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Jesteśmy <span className="italic">rodziną</span>, którą połączyła wspólna pasja.</h2>
        <div className="space-y-6 text-brand-muted font-light leading-relaxed text-sm">
          <p>
            Hej! Jesteśmy Ania, Piotr i Janek, czyli zespół TwojeWspomnienia.pl. Co nas wyróżnia? Jesteśmy rodziną – Ania i Piotr to rodzice, a ja, Janek, to ich syn. Ta bliska relacja pozwala nam rozumieć się bez słów podczas pracy, co przekłada się na spokój i profesjonalizm w trakcie Waszych uroczystości.
          </p>
          <p>
            Z fotografią i filmowaniem mamy styczność niemal codziennie, prowadząc własny portal informacyjny z regionu Kaszub. Mieszkamy w okolicy Trójmiasta, ale dojedziemy wszędzie tam, gdzie zechcecie uwiecznić swoje wspomnienia.
          </p>
          <p>
            Choć najczęściej spotkacie nas na weselach, z równym zaangażowaniem uwiecznimy chrzciny Waszego dziecka czy nawet stypę pożegnalną bliskiej osoby. Do każdego klienta podchodzimy indywidualnie, pragnąc uchwycić to, co wyjątkowe i nietuzinkowe.
          </p>
        </div>
        <div className="flex gap-8 mt-12">
          <div className="flex flex-col items-center">
            <Users className="w-6 h-6 text-brand-teal mb-2" />
            <span className="text-[9px] uppercase tracking-widest">3 Operatorów</span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-6 h-6 text-brand-teal mb-2" />
            <span className="text-[9px] uppercase tracking-widest">Cała Polska</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="w-6 h-6 text-brand-teal mb-2" />
            <span className="text-[9px] uppercase tracking-widest">10+ Lat</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Packages = () => {
  const mainPackages = [
    {
      title: "Film + Fotografia",
      price: "3 800 zł",
      features: [
        "Zostajemy z wami do godziny 01:00",
        "Minimum 400 zdjęć",
        "Film do 90 min",
        "Teledysk ślubny",
        "50 wywołanych zdjęć",
        "1 pendrive z zdjęciami i filmem",
        "Film z 3 kamer (Full HD)",
        "Ujęcia z drona",
        "Dźwięk z profesjonalnego rejestratora",
        "Mała sesja z gośćmi (jeśli pogoda dopisze)"
      ],
      highlight: true
    },
    {
      title: "Zdjęcia Ślubne",
      price: "1 500 zł",
      features: [
        "Zostajemy z wami do godziny 01:00",
        "Minimum 500 zdjęć",
        "50 wywołanych zdjęć",
        "1 pendrive z zdjęciami",
        "Dwóch fotografów",
        "Ujęcia z drona",
        "Mała sesja z gośćmi (jeśli pogoda dopisze)"
      ]
    },
    {
      title: "Film Ślubny",
      price: "2 500 zł",
      features: [
        "Zostajemy z wami do godziny 01:00",
        "Film do 90 min",
        "Teledysk ślubny",
        "1 pendrive z filmem",
        "Film z 3 kamer (Full HD)",
        "Ujęcia z drona",
        "Dźwięk z profesjonalnego rejestratora"
      ]
    }
  ];

  const addons = [
    { name: "Plener ślubny (foto/film)", price: "500 zł" },
    { name: "Fotoksiążka", price: "150 - 500 zł" },
    { name: "Film z podziękowaniami", price: "600 zł" },
    { name: "Drugi operator (kamera/foto)", price: "1 000 zł" },
    { name: "Film nagrany in jakości 4K", price: "600 zł" },
    { name: "Szybszy termin (do 45 dni)", price: "500 zł" }
  ];

  return (
    <section id="oferta" className="py-32 px-8 md:px-12 bg-brand-teal/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-teal font-bold mb-4 block">Oferta i Cennik</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Nasze pakiety <span className="italic">ślubne</span></h2>
          <p className="text-brand-muted font-light max-w-2xl mx-auto text-sm">Przejrzyste warunki, najwyższa jakość i pamiątka na całe życie.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {mainPackages.map((pkg, i) => (
            <div key={i} className={`p-10 rounded-[40px] bg-white transition-all duration-500 hover:shadow-2xl ${pkg.highlight ? 'ring-2 ring-brand-teal shadow-xl' : 'border border-brand-ink/5'}`}>
              <h3 className="text-2xl font-serif mb-2">{pkg.title}</h3>
              <div className="text-3xl font-light text-brand-teal mb-8">{pkg.price}</div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-xs text-brand-muted font-light">
                    <Check className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className={`block text-center py-4 rounded-full text-[10px] uppercase tracking-widest transition-all ${pkg.highlight ? 'bg-brand-teal text-white hover:bg-brand-teal-light' : 'border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white'}`}>
                Wybierz pakiet
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white p-12 rounded-[40px] border border-brand-ink/5">
          <h3 className="text-2xl font-serif mb-12 text-center">Dodatki i usługi <span className="italic">opcjonalne</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addons.map((addon, i) => (
              <div key={i} className="flex justify-between items-center pb-4 border-b border-brand-ink/5">
                <span className="text-sm font-light text-brand-ink">{addon.name}</span>
                <span className="text-sm font-medium text-brand-teal">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Approach = () => (
  <section className="py-32 px-8 md:px-12 bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <span className="text-[10px] uppercase tracking-[0.4em] text-brand-teal font-bold mb-8 block">Nasz Styl</span>
      <h2 className="text-4xl md:text-5xl font-serif mb-12 leading-tight">Dyskrecja, natura i <span className="italic text-brand-teal">prawdziwe emocje</span>.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
        <div className="space-y-6 text-brand-muted font-light leading-relaxed text-sm">
          <p>
            Staramy się fotografować dyskretnie, ponieważ jesteśmy przekonani, że właśnie w taki sposób możemy uchwycić najlepsze wspomnienia – te szczere i naturalne. Ale nie bójcie się, czasem również lubimy trochę razem z Wami i gośćmi powariować na parkiecie!
          </p>
          <p>
            Jeśli chodzi o styl, preferujemy naturalność. Chcemy, aby zdjęcia oddawały rzeczywistość – są one wtedy ponadczasowe, a nie tylko modne w konkretnym sezonie.
          </p>
        </div>
        <div className="space-y-6 text-brand-muted font-light leading-relaxed text-sm">
          <p>
            Standardowo jesteśmy z Wami do oczepin (ok. godziny 01:00). Ten czas pozwala nam na uchwycenie najważniejszych chwil – od przygotowań u fryzjera czy wizażystki, aż po szczyt zabawy weselnej.
          </p>
          <p>
            Wszystko zależy od przebiegu dnia i Waszych potrzeb. Razem przeanalizujemy, które etapy Dnia Ślubu są dla Was kluczowe, a które nieco mniej, aby stworzyć idealny reportaż.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1520856629106-ee9b12197bd4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="portfolio" className="py-20 bg-white overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-4 pr-4"
        >
          {[...images, ...images].map((src, i) => (
            <img 
              key={i} 
              src={src} 
              className="w-[400px] h-[300px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" 
              alt={`Slide ${i}`} 
              referrerPolicy="no-referrer" 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="kontakt" className="py-32 px-8 md:px-12 bg-white border-t border-brand-ink/5">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
      <div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-teal font-bold mb-6 block">Kontakt</span>
        <h2 className="text-4xl font-serif mb-12">Zapytaj o <span className="italic">termin</span></h2>
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-brand-teal/5 flex items-center justify-center text-brand-teal">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-brand-muted mb-1">Zadzwoń</p>
              <p className="text-lg font-light">+48 123 456 789</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-brand-teal/5 flex items-center justify-center text-brand-teal">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-brand-muted mb-1">Napisz</p>
              <p className="text-lg font-light">kontakt@twojewspomnienia.pl</p>
            </div>
          </div>
        </div>
      </div>
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input type="text" placeholder="Imię i nazwisko" className="w-full bg-transparent border-b border-brand-ink/10 py-4 text-sm font-light focus:border-brand-teal outline-none transition-colors" />
          <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-brand-ink/10 py-4 text-sm font-light focus:border-brand-teal outline-none transition-colors" />
        </div>
        <input type="text" placeholder="Data uroczystości" className="w-full bg-transparent border-b border-brand-ink/10 py-4 text-sm font-light focus:border-brand-teal outline-none transition-colors" />
        <textarea placeholder="Wiadomość" rows={3} className="w-full bg-transparent border-b border-brand-ink/10 py-4 text-sm font-light focus:border-brand-teal outline-none transition-colors resize-none"></textarea>
        <button className="w-full py-5 bg-brand-teal text-white rounded-full uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-brand-teal-light transition-all shadow-xl shadow-brand-teal/20">
          Wyślij zapytanie
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-8 md:px-12 bg-white border-t border-brand-ink/5">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-[9px] uppercase tracking-[0.3em] opacity-30">© 2024 TwojeWspomnienia.pl</div>
      <div className="flex gap-8">
        <Instagram className="w-4 h-4 opacity-30 hover:opacity-100 transition-opacity cursor-pointer" />
        <Facebook className="w-4 h-4 opacity-30 hover:opacity-100 transition-opacity cursor-pointer" />
      </div>
      <div className="text-[9px] uppercase tracking-[0.3em] opacity-30">Gdańsk | Gdynia | Sopot | Kaszuby</div>
    </div>
  </footer>
);

export default function TwojeWspomnienia() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-teal/10 selection:text-brand-teal">
      <Navbar />
      <Hero />
      <AboutUs />
      <Packages />
      <Approach />
      <PortfolioSlider />
      <Contact />
      <Footer />
    </div>
  );
}



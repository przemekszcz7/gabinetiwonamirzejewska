/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  Facebook, 
  Menu, 
  X,
  Smartphone,
  Heart,
  Star,
  CheckCircle2
} from "lucide-react";
import { useState, useRef } from "react";
import { IMAGES, CONTACT } from "./constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(253, 250, 246, 0)", "rgba(253, 250, 246, 0.9)"]
  );

  const navItems = [
    { name: "O mnie", href: "#o-mnie" },
    { name: "Usługi", href: "#uslugi" },
    { name: "Galeria", href: "#galeria" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <motion.header 
      style={{ backgroundColor, backdropFilter: "blur(8px)" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col"
      >
        <span className="font-serif text-xl font-semibold tracking-tight text-brand-dark">
          Iwona Mirzejewska
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-medium -mt-1">
          Gabinet Kosmetyczny
        </span>
      </motion.div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item, idx) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="text-xs uppercase tracking-widest text-brand-dark/70 hover:text-brand-gold transition-colors font-medium"
          >
            {item.name}
          </motion.a>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-brand-dark p-2"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-cream border-b border-brand-gold/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif text-brand-dark"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Abstract Shapes/Texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-xs uppercase tracking-widest font-semibold"
        >
          <Sparkles size={14} />
          {CONTACT.tagline}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] font-medium"
        >
          Twój moment <br />
          <span className="italic font-normal italic pr-2 text-brand-gold/80">relaksu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-xl mx-auto text-brand-muted text-lg md:text-xl mb-12 font-light leading-relaxed"
        >
          Profesjonalne usługi kosmetyczne z dojazdem do Twojego domu w Płocku. 
          Oszczędź czas i ciesz się pielęgnacją w komfortowym otoczeniu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#kontakt"
            className="group relative px-10 py-5 bg-brand-dark text-brand-cream rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 text-sm uppercase tracking-widest font-medium">Umów wizytę</span>
            <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          <a
            href="#uslugi"
            className="text-brand-dark/80 hover:text-brand-dark flex items-center gap-2 text-sm uppercase tracking-widest font-semibold transition-colors"
          >
            Zobacz ofertę <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Floating Detail */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50"
      >
        <div className="w-px h-16 bg-gradient-to-b from-brand-gold/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Smartphone size={32} />,
      title: "Mobilność",
      desc: "Przyjeżdżam pod wskazany adres w Płocku i okolicach, dbając o Twój komfort."
    },
    {
      icon: <Star size={32} />,
      title: "Profesjonalizm",
      desc: "Wykorzystuję certyfikowane produkty i nowoczesne techniki zabiegowe."
    },
    {
      icon: <Heart size={32} />,
      title: "Indywidualność",
      desc: "Każdy zabieg jest dopasowany do potrzeb Twojej skóry i Twoich oczekiwań."
    }
  ];

  return (
    <section id="o-mnie" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-brand-cream shadow-2xl">
              <img 
                src="https://i.postimg.cc/4dTsP8tq/684647022-1583307620465435-4138946314934999749-n.jpg" 
                alt="Iwona Mirzejewska" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            {/* Experience batch */}
            <div className="absolute -bottom-6 -right-6 bg-brand-gold p-8 rounded-[30px] text-white shadow-xl rotate-6">
              <div className="text-4xl font-serif font-bold mb-1 leading-none tracking-tighter text-white">Mobilnie</div>
              <div className="text-[10px] uppercase tracking-widest font-medium opacity-80 text-white">Twoje SPA u Ciebie</div>
            </div>
          </motion.div>

          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">Gabinet Kosmetyczny</h2>
              <h3 className="text-4xl md:text-5xl font-medium leading-tight mb-6">Iwona Mirzejewska – Twoja osobista kosmetyczka</h3>
              <p className="text-brand-muted text-lg font-light leading-relaxed mb-8">
                Nazywam się Iwona Mirzejewska i od lat pomagam kobietom odkrywać ich naturalne piękno. 
                Moja pasja do kosmetologii połączyła się z chęcią zapewnienia klientkom maksymalnej wygody. 
                Dlatego oferuję pełen zakres usług mobilnych – docieram tam, gdzie czujesz się najlepiej.
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-5 p-6 rounded-3xl border border-gray-100 hover:border-brand-gold/30 hover:bg-brand-cream/50 transition-all duration-300"
                >
                  <div className="text-brand-gold mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-brand-muted text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const categories = [
    {
      title: "Pielęgnacja Twarzy",
      items: ["Peeling kawitacyjny", "Mezoterapia", "Zabiegi nawilżające", "Oczyszczanie"],
      icon: <Sparkles size={24} />
    },
    {
      title: "Dłonie i Stopy",
      items: ["Manicure hybrydowy", "Pedicure leczniczy", "Zabiegi parafinowe", "Stylizacja paznokci"],
      icon: <Smartphone size={24} />
    },
    {
      title: "Oprawa Oka",
      items: ["Henna pudrowa", "Laminacja brwi", "Regulacja", "Lifting rzęs"],
      icon: <Star size={24} />
    },
    {
      title: "Wizaż i Okazje",
      items: ["Makijaż ślubny", "Makijaż wieczorowy", "Analiza kolorystyczna", "Lekcje makijażu"],
      icon: <Heart size={24} />
    }
  ];

  return (
    <section id="uslugi" className="py-24 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Oferta
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-medium"
          >
            Zabiegi w Twoim domu
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-brand-gold/5"
            >
              <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold mb-8">
                {cat.icon}
              </div>
              <h4 className="text-2xl font-medium mb-6 font-serif">{cat.title}</h4>
              <ul className="space-y-4">
                {cat.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-brand-muted text-sm group">
                    <CheckCircle2 size={16} className="text-brand-gold opacity-40 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Realizacje
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-medium"
            >
              Moje Prace
            </motion.h3>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-12 h-px bg-brand-gold/30" />
             <span className="text-xs uppercase tracking-widest text-brand-muted font-medium">Przewiń, aby zobaczyć więcej</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${
                idx === 0 ? 'col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-brand-cream relative">
                <img 
                  src={img} 
                  loading="lazy"
                  alt={`Zabieg ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
                    <Sparkles size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 px-6 bg-brand-dark text-brand-cream relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold rounded-full blur-[150px]" />
       </div>

       <div className="max-w-7xl mx-auto relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4"
              >
                Kontakt
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-medium mb-12"
              >
                Zapraszam <br />do kontaktu
              </motion.h3>

              <div className="space-y-8">
                <motion.a
                  href={`tel:${CONTACT.phone.replace(/-/g, '')}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 rounded-full border border-brand-cream/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-brand-cream/50 mb-1">Zadzwoń do mnie</div>
                    <div className="text-2xl font-serif">{CONTACT.phone}</div>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${CONTACT.email}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 rounded-full border border-brand-cream/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-brand-cream/50 mb-1">Napisz e-mail</div>
                    <div className="text-2xl font-serif">{CONTACT.email}</div>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 rounded-full border border-brand-cream/20 flex items-center justify-center text-brand-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-brand-cream/50 mb-1">Lokalizacja</div>
                    <div className="text-2xl font-serif">{CONTACT.city}</div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-brand-cream/10 p-8 md:p-12 rounded-[50px] relative"
            >
               <h4 className="text-3xl font-serif mb-8 text-white">Mobilny salon piękna</h4>
               <p className="text-brand-cream/70 text-lg mb-8 leading-relaxed font-light">
                 Dojazd do klientek na terenie Płocka i okolic. Zapewniam cały niezbędny sprzęt i profesjonalne kosmetyki. 
                 Stwórz we własnym domu oazę relaksu.
               </p>
               <div className="flex items-center gap-4 py-6 border-t border-brand-cream/10">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-dark bg-brand-gold/30 backdrop-blur-md flex items-center justify-center overflow-hidden">
                         <img src={IMAGES[i]} alt="Client" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                    <div className="text-brand-gold">Zadowolone klientki</div>
                    <div className="text-brand-cream/50">Dołącz do ich grona</div>
                  </div>
               </div>
               
               <button 
                 onClick={() => window.location.href = `mailto:${CONTACT.email}`}
                 className="w-full py-5 bg-brand-gold text-white rounded-2xl font-semibold uppercase tracking-widest hover:bg-brand-gold/80 transition-all active:scale-95 shadow-lg shadow-brand-gold/20"
                >
                 Zapytaj o termin
               </button>
            </motion.div>
         </div>
       </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeatureSection />
        <ServicesGrid />
        <Gallery />
        <Contact />
      </main>
      <footer className="py-12 bg-brand-cream text-center border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <span className="font-serif text-2xl font-semibold text-brand-dark">Iwona Mirzejewska</span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold mt-1">Gabinet Kosmetyczny</p>
          </div>
          <div className="flex justify-center gap-6 mb-8">
             <a 
               href="https://www.facebook.com/profile.php?id=100063586362941" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all"
               id="facebook-link"
             >
                <Facebook size={20} />
             </a>
             <a 
               href={`mailto:${CONTACT.email}`}
               className="w-10 h-10 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all"
               id="mail-link"
             >
                <Mail size={20} />
             </a>
          </div>
          <p className="text-brand-muted text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Iwona Mirzejewska.
          </p>
        </div>
      </footer>
    </div>
  );
}


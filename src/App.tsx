/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  ShieldCheck,
  Zap,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Campus', href: '#campus' },
    { name: 'Inscripciones', href: '#inscripciones' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <div className="h-16 flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/MTWFmhd3/LOGO-MAGIC.jpg" 
                alt="Magic Sport Events Logo" 
                className="h-full w-auto rounded-lg shadow-sm"
              />
            </div>
          </div>
          
         <div className="hidden md:block">
         <div className="ml-10 flex items-baseline space-x-8">
          {navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="text-white/80 hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
      >
        {link.name}
      </a>
    ))}
    <a
      href="https://magicsportevents.clupik.app/es"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gold hover:bg-gold-light text-navy px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
    >
      Inscríbete Ya
    </a>
  </div>
</div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy border-b border-gold/20 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white block px-3 py-4 text-base font-medium border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-3">
                <a
                  href="#inscripciones"
                  onClick={() => setIsOpen(false)}
                  className="bg-gold text-navy block text-center px-3 py-3 rounded-md text-base font-bold"
                >
                  Inscríbete Ya
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000"
          alt="Football field"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-gold uppercase bg-gold/10 border border-gold/30 rounded-full">
            Pasión por el Deporte
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-none text-center">
            MAGIC <span className="text-gold italic">SPORT</span> EVENTS
          </h1>
<p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed text-center">
  Gestión y organización de eventos deportivos.
  <br />
  <span className="block mt-2 text-white/60">
    Campus, torneos y actividades extraescolares para los campeones del mañana.
  </span>
</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#campus"
              className="w-full sm:w-auto px-10 py-4 bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Ver Campus <ChevronRight size={20} />
            </a>
            <a
              href="#servicios"
              className="w-full sm:w-auto px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              Nuestros Servicios
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold/50">
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img
                src="https://i.postimg.cc/gkJqHYdj/PHOTO-2024-11-27-15-29-21.jpg"
                alt="Equipo Magic Sport Events"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-navy font-black text-4xl">4</p>
              <p className="text-navy/70 text-xs font-bold uppercase tracking-widest">Especializados<br/>del deporte</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Sobre Nosotros</h2>
            <h3 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight">
              Profesionalidad y Pasión por el Deporte
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              <strong>Magic Sport Events, S.L.</strong> es un equipo especializado en la gestión integral de eventos, campus y actividades deportivas que diseña experiencias seguras y dinámicas para todas las entidades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-navy font-bold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div> Nuestra Identidad
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2"><span>•</span> Profesionalizar la organización deportiva.</li>
                  <li className="flex gap-2"><span>•</span> Garantizar seguridad y planificación.</li>
                  <li className="flex gap-2"><span>•</span> Gestión flexible y eficiente.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-navy font-bold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div> Qué Hacemos
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2"><span>•</span> Eventos locales y regionales.</li>
                  <li className="flex gap-2"><span>•</span> Gestión de escuelas deportivas.</li>
                  <li className="flex gap-2"><span>•</span> Diseño de campus vacacionales.</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-navy/80 italic text-sm leading-relaxed">
                "Magic Sport Events combina juventud, formación especializada y experiencia práctica para ofrecer un servicio estructurado, seguro y orientado a resultados."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="p-8 bg-white rounded-3xl shadow-xl shadow-navy/5 border border-slate-100"
  >
    <div className="w-14 h-14 bg-navy text-gold rounded-2xl flex items-center justify-center mb-6">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4 text-navy">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Lo que hacemos</h2>
          <h3 className="text-4xl md:text-5xl font-black text-navy mb-6">Nuestros Servicios</h3>
          <div className="w-20 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Trophy}
            title="Campus Deportivos"
            description="Organizamos campus en Verano, Semana Santa y Navidad para niños de 4 a 13 años, enfocados en el fútbol y la diversión multideporte."
          />
          <FeatureCard
            icon={Users}
            title="Actividades Extraescolares"
            description="Programas deportivos integrales para centros educativos, fomentando valores y hábitos saludables desde edades tempranas."
          />
          <FeatureCard
            icon={Star}
            title="Torneos de Fútbol"
            description="Gestión profesional de competiciones y torneos, cuidando cada detalle para ofrecer una experiencia competitiva de calidad."
          />
        </div>
      </div>
    </section>
  );
};

const CampusSection = () => {
  return (
    <section id="campus" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Próximos Eventos</h2>
          <h3 className="text-4xl md:text-5xl font-black text-navy mb-6">Nuestros Campus</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experiencias inolvidables diseñadas para el crecimiento deportivo y personal de los más jóvenes.
          </p>
        </div>

        <div className="space-y-20">
          {/* Campus de Pascua */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
            >
              <img
                src="https://i.postimg.cc/T1HkJ14J/a981612f-d56c-40fd-8fda-c5023cee0126.jpg"
                alt="Campus de Pascua"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-gold text-navy px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                PRÓXIMAMENTE
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-3xl font-black text-navy mb-4 uppercase tracking-tight">CAMPUS DE PASCUA DE FÚTBOL</h4>
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2 text-gold font-bold">
                  <MapPin size={20} />
                  <span>Teulada</span>
                </div>
                <div className="flex items-center gap-2 text-gold font-bold">
                  <Calendar size={20} />
                  <span>Del 7 al 10 de abril</span>
                </div>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Esta Pascua organizamos un Campus de Fútbol para niños y niñas de 4 a 13 años, donde disfrutarán de cuatro días llenos de deporte, diversión y compañerismo.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Zap, text: "Entrenamientos y partidos" },
                  { icon: Award, text: "Sesiones de pádel" },
                  { icon: Users, text: "Deportes alternativos" },
                  { icon: Trophy, text: "Retos y competiciones" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <item.icon size={18} className="text-gold" />
                    <span className="text-sm font-semibold text-navy">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-slate-600 italic border-l-4 border-gold pl-4 mb-8">
                "Nuestro objetivo es que mejoren sus habilidades deportivas, hagan nuevos amigos y vivan una experiencia inolvidable esta Pascua."
              </p>
              
              <a
             href="https://magicsportevents.clupik.app/es/24480?value=true"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-8 py-3 bg-navy text-white font-bold rounded-full hover:bg-navy/90 transition-all"
             >
             Inscribirse en Teulada <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>

          {/* Campus de Verano */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
            >
              <img
                src="https://i.postimg.cc/DyTQRqqs/Captura-de-pantalla-2026-03-12-a-las-12-34-29.png"
                alt="Campus de Verano Altea"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 bg-gold text-navy px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                EDICIÓN ALTEA
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <h4 className="text-3xl font-black text-navy mb-4 uppercase tracking-tight">CAMPUS DE VERANO DE FÚTBOL</h4>
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2 text-gold font-bold">
                  <MapPin size={20} />
                  <span>Altea</span>
                </div>
                <div className="flex items-center gap-2 text-gold font-bold">
                  <Calendar size={20} />
                  <span>Del 29 de junio al 3 de julio</span>
                </div>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Diseñado para ofrecer una experiencia deportiva de alta calidad, combinando formación técnica, metodología profesional y un entorno educativo seguro.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 bg-navy/5 rounded-lg flex items-center justify-center text-gold">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-navy">Tecnificación Profesional</h5>
                    <p className="text-sm text-slate-600">Control, pase, conducción y fundamentos tácticos con metodología avanzada.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 bg-navy/5 rounded-lg flex items-center justify-center text-gold">
                    <Users size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-navy">Grupos por Edad y Nivel</h5>
                    <p className="text-sm text-slate-600">Planificación estructurada y coherente con los objetivos formativos de cada grupo.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 bg-navy/5 rounded-lg flex items-center justify-center text-gold">
                    <Award size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-navy">Valores Integrales</h5>
                    <p className="text-sm text-slate-600">Fomentamos el compromiso, el respeto y el compañerismo en cada sesión.</p>
                  </div>
                </div>
              </div>
              
              <a
             href="https://magicsportevents.clupik.app/es/24483?value=false"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-8 py-3 bg-navy text-white font-bold rounded-full hover:bg-navy/90 transition-all"
             >
             Inscribirse en Altea <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  );
};

const Registration = () => {
  return (
    <section id="inscripciones" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-16 text-center">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-6">Únete a nosotros</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8">¿Listo para la acción?</h3>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
            No pierdas la oportunidad de formar parte de nuestros próximos eventos. Las plazas son limitadas para garantizar la mejor atención.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://magicsportevents.clupik.app/es" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-gold text-navy text-xl font-black rounded-full shadow-2xl shadow-gold/20 hover:bg-gold-light transition-all flex items-center gap-3"
            >
              REALIZAR INSCRIPCIÓN <ChevronRight size={24} />
            </motion.a>
            <p className="text-white/40 text-sm">Serás redirigido a nuestra plataforma de inscripciones segura.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <div className="h-20 flex items-center">
                <img 
                  src="https://i.postimg.cc/MTWFmhd3/LOGO-MAGIC.jpg" 
                  alt="Magic Sport Events Logo" 
                  className="h-full w-auto rounded-lg"
                />
              </div>
            </div>
            <p className="text-white/60 max-w-md mb-8">
              Líderes en la organización de eventos deportivos para jóvenes. Transformamos el deporte en una herramienta educativa y de diversión.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-white/60 hover:text-gold transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-white/60 hover:text-gold transition-colors">Servicios</a></li>
              <li><a href="#campus" className="text-white/60 hover:text-gold transition-colors">Campus</a></li>
              <li><a href="#inscripciones" className="text-white/60 hover:text-gold transition-colors">Inscripciones</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={18} className="text-gold" />
                <span>+34 653 232 417</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={18} className="text-gold" />
                <span>magicsportevents@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MapPin size={18} className="text-gold" />
                <span>Alicante, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Magic Sport Events. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <CampusSection />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

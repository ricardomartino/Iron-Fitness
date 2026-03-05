import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Zap, 
  Users, 
  Clock, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu, 
  X,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Planos', href: '#plans' },
    { name: 'Modalidades', href: '#services' },
    { name: 'Sobre', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand p-1.5 rounded-lg">
            <Dumbbell className="text-zinc-950 w-6 h-6" />
          </div>
          <span className="font-display text-2xl tracking-tighter uppercase italic">Iron Pulse</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-brand transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand hover:bg-brand-dark text-zinc-950 px-6 py-2 rounded-full font-bold text-sm transition-transform active:scale-95 uppercase tracking-tighter">
            Começar Agora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold hover:text-brand uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand text-zinc-950 w-full py-3 rounded-xl font-bold uppercase">
              Começar Agora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-brand/10 border border-brand/20 text-brand rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
              A Melhor Experiência Fitness
            </span>
            <h1 className="font-display text-7xl md:text-9xl uppercase leading-[0.85] italic tracking-tighter mb-8">
              Supere Seus <br />
              <span className="text-brand">Limites</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Transforme seu corpo e sua mente com equipamentos de ponta, 
              treinadores certificados e uma comunidade que te impulsiona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand hover:bg-brand-dark text-zinc-950 px-8 py-4 rounded-full font-black text-lg flex items-center justify-center gap-2 transition-all hover:gap-4 group">
                MATRICULE-SE JÁ <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-zinc-700 hover:bg-zinc-800 text-zinc-100 px-8 py-4 rounded-full font-bold text-lg transition-colors">
                VER PLANOS
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute -bottom-10 -right-20 hidden lg:block select-none opacity-5 pointer-events-none">
        <span className="font-display text-[20rem] uppercase italic leading-none">PULSE</span>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Equipamentos', value: '150+' },
    { label: 'Alunos Ativos', value: '2k+' },
    { label: 'Treinadores', value: '25+' },
    { label: 'Aulas/Semana', value: '40+' },
  ];

  return (
    <section className="py-12 border-y border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-brand mb-1 italic">{stat.value}</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Musculação',
      desc: 'Área completa com pesos livres e máquinas de última geração.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop',
      icon: <Dumbbell className="w-6 h-6" />
    },
    {
      title: 'Cross Training',
      desc: 'Treinos de alta intensidade para quem busca performance extrema.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Aulas Coletivas',
      desc: 'Yoga, Pilates, Zumba e muito mais com os melhores instrutores.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl md:text-7xl uppercase italic leading-none mb-6">
              Nossas <span className="text-brand">Modalidades</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Oferecemos uma variedade de treinos adaptados para todos os níveis, 
              do iniciante ao atleta profissional.
            </p>
          </div>
          <button className="text-brand font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest text-sm">
            Ver todas as aulas <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] overflow-hidden rounded-3xl"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-brand w-12 h-12 rounded-xl flex items-center justify-center text-zinc-950 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-display text-3xl uppercase italic mb-2">{service.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '89',
      features: ['Acesso à musculação', 'Horário livre', 'App de treino', 'Área de cardio'],
      recommended: false
    },
    {
      name: 'Black',
      price: '129',
      features: ['Tudo do Basic', 'Aulas coletivas', 'Acesso a outras unidades', 'Leve um amigo 4x/mês', 'Camiseta exclusiva'],
      recommended: true
    },
    {
      name: 'Elite',
      price: '199',
      features: ['Tudo do Black', 'Personal Trainer 1x/semana', 'Avaliação física mensal', 'Suplementação inclusa', 'Toalha e armário'],
      recommended: false
    }
  ];

  return (
    <section id="plans" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl uppercase italic mb-6">Escolha seu <span className="text-brand">Plano</span></h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Planos flexíveis que cabem no seu bolso e atendem seus objetivos. 
            Sem taxas escondidas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl border ${plan.recommended ? 'border-brand bg-zinc-900 shadow-2xl shadow-brand/10' : 'border-zinc-800 bg-zinc-950/50'} flex flex-col`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-zinc-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter">
                  Mais Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-zinc-400 uppercase tracking-widest text-sm font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-zinc-400 text-2xl font-bold">R$</span>
                  <span className="font-display text-6xl italic">{plan.price}</span>
                  <span className="text-zinc-500 font-medium">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <CheckCircle2 className={`w-5 h-5 ${plan.recommended ? 'text-brand' : 'text-zinc-600'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.recommended ? 'bg-brand text-zinc-950 hover:bg-brand-dark' : 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700'}`}>
                ASSINAR AGORA
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand p-1.5 rounded-lg">
                <Dumbbell className="text-zinc-950 w-6 h-6" />
              </div>
              <span className="font-display text-3xl tracking-tighter uppercase italic">Iron Pulse</span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-8">
              Nossa missão é proporcionar o melhor ambiente para sua evolução física e mental. 
              Junte-se à elite do fitness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-brand hover:text-zinc-950 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-brand hover:text-zinc-950 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-brand hover:text-zinc-950 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-brand transition-colors">Início</a></li>
              <li><a href="#plans" className="hover:text-brand transition-colors">Planos</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Modalidades</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Nossa Equipe</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Contato</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand shrink-0" />
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand shrink-0" />
                <span>contato@ironpulse.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand shrink-0" />
                <span>Seg-Sex: 05h - 23h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-xs uppercase tracking-widest font-bold">
          <p>© 2024 Iron Pulse Fitness. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400">Privacidade</a>
            <a href="#" className="hover:text-zinc-400">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        
        {/* Call to Action Section */}
        <section className="py-24 bg-brand relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="grid grid-cols-6 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-zinc-950 h-full" />
              ))}
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="font-display text-5xl md:text-8xl text-zinc-950 uppercase italic leading-none mb-8">
              Pronto para sua <br /> melhor versão?
            </h2>
            <p className="text-zinc-900/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
              Não deixe para amanhã o treino que você pode começar hoje. 
              Ganhe 7 dias grátis na sua primeira visita!
            </p>
            <button className="bg-zinc-950 text-brand px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-zinc-950/20">
              RESGATAR 7 DIAS GRÁTIS
            </button>
          </div>
        </section>

        <Pricing />
        
        {/* Testimonials */}
        <section className="py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-5xl md:text-7xl uppercase italic mb-8">O que dizem <br /><span className="text-brand">nossos atletas</span></h2>
                <div className="space-y-8">
                  <div className="bg-zinc-900 p-8 rounded-3xl border-l-4 border-brand">
                    <p className="text-zinc-300 italic mb-6 text-lg">
                      "A Iron Pulse mudou minha vida. O ambiente é motivador e os equipamentos são os melhores que já usei. Em 6 meses tive resultados que não tive em anos."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden">
                        <img src="https://i.pravatar.cc/150?u=1" alt="User" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <div className="font-bold text-zinc-100">Ricardo Silva</div>
                        <div className="text-zinc-500 text-xs uppercase tracking-widest">Aluno há 2 anos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Training" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand p-8 rounded-3xl hidden md:block">
                  <div className="font-display text-5xl text-zinc-950 italic leading-none">98%</div>
                  <div className="text-zinc-900 text-xs font-black uppercase tracking-tighter">Satisfação dos Alunos</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

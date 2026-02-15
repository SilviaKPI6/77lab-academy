const { useState, useEffect } = React;
const { BookOpen, Brain, Share2, Globe, TrendingUp, Users, Sparkles, MessageCircle, Award, Search, ChevronRight, Star, Zap, Target, Lightbulb, CheckCircle, ArrowRight, Menu, X, Play, ArrowLeft, Lock, Mail, Check, Database, PieChart, Eye, Megaphone, ShoppingCart, Video, Handshake, Rocket, BarChart, Heart } = lucide;

// Aggiungi Lucide icons
const script = document.createElement('script');
script.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.js';
document.head.appendChild(script);

const MarketingAcademy = () => {
  const [language, setLanguage] = useState('it');
  const [currentView, setCurrentView] = useState('home');
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const translations = {
    it: {
      hero: {
        title: "77LAB Marketing Academy",
        subtitle: "La tua risorsa completa per diventare un Marketing Expert",
        cta: "Inizia il Percorso"
      },
      nav: {
        home: "Home",
        phases: "Percorso",
        silvia: "Silvia's Corner",
        ask: "Chiedi a Silvia"
      }
    },
    en: {
      hero: {
        title: "77LAB Marketing Academy",
        subtitle: "Your complete resource to become a Marketing Expert",
        cta: "Start Learning"
      },
      nav: {
        home: "Home",
        phases: "Learning Path",
        silvia: "Silvia's Corner",
        ask: "Ask Silvia"
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">77</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">77LAB</div>
                <div className="text-xs text-gray-500">Marketing Academy</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {t.hero.title}
          </h1>
          <p className="text-2xl text-gray-700 font-semibold mb-6">
            {language === 'it' ? 'con Silvia Ciampa' : 'with Silvia Ciampa'}
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg">
            {t.hero.cta}
          </button>
        </div>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MarketingAcademy />);
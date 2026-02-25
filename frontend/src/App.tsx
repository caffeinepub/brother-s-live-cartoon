import HeroBanner from './components/HeroBanner';
import BusinessInfo from './components/BusinessInfo';
import CharacterShowcase from './components/CharacterShowcase';
import ServiceHighlights from './components/ServiceHighlights';
import ContactButtons from './components/ContactButtons';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center tracking-tight">
            BROTHER'S LIVE CARTOON
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <HeroBanner />
        <BusinessInfo />
        <CharacterShowcase />
        <ServiceHighlights />
        <ContactButtons />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE_NUMBER = '9427065911';
const WHATSAPP_MESSAGE = "Hello BROTHER'S LIVE CARTOON, I want to book a cartoon character.";

export default function ContactButtons() {
  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/91${PHONE_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Ready to Book?</h2>
          <p className="text-muted-foreground text-lg">
            Contact us now to make your event unforgettable!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleCall}
            size="lg"
            className="bg-success hover:bg-success/90 text-white font-semibold text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>

          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Book on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function BusinessInfo() {
  return (
    <section className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-foreground">Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Raval Chakala, Jaghnath Bhaghol,<br />
                  Umreth - 388220,<br />
                  Dist - Anand
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent/20 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-foreground">Contact</h3>
                <p className="text-muted-foreground text-lg">
                  MO: <span className="font-semibold text-foreground">9427065911</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

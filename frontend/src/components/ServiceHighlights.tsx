import { CheckCircle2, PartyPopper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const highlights = [
  'High Quality Costumes',
  'Energetic Performers',
  'Reasonable Rates'
];

export default function ServiceHighlights() {
  return (
    <section className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-accent/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <PartyPopper className="w-6 h-6 text-accent" />
              Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Birthday Party, Wedding Entry અને અન્ય Events માટે ઉપલબ્ધ.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              Why Choose Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

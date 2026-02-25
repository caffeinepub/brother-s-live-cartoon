import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const characters = [
  {
    name: 'Gorilla',
    image: '/assets/generated/gorilla.dim_400x400.png',
    emoji: '🦍'
  },
  {
    name: 'Red Teddy',
    image: '/assets/generated/red-teddy.dim_400x400.png',
    emoji: '🧸'
  },
  {
    name: 'Yellow Teddy',
    image: '/assets/generated/yellow-teddy.dim_400x400.png',
    emoji: '🧸'
  },
  {
    name: 'Doraemon',
    image: '/assets/generated/doraemon.dim_400x400.png',
    emoji: '🤖'
  },
  {
    name: 'Mickey Mouse',
    image: '/assets/generated/mickey-mouse.dim_400x400.png',
    emoji: '🐭'
  },
  {
    name: 'Motu-Patlu',
    image: '/assets/generated/motu-patlu.dim_400x400.png',
    emoji: '👥'
  }
];

export default function CharacterShowcase() {
  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
          <span className="text-4xl">🎭</span>
          Available Characters
          <span className="text-4xl">🎭</span>
        </h2>
        <p className="text-muted-foreground text-lg">Choose your favorite character for your special event!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {characters.map((character) => (
          <Card
            key={character.name}
            className="group hover:scale-105 transition-transform duration-300 border-2 border-accent/20 hover:border-accent shadow-lg hover:shadow-2xl"
          >
            <CardContent className="p-4 space-y-3">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/50">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="text-sm font-semibold px-3 py-1">
                  {character.emoji} {character.name}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

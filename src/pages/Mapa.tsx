import { useState } from "react";
import { MapPin, Navigation, Info, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const pointsOfInterest = [
  {
    id: 1,
    name: "Pantanal Matogrossense",
    type: "Bioma",
    description: "A maior planície alagável do mundo, lar de onças, jacarés e centenas de espécies de aves.",
    coordinates: { lat: -17.5, lng: -57.4 },
  },
  {
    id: 2,
    name: "Chapada dos Guimarães",
    type: "Parque Nacional",
    description: "Cachoeiras espetaculares, formações rochosas e o centro geodésico da América do Sul.",
    coordinates: { lat: -15.4, lng: -55.7 },
  },
  {
    id: 3,
    name: "Nobres",
    type: "Destino Ecoturístico",
    description: "Águas cristalinas perfeitas para flutuação e mergulho em rios de água doce.",
    coordinates: { lat: -14.7, lng: -56.3 },
  },
  {
    id: 4,
    name: "Alta Floresta",
    type: "Portal da Amazônia",
    description: "Observação de aves, pesca esportiva e expedições na floresta amazônica.",
    coordinates: { lat: -9.8, lng: -56.0 },
  },
  {
    id: 5,
    name: "Cuiabá",
    type: "Capital",
    description: "Cidade histórica com arquitetura colonial, gastronomia típica e vida cultural.",
    coordinates: { lat: -15.6, lng: -56.0 },
  },
  {
    id: 6,
    name: "Rio Araguaia",
    type: "Destino de Pesca",
    description: "Praias fluviais, pesca esportiva e o famoso Festival de Praia.",
    coordinates: { lat: -15.8, lng: -51.8 },
  },
  {
    id: 7,
    name: "Cáceres",
    type: "Cidade Histórica",
    description: "Capital da pesca, Festival Internacional de Pesca e patrimônio histórico.",
    coordinates: { lat: -16.0, lng: -57.6 },
  },
  {
    id: 8,
    name: "Transpantaneira",
    type: "Estrada-Parque",
    description: "147km de estrada com 122 pontes de madeira, ideal para observação de fauna.",
    coordinates: { lat: -16.5, lng: -56.8 },
  },
];

const Mapa = () => {
  const [selectedPoint, setSelectedPoint] = useState<typeof pointsOfInterest[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Mapa</span> Interativo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore os pontos turísticos de Mato Grosso e planeje sua aventura
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Points of Interest List */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-accent" />
                    Pontos de Interesse
                  </h2>
                </div>
                <ScrollArea className="h-[500px] lg:h-[600px]">
                  <div className="p-2">
                    {pointsOfInterest.map((point) => (
                      <button
                        key={point.id}
                        onClick={() => setSelectedPoint(point)}
                        className={`w-full p-4 rounded-xl text-left transition-all mb-2 ${
                          selectedPoint?.id === point.id
                            ? "bg-accent/20 border border-accent/50"
                            : "bg-muted/30 hover:bg-muted/50 border border-transparent"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <MapPin className={`w-4 h-4 ${
                                selectedPoint?.id === point.id ? "text-accent" : "text-muted-foreground"
                              }`} />
                              <span className="font-semibold text-foreground">{point.name}</span>
                            </div>
                            <span className="text-xs text-accent font-medium">{point.type}</span>
                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                              {point.description}
                            </p>
                          </div>
                          <ChevronRight className={`w-5 h-5 mt-1 transition-transform ${
                            selectedPoint?.id === point.id ? "text-accent rotate-90" : "text-muted-foreground"
                          }`} />
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-[400px] lg:h-[680px] relative">
                {/* Stylized Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20">
                  {/* Grid Pattern */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                        linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px'
                    }}
                  />
                  
                  {/* Map Markers */}
                  {pointsOfInterest.map((point, index) => (
                    <button
                      key={point.id}
                      onClick={() => setSelectedPoint(point)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        selectedPoint?.id === point.id ? "scale-125 z-10" : "hover:scale-110"
                      }`}
                      style={{
                        top: `${20 + (index % 4) * 20}%`,
                        left: `${15 + (index % 5) * 18}%`,
                      }}
                    >
                      <div className={`relative ${
                        selectedPoint?.id === point.id ? "animate-pulse" : ""
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          selectedPoint?.id === point.id 
                            ? "bg-accent shadow-lg" 
                            : "bg-primary/80"
                        }`}>
                          <MapPin className="w-4 h-4 text-primary-foreground" />
                        </div>
                        {selectedPoint?.id === point.id && (
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rotate-45" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected Point Info */}
                {selectedPoint && (
                  <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-md rounded-xl p-4 border border-border animate-fade-up">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-lg">{selectedPoint.name}</h3>
                        <span className="text-accent text-sm font-medium">{selectedPoint.type}</span>
                        <p className="text-muted-foreground text-sm mt-2">{selectedPoint.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="reserve" size="sm" className="flex-1">
                        Ver Detalhes
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Navigation className="w-4 h-4 mr-2" />
                        Como Chegar
                      </Button>
                    </div>
                  </div>
                )}

                {/* Map Legend */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md rounded-lg p-3 border border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Info className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">Clique nos marcadores</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mapa;

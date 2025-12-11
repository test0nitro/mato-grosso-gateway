import { useState, useEffect } from "react";
import { MapPin, Navigation, Info, ChevronRight } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with Vite
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const selectedIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const pointsOfInterest = [
  {
    id: 1,
    name: "Cuiabá",
    type: "Capital & Portal do Pantanal",
    description: "A capital do estado, porta de entrada para o Pantanal e repleta de história, cultura e gastronomia típica.",
    coordinates: { lat: -15.60, lng: -56.09 },
  },
  {
    id: 2,
    name: "Chapada dos Guimarães",
    type: "Cachoeiras e Vistas",
    description: "Paraíso de cachoeiras monumentais, trilhas ecológicas e o famoso Mirante do centro geodésico da América do Sul.",
    coordinates: { lat: -15.46, lng: -55.75 },
  },
  {
    id: 3,
    name: "Poconé",
    type: "Transpantaneira",
    description: "Início da famosa Estrada Transpantaneira, com 147km e 122 pontes de madeira, ideal para observação de fauna.",
    coordinates: { lat: -16.26, lng: -56.62 },
  },
  {
    id: 4,
    name: "Alta Floresta",
    type: "Amazônia Meridional",
    description: "Capital do birdwatching no Brasil, portal da Amazônia com floresta densa e biodiversidade incomparável.",
    coordinates: { lat: -9.87, lng: -56.08 },
  },
  {
    id: 5,
    name: "Barra do Garças",
    type: "Serra do Roncador / Araguaia",
    description: "Portal do Araguaia com águas termais, o Vale dos Sonhos e praias fluviais espetaculares na seca.",
    coordinates: { lat: -15.89, lng: -52.26 },
  },
  {
    id: 6,
    name: "Nobres",
    type: "Flutuação em Águas Cristalinas",
    description: "Destino de ecoturismo com rios de água cristalina perfeitos para flutuação e mergulho.",
    coordinates: { lat: -14.72, lng: -56.33 },
  },
  {
    id: 7,
    name: "Cáceres",
    type: "Capital Nacional da Pesca",
    description: "Cidade histórica às margens do Rio Paraguai, famosa pelo Festival Internacional de Pesca.",
    coordinates: { lat: -16.07, lng: -57.68 },
  },
];

// Component to handle map fly to selected point
const FlyToLocation = ({ coordinates }: { coordinates: { lat: number; lng: number } | null }) => {
  const map = useMap();
  
  useEffect(() => {
    if (coordinates) {
      map.flyTo([coordinates.lat, coordinates.lng], 10, {
        duration: 1.5,
      });
    }
  }, [coordinates, map]);
  
  return null;
};

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

            {/* Interactive Map */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-[400px] lg:h-[680px] relative">
                <MapContainer
                  center={[-12.64, -55.42]}
                  zoom={6}
                  className="h-full w-full z-0"
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <FlyToLocation coordinates={selectedPoint?.coordinates || null} />
                  {pointsOfInterest.map((point) => (
                    <Marker
                      key={point.id}
                      position={[point.coordinates.lat, point.coordinates.lng]}
                      icon={selectedPoint?.id === point.id ? selectedIcon : customIcon}
                      eventHandlers={{
                        click: () => setSelectedPoint(point),
                      }}
                    >
                      <Popup>
                        <div className="p-2 min-w-[200px]">
                          <h3 className="font-bold text-foreground text-base mb-1">{point.name}</h3>
                          <p className="text-accent text-xs font-medium mb-2">{point.type}</p>
                          <p className="text-muted-foreground text-sm">{point.description}</p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>

                {/* Map Legend */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md rounded-lg p-3 border border-border z-[1000]">
                  <div className="flex items-center gap-2 text-sm">
                    <Info className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">Clique nos marcadores</span>
                  </div>
                </div>

                {/* Selected Point Info */}
                {selectedPoint && (
                  <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-md rounded-xl p-4 border border-border animate-fade-up z-[1000]">
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
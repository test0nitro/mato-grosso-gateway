import { useState } from "react";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const cities = [
  {
    id: "cuiaba",
    name: "Cuiabá",
    description: "A capital do estado, porta de entrada para o Pantanal e repleta de história e cultura.",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&h=400&fit=crop",
    region: "Centro",
  },
  {
    id: "chapada-dos-guimaraes",
    name: "Chapada dos Guimarães",
    description: "Paraíso de cachoeiras, trilhas e paisagens deslumbrantes no coração do Brasil.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    region: "Cerrado",
  },
  {
    id: "nobres",
    name: "Nobres",
    description: "Águas cristalinas e flutuação em rios de beleza incomparável.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
    region: "Cerrado",
  },
  {
    id: "alta-floresta",
    name: "Alta Floresta",
    description: "Portal da Amazônia com biodiversidade exuberante e ecoturismo de primeira.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    region: "Amazônia",
  },
  {
    id: "pocone",
    name: "Poconé",
    description: "Início da Transpantaneira, onde a aventura no Pantanal começa.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
    region: "Pantanal",
  },
  {
    id: "barra-do-garcas",
    name: "Barra do Garças",
    description: "Águas termais e o majestoso Vale dos Sonhos às margens do Araguaia.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    region: "Araguaia",
  },
  {
    id: "caceres",
    name: "Cáceres",
    description: "Cidade histórica às margens do Rio Paraguai, capital da pesca esportiva.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
    region: "Pantanal",
  },
  {
    id: "sinop",
    name: "Sinop",
    description: "Polo econômico do norte com natureza preservada e infraestrutura moderna.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
    region: "Amazônia",
  },
];

const Cidades = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCities = cities.filter(
    (city) =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Cidades</span> de Mato Grosso
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Descubra os destinos mais incríveis do estado, desde capitais vibrantes até vilarejos encantadores cercados pela natureza.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar cidade ou região..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 bg-card border-border text-lg"
            />
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCities.map((city) => (
              <div
                key={city.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                    {city.region}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <h3 className="text-xl font-bold text-foreground">{city.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {city.description}
                  </p>
                  <Button variant="ghost" className="w-full group/btn text-accent hover:text-accent hover:bg-accent/10">
                    Conheça Mais
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredCities.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhuma cidade encontrada para "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cidades;

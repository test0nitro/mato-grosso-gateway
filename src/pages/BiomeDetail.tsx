import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Thermometer, Calendar, Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import biomePantanal from "@/assets/biome-pantanal.jpg";
import biomeCerrado from "@/assets/biome-cerrado.jpg";
import biomeAmazonia from "@/assets/biome-amazonia.jpg";
import biomeAraguaia from "@/assets/biome-araguaia.jpg";

const biomesData: Record<string, {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  animals: { name: string; image: string }[];
  cities: { name: string; description: string }[];
  climate: string;
  bestTime: string;
  highlights: string[];
}> = {
  pantanal: {
    name: "Pantanal",
    subtitle: "A Maior Planície Alagável do Mundo",
    description: "O Pantanal mato-grossense é um santuário de vida selvagem reconhecido pela UNESCO como Patrimônio Natural da Humanidade. Com mais de 140 mil km², abriga a maior concentração de fauna das Américas, incluindo a majestosa onça-pintada, jacarés, capivaras e mais de 650 espécies de aves.",
    image: biomePantanal,
    animals: [
      { name: "Onça-pintada", image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=300&h=200&fit=crop" },
      { name: "Jacaré-do-pantanal", image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=300&h=200&fit=crop" },
      { name: "Tuiuiú", image: "https://images.unsplash.com/photo-1555169062-013468b47731?w=300&h=200&fit=crop" },
      { name: "Arara-azul", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&h=200&fit=crop" },
    ],
    cities: [
      { name: "Poconé", description: "Porta de entrada da Transpantaneira" },
      { name: "Cáceres", description: "Capital nacional da pesca" },
      { name: "Barão de Melgaço", description: "Acesso ao SESC Pantanal" },
    ],
    climate: "Tropical com estação seca",
    bestTime: "Maio a Setembro",
    highlights: ["Safari fotográfico", "Pesca esportiva", "Passeios de barco", "Observação de aves"],
  },
  cerrado: {
    name: "Cerrado",
    subtitle: "Berço das Águas do Brasil",
    description: "O Cerrado mato-grossense guarda tesouros como a Chapada dos Guimarães, com suas cachoeiras monumentais e formações rochosas milenares. É considerado a savana mais biodiversa do planeta, com flora e fauna únicas adaptadas ao clima seco.",
    image: biomeCerrado,
    animals: [
      { name: "Lobo-guará", image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=300&h=200&fit=crop" },
      { name: "Tamanduá-bandeira", image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=300&h=200&fit=crop" },
      { name: "Ema", image: "https://images.unsplash.com/photo-1557401622-cfc0aa5d146c?w=300&h=200&fit=crop" },
      { name: "Seriema", image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=300&h=200&fit=crop" },
    ],
    cities: [
      { name: "Chapada dos Guimarães", description: "Cachoeiras e mirantes" },
      { name: "Nobres", description: "Flutuação em águas cristalinas" },
      { name: "Cuiabá", description: "Capital e centro cultural" },
    ],
    climate: "Tropical com duas estações definidas",
    bestTime: "Abril a Outubro",
    highlights: ["Cachoeiras", "Trilhas ecológicas", "Flutuação", "Rapel e escalada"],
  },
  amazonia: {
    name: "Amazônia",
    subtitle: "O Pulmão do Mundo",
    description: "A porção amazônica de Mato Grosso oferece experiências únicas de ecoturismo, com rios imensos, floresta densa e uma biodiversidade incomparável. A região de Alta Floresta é mundialmente conhecida para observação de aves e expedições científicas.",
    image: biomeAmazonia,
    animals: [
      { name: "Harpia", image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=300&h=200&fit=crop" },
      { name: "Boto-cor-de-rosa", image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=300&h=200&fit=crop" },
      { name: "Macaco-aranha", image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=300&h=200&fit=crop" },
      { name: "Sucuri", image: "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=300&h=200&fit=crop" },
    ],
    cities: [
      { name: "Alta Floresta", description: "Capital do birdwatching" },
      { name: "Sinop", description: "Polo econômico do norte" },
      { name: "Juara", description: "Portal do Rio Arinos" },
    ],
    climate: "Equatorial úmido",
    bestTime: "Junho a Outubro",
    highlights: ["Observação de aves", "Expedições na selva", "Pesca esportiva", "Trilhas na floresta"],
  },
  araguaia: {
    name: "Araguaia",
    subtitle: "O Vale das Praias Fluviais",
    description: "O Rio Araguaia forma uma das maiores praias fluviais do Brasil durante a seca, criando um cenário paradisíaco. A região é famosa pela pesca esportiva, festivais de praia e o contato com comunidades ribeirinhas tradicionais.",
    image: biomeAraguaia,
    animals: [
      { name: "Tucunaré", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop" },
      { name: "Pirarucu", image: "https://images.unsplash.com/photo-1559253254-0ac8d8d310cf?w=300&h=200&fit=crop" },
      { name: "Tartaruga-da-amazônia", image: "https://images.unsplash.com/photo-1559253254-0ac8d8d310cf?w=300&h=200&fit=crop" },
      { name: "Garça-real", image: "https://images.unsplash.com/photo-1590161181804-4e01a4295c1c?w=300&h=200&fit=crop" },
    ],
    cities: [
      { name: "Barra do Garças", description: "Portal do Araguaia" },
      { name: "São Félix do Araguaia", description: "Praias e pesca" },
      { name: "Luciara", description: "Tranquilidade às margens do rio" },
    ],
    climate: "Tropical com praias na seca",
    bestTime: "Julho a Setembro",
    highlights: ["Praias fluviais", "Pesca esportiva", "Festival de Praia", "Esportes náuticos"],
  },
};

const BiomeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const biome = id ? biomesData[id] : null;

  if (!biome) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Bioma não encontrado</h1>
          <p className="text-muted-foreground mb-8">O bioma que você procura não existe.</p>
          <Link to="/">
            <Button variant="reserve">Voltar para Início</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={biome.image}
          alt={biome.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar para Início
            </Link>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              <span className="gradient-text">{biome.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl">
              {biome.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Thermometer className="w-5 h-5 text-accent" />
              <span>{biome.climate}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-accent" />
              <span>Melhor época: {biome.bestTime}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Camera className="w-5 h-5 text-accent" />
              <span>{biome.highlights.length} atividades principais</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">Sobre o Bioma</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{biome.description}</p>
          </div>

          {/* Highlights */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-foreground mb-6">Principais Atividades</h3>
            <div className="flex flex-wrap gap-3">
              {biome.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-5 py-2.5 bg-accent/20 text-accent font-medium rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animals Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Principais Animais</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {biome.animals.map((animal) => (
              <div
                key={animal.name}
                className="group relative rounded-2xl overflow-hidden aspect-[3/2]"
              >
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-foreground font-semibold">{animal.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Melhores Cidades para Visitar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {biome.cities.map((city) => (
              <div
                key={city.name}
                className="p-6 bg-card rounded-2xl border border-border hover-lift"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold text-foreground">{city.name}</h3>
                </div>
                <p className="text-muted-foreground">{city.description}</p>
                <Link to="/cidades">
                  <Button variant="ghost" className="mt-4 text-accent hover:text-accent hover:bg-accent/10">
                    Ver detalhes →
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pronto para explorar o {biome.name}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Entre em contato com nossa equipe e planeje sua viagem inesquecível
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="reserve" size="lg">
              Fazer Reserva
            </Button>
            <Link to="/contato">
              <Button variant="outline" size="lg">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BiomeDetail;

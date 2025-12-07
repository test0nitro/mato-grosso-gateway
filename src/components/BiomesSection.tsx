import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import biomePantanal from "@/assets/biome-pantanal.jpg";
import biomeCerrado from "@/assets/biome-cerrado.jpg";
import biomeAmazonia from "@/assets/biome-amazonia.jpg";
import biomeAraguaia from "@/assets/biome-araguaia.jpg";

const biomes = [
  {
    id: "pantanal",
    name: "Pantanal",
    description: "A maior planície alagada do mundo, lar de onças e aves exóticas.",
    image: biomePantanal,
  },
  {
    id: "cerrado",
    name: "Cerrado",
    description: "Chapadas, cachoeiras e o berço das águas brasileiras.",
    image: biomeCerrado,
  },
  {
    id: "amazonia",
    name: "Amazônia",
    description: "Floresta densa, rios imensos e biodiversidade única.",
    image: biomeAmazonia,
  },
  {
    id: "araguaia",
    name: "Araguaia",
    description: "Praias fluviais paradisíacas e águas cristalinas.",
    image: biomeAraguaia,
  },
];

const BiomesSection = () => {
  return (
    <section id="biomas" className="py-20 md:py-32 bg-gradient-to-b from-background to-forest-dark/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Explore nossos biomas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Biomas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mato Grosso é o único estado brasileiro que abriga quatro biomas distintos, 
            oferecendo experiências únicas de ecoturismo.
          </p>
        </div>

        {/* Biomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {biomes.map((biome, index) => (
            <Link
              key={biome.id}
              to={`/biomas/${biome.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={biome.image}
                alt={biome.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    {biome.name}
                    <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {biome.description}
                  </p>
                </div>
                
                {/* View More Link */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Ver Mais
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiomesSection;

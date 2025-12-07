import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pantanal.jpg";

const Hero = () => {
  const stats = [
    { value: "4", label: "BIOMAS ÚNICOS" },
    { value: "27", label: "DESTINOS" },
    { value: "42+", label: "ATRATIVOS" },
    { value: "100%", label: "SUSTENTÁVEL" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pantanal landscape at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Turismo Sustentável</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Descubra{" "}
            <span className="gradient-text">Mato Grosso</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Explore quatro biomas únicos em uma jornada de conexão com a natureza. 
            Turismo responsável que preserva enquanto encanta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="hero" size="xl" className="group">
              EXPLORAR DESTINOS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <MapPin className="w-5 h-5" />
              VER MAPA
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-border/30 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-muted-foreground tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

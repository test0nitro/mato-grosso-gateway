import { useState } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  const [origin, setOrigin] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ origin, date, people });
  };

  return (
    <div className="relative z-10 -mt-16 mb-16">
      <div className="container mx-auto px-4">
        <form
          onSubmit={handleSearch}
          className="glass-card rounded-2xl p-4 md:p-6 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Origin */}
            <div className="relative">
              <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Cidade de Origem
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                <Input
                  type="text"
                  placeholder="De onde você vem?"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="pl-11 h-12 bg-muted/50 border-border/50 focus:border-accent"
                />
              </div>
            </div>

            {/* Date */}
            <div className="relative">
              <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Data da Visita
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-11 h-12 bg-muted/50 border-border/50 focus:border-accent"
                />
              </div>
            </div>

            {/* People */}
            <div className="relative">
              <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                Número de Pessoas
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                <Input
                  type="number"
                  placeholder="Quantos viajantes?"
                  min="1"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="pl-11 h-12 bg-muted/50 border-border/50 focus:border-accent"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button
                type="submit"
                variant="hero"
                className="w-full h-12"
              >
                <Search className="w-5 h-5" />
                Buscar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

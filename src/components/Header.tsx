import { useState, useEffect } from "react";
import { Leaf, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ReservationForm from "./ReservationForm";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Cidades", href: "#cidades" },
    { name: "Mapa", href: "#mapa" },
    { name: "Galeria", href: "#galeria" },
    { name: "Blog", href: "#blog" },
    { name: "Contato", href: "#contato" },
  ];

  const biomasDropdown = [
    { name: "Pantanal", href: "#pantanal" },
    { name: "Cerrado", href: "#cerrado" },
    { name: "Amazônia", href: "#amazonia" },
    { name: "Araguaia", href: "#araguaia" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <Leaf className="w-5 h-5 text-accent" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Turismo<span className="text-accent">MT</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              Início
            </a>

            {/* Biomas Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors flex items-center gap-1">
                Biomas <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border">
                {biomasDropdown.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <a href={item.href} className="cursor-pointer">
                      {item.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden md:block text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              Entrar / Cadastrar
            </a>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="reserve" className="hidden sm:flex">
                  RESERVAR
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Faça sua Reserva</DialogTitle>
                </DialogHeader>
                <ReservationForm />
              </DialogContent>
            </Dialog>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-up">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-foreground/80 hover:text-accent hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground">Biomas</div>
              {biomasDropdown.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-8 py-2 text-foreground/70 hover:text-accent hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="reserve" className="mx-4 mt-4">
                    RESERVAR
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Faça sua Reserva</DialogTitle>
                  </DialogHeader>
                  <ReservationForm />
                </DialogContent>
              </Dialog>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

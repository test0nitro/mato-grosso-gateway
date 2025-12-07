import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Cidades", href: "/cidades" },
    { name: "Mapa", href: "/mapa" },
    { name: "Galeria", href: "/galeria" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ];

  const biomasDropdown = [
    { name: "Pantanal", href: "/biomas/pantanal" },
    { name: "Cerrado", href: "/biomas/cerrado" },
    { name: "Amazônia", href: "/biomas/amazonia" },
    { name: "Araguaia", href: "/biomas/araguaia" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

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
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <Leaf className="w-5 h-5 text-accent" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Turismo<span className="text-accent">MT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive("/") ? "text-accent" : "text-foreground/80 hover:text-accent"
              }`}
            >
              Início
            </Link>

            {/* Biomas Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                location.pathname.startsWith("/biomas") ? "text-accent" : "text-foreground/80 hover:text-accent"
              }`}>
                Biomas <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border">
                {biomasDropdown.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.href} className="cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href) ? "text-accent" : "text-foreground/80 hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/contato"
              className="hidden md:block text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              Entrar / Cadastrar
            </Link>

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
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.href) 
                      ? "text-accent bg-muted/50" 
                      : "text-foreground/80 hover:text-accent hover:bg-muted/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground">Biomas</div>
              {biomasDropdown.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-8 py-2 rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? "text-accent bg-muted/50"
                      : "text-foreground/70 hover:text-accent hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                </Link>
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

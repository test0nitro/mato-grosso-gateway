import { Link } from "react-router-dom";
import { Leaf, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Pantanal", href: "/biomas/pantanal" },
    { name: "Cerrado", href: "/biomas/cerrado" },
    { name: "Amazônia", href: "/biomas/amazonia" },
    { name: "Araguaia", href: "/biomas/araguaia" },
  ];

  const destinations = [
    { name: "Cuiabá", href: "/cidades" },
    { name: "Chapada dos Guimarães", href: "/cidades" },
    { name: "Nobres", href: "/cidades" },
    { name: "Alta Floresta", href: "/cidades" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-forest-dark border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Turismo<span className="text-accent">MT</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Descubra as belezas naturais de Mato Grosso. Turismo sustentável que 
              preserva a natureza enquanto proporciona experiências inesquecíveis.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Biomas Column */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Biomas</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Column */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Destinos</h4>
            <ul className="space-y-3">
              {destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Cuiabá, Mato Grosso<br />Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+5565999999999" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  +55 (65) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:contato@turismomato.com" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  contato@turismomt.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Turismo Mato Grosso. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contato" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Política de Privacidade
            </Link>
            <Link to="/contato" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

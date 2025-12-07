import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const featuredPost = {
  id: "melhor-epoca-pantanal",
  title: "Melhor Época para Visitar o Pantanal: Guia Completo",
  excerpt: "Descubra qual é o melhor período do ano para observar a fauna, fazer passeios de barco e aproveitar ao máximo sua viagem ao maior pantanal do mundo.",
  image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop",
  author: "Maria Silva",
  date: "5 de Dezembro, 2025",
  readTime: "8 min",
  category: "Dicas de Viagem",
};

const blogPosts = [
  {
    id: "festival-inverno-chapada",
    title: "Festival de Inverno de Chapada dos Guimarães 2025",
    excerpt: "O maior evento cultural do cerrado mato-grossense está chegando. Confira a programação completa e dicas de hospedagem.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    author: "João Santos",
    date: "3 de Dezembro, 2025",
    readTime: "5 min",
    category: "Eventos",
  },
  {
    id: "flutuacao-nobres",
    title: "Flutuação em Nobres: Tudo que Você Precisa Saber",
    excerpt: "Prepare-se para uma experiência única nas águas cristalinas de Nobres. Equipamentos, melhores rios e dicas práticas.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
    author: "Ana Costa",
    date: "28 de Novembro, 2025",
    readTime: "6 min",
    category: "Ecoturismo",
  },
  {
    id: "observacao-oncas",
    title: "Observação de Onças: Onde e Como Ver o Rei do Pantanal",
    excerpt: "Dicas de especialistas para aumentar suas chances de avistar a majestosa onça-pintada em seu habitat natural.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
    author: "Pedro Lima",
    date: "25 de Novembro, 2025",
    readTime: "7 min",
    category: "Fauna",
  },
  {
    id: "gastronomia-cuiabana",
    title: "Sabores de Mato Grosso: Gastronomia Cuiabana",
    excerpt: "Maria Isabel, farofa de banana e outros pratos típicos que você precisa experimentar na capital mato-grossense.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    author: "Carla Mendes",
    date: "20 de Novembro, 2025",
    readTime: "4 min",
    category: "Gastronomia",
  },
  {
    id: "trilhas-amazonia",
    title: "5 Trilhas Incríveis na Amazônia Mato-Grossense",
    excerpt: "Roteiros para todos os níveis de experiência, desde caminhadas leves até expedições desafiadoras na selva.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
    author: "Ricardo Souza",
    date: "15 de Novembro, 2025",
    readTime: "9 min",
    category: "Aventura",
  },
  {
    id: "pesca-esportiva-araguaia",
    title: "Pesca Esportiva no Rio Araguaia: Temporada 2025",
    excerpt: "Tucunaré, pintado e outros peixes esportivos esperam por você. Confira as melhores pousadas e períodos.",
    image: "https://images.unsplash.com/photo-501854140801-50d01698950b?w=600&h=400&fit=crop",
    author: "Marcos Oliveira",
    date: "10 de Novembro, 2025",
    readTime: "6 min",
    category: "Pesca",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Blog</span> e Notícias
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dicas, roteiros e novidades sobre o turismo em Mato Grosso
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <div className="group relative bg-card rounded-3xl overflow-hidden border border-border hover-lift">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 md:hidden" />
                <span className="absolute top-4 left-4 px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  Destaque
                </span>
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <span className="text-accent font-medium text-sm mb-3">{featuredPost.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime} de leitura
                  </span>
                </div>
                <Button variant="reserve" className="w-fit">
                  Ler Artigo Completo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Artigos Recentes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar Mais Artigos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

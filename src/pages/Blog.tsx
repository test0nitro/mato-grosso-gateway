import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const featuredPost = {
  id: "guia-transpantaneira",
  title: "Guia Completo da Transpantaneira: A Estrada do Pantanal",
  excerpt: "Percorra os 147km da estrada mais famosa do Pantanal, atravessando 122 pontes de madeira e avistando onças, jacarés, capivaras e centenas de aves em seu habitat natural.",
  image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop",
  author: "Carlos Eduardo",
  date: "10 de Outubro, 2024",
  readTime: "12 min",
  category: "Roteiros",
};

const blogPosts = [
  {
    id: "chapada-3-dias",
    title: "O que fazer em Chapada dos Guimarães em 3 dias",
    excerpt: "Roteiro completo para aproveitar o melhor da Chapada: cachoeira Véu de Noiva, Mirante, Cidade de Pedra e as melhores trilhas da região.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    author: "Ana Paula",
    date: "22 de Setembro, 2024",
    readTime: "8 min",
    category: "Roteiros",
  },
  {
    id: "pesca-araguaia",
    title: "Pesca Esportiva no Araguaia: Melhores épocas",
    excerpt: "Descubra quando ir ao Rio Araguaia para fisgar tucunarés, pintados e pirarucus. Dicas de pousadas, equipamentos e técnicas dos pescadores locais.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
    author: "Marcos Ribeiro",
    date: "05 de Agosto, 2024",
    readTime: "7 min",
    category: "Pesca",
  },
  {
    id: "flutuacao-nobres",
    title: "Flutuação em Nobres: Tudo que Você Precisa Saber",
    excerpt: "Prepare-se para uma experiência única nas águas cristalinas de Nobres. Equipamentos, melhores rios e dicas práticas.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
    author: "Fernanda Costa",
    date: "28 de Julho, 2024",
    readTime: "6 min",
    category: "Ecoturismo",
  },
  {
    id: "observacao-oncas",
    title: "Observação de Onças: Onde e Como Ver o Rei do Pantanal",
    excerpt: "Dicas de especialistas para aumentar suas chances de avistar a majestosa onça-pintada em seu habitat natural.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop",
    author: "Pedro Lima",
    date: "15 de Julho, 2024",
    readTime: "9 min",
    category: "Fauna",
  },
  {
    id: "gastronomia-cuiabana",
    title: "Sabores de Mato Grosso: Gastronomia Cuiabana",
    excerpt: "Maria Isabel, farofa de banana e outros pratos típicos que você precisa experimentar na capital mato-grossense.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    author: "Carla Mendes",
    date: "01 de Julho, 2024",
    readTime: "5 min",
    category: "Gastronomia",
  },
  {
    id: "trilhas-amazonia",
    title: "5 Trilhas Incríveis na Amazônia Mato-Grossense",
    excerpt: "Roteiros para todos os níveis de experiência, desde caminhadas leves até expedições desafiadoras na selva.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
    author: "Ricardo Souza",
    date: "20 de Junho, 2024",
    readTime: "10 min",
    category: "Aventura",
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

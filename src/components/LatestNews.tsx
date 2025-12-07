import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const latestPosts = [
  {
    id: "melhor-epoca-pantanal",
    title: "Melhor Época para Visitar o Pantanal",
    excerpt: "Descubra qual é o melhor período do ano para observar a fauna selvagem.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    date: "5 Dez 2025",
    category: "Dicas",
  },
  {
    id: "festival-inverno-chapada",
    title: "Festival de Inverno de Chapada 2025",
    excerpt: "O maior evento cultural do cerrado mato-grossense está chegando.",
    image: "https://images.unsplash.com/photo-433086966358-54859d0ed716?w=400&h=300&fit=crop",
    date: "3 Dez 2025",
    category: "Eventos",
  },
  {
    id: "flutuacao-nobres",
    title: "Flutuação em Nobres: Guia Completo",
    excerpt: "Tudo que você precisa saber sobre as águas cristalinas de Nobres.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop",
    date: "28 Nov 2025",
    category: "Ecoturismo",
  },
];

const LatestNews = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Últimas <span className="gradient-text">Notícias</span>
            </h2>
            <p className="text-muted-foreground">Dicas e novidades sobre o turismo em MT</p>
          </div>
          <Link to="/blog" className="hidden md:block">
            <Button variant="outline">
              Ver Todos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
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
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link to="/blog" className="md:hidden mt-8 block">
          <Button variant="outline" className="w-full">
            Ver Todas as Notícias
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LatestNews;

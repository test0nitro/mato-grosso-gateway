import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    title: "Amanhecer no Pantanal",
    category: "Pantanal",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=800&fit=crop",
    title: "Cachoeira Véu de Noiva",
    category: "Chapada",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=500&fit=crop",
    title: "Rio Cristalino",
    category: "Nobres",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=900&fit=crop",
    title: "Floresta Amazônica",
    category: "Amazônia",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    title: "Pôr do Sol no Araguaia",
    category: "Araguaia",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=700&h=700&fit=crop",
    title: "Cerrado em Flor",
    category: "Cerrado",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=500&fit=crop",
    title: "Vista Aérea",
    category: "Paisagem",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&h=800&fit=crop",
    title: "Onça Pintada",
    category: "Fauna",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    title: "Trilha na Mata",
    category: "Ecoturismo",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=700&h=500&fit=crop",
    title: "Nascer do Sol",
    category: "Paisagem",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=700&fit=crop",
    title: "Arara Azul",
    category: "Fauna",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop",
    title: "Reflexos no Rio",
    category: "Pantanal",
  },
];

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", ...new Set(galleryImages.map((img) => img.category))];

  const filteredImages =
    filter === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Galeria</span> de Fotos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Imagens que capturam a beleza incomparável de Mato Grosso
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group break-inside-avoid cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-foreground font-semibold">{image.title}</p>
                    <p className="text-accent text-sm">{image.category}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-xl border-border p-2">
          <DialogClose className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors">
            <X className="w-5 h-5" />
          </DialogClose>
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent rounded-b-lg">
                <h3 className="text-xl font-bold text-foreground">{selectedImage.title}</h3>
                <p className="text-accent">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Galeria;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import BiomesSection from "@/components/BiomesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SearchBar />
        <BiomesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

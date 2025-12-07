import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    people: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reserva enviada com sucesso!", {
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            id="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destination">Destino</Label>
          <Select
            value={formData.destination}
            onValueChange={(value) => setFormData({ ...formData, destination: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Escolha o bioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pantanal">Pantanal</SelectItem>
              <SelectItem value="cerrado">Cerrado</SelectItem>
              <SelectItem value="amazonia">Amazônia</SelectItem>
              <SelectItem value="araguaia">Araguaia</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">Data da Viagem</Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="people">Número de Pessoas</Label>
          <Input
            id="people"
            type="number"
            min="1"
            placeholder="Quantidade"
            value={formData.people}
            onChange={(e) => setFormData({ ...formData, people: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem (Opcional)</Label>
        <Textarea
          id="message"
          placeholder="Conte-nos mais sobre sua viagem..."
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <Button type="submit" variant="hero" className="w-full">
        Enviar Reserva
      </Button>
    </form>
  );
};

export default ReservationForm;

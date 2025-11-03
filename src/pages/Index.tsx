import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, CheckCircle, Users, Shield, Clock, Car } from "lucide-react";
import heroImage from "@/assets/carro-pai.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <img
            src="/src/assets/logo.png"
            alt="Facility Car"
            className="h-10 w-auto"
          /img>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Mobilidade para Todos
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Transporte seguro e confortável para pessoas com dificuldade de locomoção, idosos e pessoas com deficiência.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Transporte com Dignidade e Conforto
            </h2>
            <p className="text-lg text-muted-foreground">
              Na Facility Car, entendemos que cada pessoa merece se deslocar com segurança, conforto e independência. 
              Nossos veículos são especialmente adaptados e nossa equipe é treinada para oferecer o melhor atendimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Veículos Adaptados</h3>
                <p className="text-muted-foreground">
                  Frota moderna com rampas, elevadores e espaço para cadeiras de rodas
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Equipe Qualificada</h3>
                <p className="text-muted-foreground">
                  Motoristas treinados e equipe preparada para auxiliar com cuidado
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Segurança Total</h3>
                <p className="text-muted-foreground">
                  Veículos com seguro completo e protocolos rigorosos de segurança
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Disponibilidade</h3>
                <p className="text-muted-foreground">
                  Atendimento ágil e horários flexíveis para sua comodidade
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Como Funciona</h2>
            <p className="text-lg text-muted-foreground">Simples, rápido e seguro</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Entre em Contato</h3>
              <p className="text-muted-foreground">
                Ligue ou envie mensagem informando sua necessidade de transporte
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Agendamento</h3>
              <p className="text-muted-foreground">
                Definimos data, horário e detalhes do transporte conforme sua necessidade
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Transporte Seguro</h3>
              <p className="text-muted-foreground">
                Nossa equipe busca e leva você ao destino com todo conforto e segurança
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Por Que Escolher a Facility Car?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Acessibilidade Total</h3>
                  <p className="text-muted-foreground">
                    Veículos equipados com rampas hidráulicas, elevadores e espaço interno amplo para acomodar cadeiras de rodas e equipamentos de mobilidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Profissionais Capacitados</h3>
                  <p className="text-muted-foreground">
                    Motoristas e acompanhantes treinados em primeiros socorros e técnicas de auxílio para pessoas com mobilidade reduzida.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pontualidade Garantida</h3>
                  <p className="text-muted-foreground">
                    Respeitamos seu tempo. Chegamos no horário combinado e garantimos que você chegue ao seu destino pontualmente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
                  <p className="text-muted-foreground">
                    Cada cliente tem necessidades únicas. Adaptamos nosso serviço para garantir o máximo conforto e segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Estamos prontos para atender você. Entre em contato e solicite seu transporte.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="opacity-90">(00) 0000-0000</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="opacity-90">contato@facilitycar.com</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Atendimento</h3>
                <p className="opacity-90">24 horas, 7 dias por semana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Facility Car</h3>
            <p className="text-sm opacity-70">Mobilidade para Todos</p>
            <p className="text-sm opacity-70 mt-4">
              © 2025 Facility Car. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

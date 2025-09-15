import { Card, CardContent } from "@/components/ui/card";
import { Camera, Users, Star, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Representación de Modelos",
      description: "Agencia de modelos profesional con amplia experiencia en la industria de la moda y el entretenimiento."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Producción y Castings",
      description: "Organizamos castings profesionales y producciones fotográficas para marcas de prestigio internacional."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Desarrollo de Talento",
      description: "Formamos y desarrollamos nuevos talentos en el mundo del modelaje y la representación artística."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Management Integral",
      description: "Gestión completa de carreras profesionales con seguimiento personalizado y oportunidades exclusivas."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-primary">
            Servicios de nuestra agencia de modelos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos servicios integrales de representación, producción y desarrollo 
            de talento en la industria de la moda y el entretenimiento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
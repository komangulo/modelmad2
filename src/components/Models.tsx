import { Card, CardContent } from "@/components/ui/card";
import modelElena from "@/assets/model-elena.jpg";
import modelCarlos from "@/assets/model-carlos.jpg";
import modelSofia from "@/assets/model-sofia.jpg";
import modelMiguel from "@/assets/model-miguel.jpg";
import modelIsabella from "@/assets/model-isabella.jpg";
import modelDiego from "@/assets/model-diego.jpg";
import { Button } from "@/components/ui/button";

const Models = () => {
  const models = [
    {
      name: "Elena Martínez",
      category: "Fashion Model",
      image: modelElena
    },
    {
      name: "Carlos Rodríguez",
      category: "Commercial Model",
      image: modelCarlos
    },
    {
      name: "Sofia González",
      category: "Editorial Model",
      image: modelSofia
    },
    {
      name: "Miguel Fernández",
      category: "Fashion Model",
      image: modelMiguel
    },
    {
      name: "Isabella López",
      category: "Runway Model",
      image: modelIsabella
    },
    {
      name: "Diego Sánchez",
      category: "Commercial Model",
      image: modelDiego
    }
  ];

  return (
    <section id="modelos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-primary">
            Nuestros modelos profesionales
          </h2>
          <h3 className="text-2xl font-light text-muted-foreground mb-4">
            Agencia de modelos con los mejores talentos
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre el portfolio de nuestra agencia de modelos. Cada uno de nuestros 
            representados cuenta con experiencia profesional y presencia en las mejores campañas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {models.map((model, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-soft hover:shadow-elegant transition-all duration-500 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={`${model.name} - ${model.category}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-medium mb-2 text-primary">
                    {model.name}
                  </h4>
                  <p className="text-muted-foreground">
                    {model.category}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
            Ver Todos los Modelos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Models;
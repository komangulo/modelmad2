import { Button } from "@/components/ui/button";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import portrait4 from "@/assets/portrait-4.jpg";

const About = () => {
  return (
    <section id="agencia" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 text-primary">
              La mejor agencia de modelos de Madrid
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Somos una agencia de modelos líder en Madrid, especializada en la representación 
                artística y el model management de los mejores talentos de la industria.
              </p>
              <p>
                Nuestra agencia de modelos cuenta con más de una década de experiencia conectando 
                talento excepcional con las marcas más prestigiosas del mercado nacional e internacional.
              </p>
              <p>
                Desde castings exclusivos hasta producciones de alta gama, nos enfocamos en 
                desarrollar carreras sólidas y duraderas para nuestros representados.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-3xl font-light text-primary mb-2">250+</h4>
                <p className="text-sm text-muted-foreground">Modelos Representados</p>
              </div>
              <div>
                <h4 className="text-3xl font-light text-primary mb-2">500+</h4>
                <p className="text-sm text-muted-foreground">Campañas Realizadas</p>
              </div>
              <div>
                <h4 className="text-3xl font-light text-primary mb-2">15</h4>
                <p className="text-sm text-muted-foreground">Años de Experiencia</p>
              </div>
            </div>

            <div className="mt-10">
              <Button size="lg" className="px-8 py-3 text-lg">
                Conoce Nuestro Trabajo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
                <img 
                  src={portrait1} 
                  alt="Modelo profesional - retrato artístico"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img 
                  src={portrait2} 
                  alt="Modelo masculino profesional - retrato artístico"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img 
                  src={portrait3} 
                  alt="Modelo femenino profesional - retrato artístico"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
                <img 
                  src={portrait4} 
                  alt="Modelo masculino profesional - retrato artístico"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
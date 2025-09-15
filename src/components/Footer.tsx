import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light tracking-wider mb-6">
              MODELS & TALENTS
            </h3>
            <h4 className="text-lg font-light mb-4">
              Agencia de modelos en Madrid
            </h4>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Agencia de modelos profesional especializada en representación artística, 
              castings y model management. Conectamos talento excepcional con las mejores 
              oportunidades de la industria.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Servicios</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Representación de Modelos</li>
              <li>Castings Profesionales</li>
              <li>Producciones Fotográficas</li>
              <li>Model Management</li>
              <li>Desarrollo de Talento</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Contacto</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Calle Serrano, 45</li>
              <li>28001 Madrid</li>
              <li>+34 91 123 45 67</li>
              <li>info@modelstalents.com</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>© 2024 Models & Talents. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
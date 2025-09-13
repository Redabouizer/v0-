import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Smartphone, Zap, Shield, CheckCircle, Code, Palette } from "lucide-react";

const WebCreation = () => {
  const services = [
    {
      title: "Sites Vitrines",
      description: "Sites élégants pour présenter votre entreprise et vos services avec impact.",
      features: ["Design responsive", "CMS intégré", "SEO optimisé", "Formulaires de contact"],
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: "Sites E-commerce",
      description: "Boutiques en ligne performantes pour vendre vos produits 24h/24.",
      features: ["Catalogue produits", "Paiement sécurisé", "Gestion stocks", "Analytics intégrés"],
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Applications Web",
      description: "Applications web sur-mesure pour répondre à vos besoins spécifiques.",
      features: ["Développement custom", "Base de données", "API intégration", "Interface admin"],
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Refonte de Sites", 
      description: "Modernisez votre site existant pour améliorer performances et conversion.",
      features: ["Audit technique", "Nouveau design", "Migration contenu", "Tests performance"],
      icon: <Palette className="w-8 h-8" />
    }
  ];

  const technologies = [
    "React", "Next.js", "Vue.js", "WordPress", "Shopify", "WooCommerce", 
    "Laravel", "Node.js", "TypeScript", "Tailwind CSS"
  ];

  const process = [
    {
      step: "01",
      title: "Cahier des Charges",
      description: "Définition précise de vos besoins et objectifs business."
    },
    {
      step: "02", 
      title: "Design & Maquettes",
      description: "Création des maquettes et validation de l'identité visuelle."
    },
    {
      step: "03",
      title: "Développement", 
      description: "Codage et intégration avec les meilleures technologies."
    },
    {
      step: "04",
      title: "Tests & Mise en Ligne",
      description: "Tests complets et déploiement sur vos serveurs."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Création de Site Internet</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sites Web{" "}
            <span className="yellow-highlight">Performants</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Création de sites internet modernes, responsive et optimisés SEO. 
            Transformez votre présence digitale avec nos solutions web sur-mesure.
          </p>
          <Button asChild className="btn-noiise text-lg px-8 py-4">
            <Link to="/contact">
              Créer mon site web
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos Solutions{" "}
              <span className="text-primary">Web</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technologies{" "}
              <span className="pink-highlight">Modernes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous utilisons les dernières technologies pour garantir performance, 
              sécurité et évolutivité de votre site web.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-6 py-2 text-sm font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Processus de{" "}
              <span className="text-primary">Création</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi choisir WeClaim pour{" "}
                <span className="text-primary">votre site web</span> ?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">100% Responsive</h3>
                    <p className="text-muted-foreground">Votre site s'adapte parfaitement à tous les écrans.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Performance Optimale</h3>
                    <p className="text-muted-foreground">Temps de chargement ultra-rapides pour une meilleure UX.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Sécurité Renforcée</h3>
                    <p className="text-muted-foreground">Protection contre les cyberattaques et mises à jour régulières.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop"
                alt="Création de sites web"
                className="w-full h-96 object-cover rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transformez votre idée en site web professionnel
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            De la conception à la mise en ligne, nous créons le site web 
            qui fera décoller votre business.
          </p>
          
          <Button asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            <Link to="/contact">
              Discuter de mon projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WebCreation;

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Smartphone, Eye, Users, CheckCircle, Zap, Monitor } from "lucide-react";

const Webdesign = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Conception d'interfaces utilisateur intuitives et d'expériences utilisateur optimales.",
      features: ["Wireframes & maquettes", "Prototypage interactif", "Tests utilisateurs", "Design system"],
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: "Design Responsive",
      description: "Création de designs qui s'adaptent parfaitement à tous les types d'écrans et appareils.",
      features: ["Mobile-first design", "Grilles flexibles", "Images adaptatives", "Navigation tactile"],
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Identité Visuelle Web",
      description: "Développement de votre identité visuelle digitale pour une image de marque forte.",
      features: ["Charte graphique web", "Palette de couleurs", "Typographies", "Iconographie"],
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "Optimisation Conversion", 
      description: "Design orienté conversion pour transformer vos visiteurs en clients.",
      features: ["CTA optimisés", "Landing pages", "A/B testing design", "Tunnel de conversion"],
      icon: <Users className="w-8 h-8" />
    }
  ];

  const principles = [
    {
      title: "Design Centré Utilisateur",
      description: "Nous plaçons l'utilisateur au cœur de notre processus de conception pour créer des expériences mémorables.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Performance & Accessibilité", 
      description: "Nos designs respectent les standards d'accessibilité et optimisent les performances.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Design Moderne & Tendance",
      description: "Nous créons des designs contemporains qui reflètent les dernières tendances du web design.",
      icon: <Monitor className="w-6 h-6" />
    }
  ];

  const process = [
    {
      step: "01",
      title: "Research & Analyse",
      description: "Étude de vos utilisateurs, concurrents et objectifs business."
    },
    {
      step: "02", 
      title: "Conception & Wireframes",
      description: "Création de l'architecture et des wireframes de votre interface."
    },
    {
      step: "03",
      title: "Design Visuel", 
      description: "Conception des maquettes haute-fidélité et du design system."
    },
    {
      step: "04",
      title: "Prototypage & Tests",
      description: "Création de prototypes interactifs et tests utilisateurs."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Webdesign</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Design Web{" "}
            <span className="yellow-highlight">Exceptionnel</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Créons ensemble des interfaces web magnifiques, intuitives et performantes. 
            Notre expertise en UX/UI design transforme vos idées en expériences digitales mémorables.
          </p>
          <Button asChild className="btn-noiise text-lg px-8 py-4">
            <Link to="/contact">
              Créer mon design
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
              Nos Expertises{" "}
              <span className="text-primary">Webdesign</span>
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

      {/* Design Principles */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos Principes{" "}
              <span className="pink-highlight">Design</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous suivons des principes de design éprouvés pour créer des interfaces 
              qui allient esthétique et fonctionnalité.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="p-8 text-center bg-white hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-bold mb-4">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Processus{" "}
              <span className="text-primary">Créatif</span>
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

      {/* Portfolio Preview */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quelques Réalisations{" "}
              <span className="text-primary">Récentes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment nous avons transformé les idées de nos clients 
              en expériences web exceptionnelles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Monitor className="w-12 h-12 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">Projet E-commerce</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Interface moderne et intuitive pour boutique en ligne
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="text-xs">UI/UX</Badge>
                    <Badge variant="secondary" className="text-xs">E-commerce</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">Voir tous nos projets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-primary mb-2">+85%</div>
              <p className="text-lg text-muted-foreground">Amélioration du taux de conversion</p>
            </div>
            <div>
              <div className="text-5xl font-black text-secondary mb-2">-40%</div>
              <p className="text-lg text-muted-foreground">Réduction du taux de rebond</p>
            </div>
            <div>
              <div className="text-5xl font-black text-green-500 mb-2">+127%</div>
              <p className="text-lg text-muted-foreground">Augmentation de l'engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Donnons vie à votre vision créative
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Nos designers experts transforment vos idées en interfaces web 
            magnifiques et performantes qui captivent vos utilisateurs.
          </p>
          
          <Button asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            <Link to="/contact">
              Créer mon design sur-mesure
              <Palette className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Webdesign;

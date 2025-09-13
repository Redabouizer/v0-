import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { TrendingUp, Target, Monitor, BarChart3, Edit3, Share2, Eye, CheckCircle, ArrowRight, Zap, Users, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "Référencement Naturel (SEO)",
      description: "Positionnez votre site sur les premiers résultats de Google pour générer durablement des visites qualifiées.",
      features: ["Audit SEO technique", "Optimisation on-page", "Stratégie de contenu", "Link building"],
      price: "À partir de 2 500€/mois",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Référencement Payant (SEA)",
      description: "Menez des campagnes Google Ads performantes et optimisez votre ROI avec notre expertise certifiée.",
      features: ["Campagnes Google Ads", "Optimisation ROI", "A/B Testing", "Suivi conversions"],
      price: "À partir de 1 500€/mois",
      gradient: "bg-gradient-to-br from-orange-500 to-red-500"
    },
    {
      icon: Monitor,
      title: "Création de Site Internet",
      description: "Créez un site web esthétique, performant et optimisé pour la conversion avec notre agence web.",
      features: ["Design sur-mesure", "Développement responsive", "Optimisation UX/UI", "Formation"],
      price: "À partir de 8 000€",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      icon: Edit3,
      title: "Content Marketing",
      description: "Déployez une stratégie de contenu sur-mesure et faites-vous entendre avec le content marketing.",
      features: ["Stratégie éditoriale", "Création de contenu", "Blog professionnel", "Storytelling"],
      price: "À partir de 2 000€/mois",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      icon: BarChart3,
      title: "Web Analytics & Data",
      description: "Collectez et analysez les données de votre site web pour optimiser vos performances digitales.",
      features: ["Google Analytics 4", "Tableaux de bord", "Rapports personnalisés", "Recommandations"],
      price: "À partir de 1 200€/mois",
      gradient: "bg-gradient-to-br from-yellow-500 to-amber-600"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Renforcez votre image en ligne et tissez des liens avec votre communauté sur les réseaux sociaux.",
      features: ["Community management", "Création de contenu", "Social ads", "Influence marketing"],
      price: "À partir de 1 800€/mois",
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Stratégie",
      description: "Analyse complète de votre présence digitale et définition d'une stratégie sur-mesure."
    },
    {
      step: "02", 
      title: "Mise en Œuvre",
      description: "Déploiement des actions définies avec un suivi rigoureux et des optimisations continues."
    },
    {
      step: "03",
      title: "Mesure & Optimisation",
      description: "Analyse des performances et ajustements pour maximiser votre retour sur investissement."
    },
    {
      step: "04",
      title: "Croissance Durable",
      description: "Accompagnement long terme pour une croissance digitale pérenne et mesurable."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-8 animate-fade-in-up border-primary/30 text-primary">
            Nos Expertises Digitales
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-scale-in">
            Des services qui font du{" "}
            <span className="yellow-highlight text-shimmer">
              bruiiiiiit !
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 animate-fade-in-up">
            Découvrez nos expertises en <strong>marketing digital</strong> pour faire décoller 
            votre entreprise. De la création de site web au référencement, nous maîtrisons 
            tous les leviers de croissance digitale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-right">
            <Button asChild className="btn-premium text-lg px-8 py-4">
              <Link to="/contact">
                Parlons de votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4">
              <Link to="/case-studies">
                Voir nos réalisations
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/10 rounded-full blur-xl float-animation"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos expertises qui <span className="pink-highlight">performent</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chaque service est pensé pour maximiser votre ROI et accélérer votre croissance digitale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-professional group">
                <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-primary font-bold text-lg">{service.price}</div>
                  <Button asChild className="btn-noiise">
                    <Link to="/contact">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
              Notre Méthodologie
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comment nous <span className="yellow-highlight">accompagnons</span> votre succès
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une approche structurée et éprouvée pour maximiser l'impact de votre stratégie digitale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mx-auto mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto shadow-floating animate-pulse-glow">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-6xl md:text-7xl font-black text-blue-500">
                +55%
              </div>
              <p className="text-lg text-muted-foreground">
                de croissance moyenne chez nos clients
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl md:text-7xl font-black text-green-500">
                150+
              </div>
              <p className="text-lg text-muted-foreground">
                projets digitaux réalisés avec succès
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl md:text-7xl font-black text-yellow-500">
                4.9/5
              </div>
              <p className="text-lg text-muted-foreground">
                Sur Google Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à faire décoller{" "}
            <span className="yellow-highlight text-foreground">
              votre business ?
            </span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Ne laissez pas vos concurrents prendre l'avantage. Notre équipe d'experts 
            est là pour transformer votre présence digitale en machine à génération 
            de leads qualifiés.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Link to="/contact">
                Demander un devis gratuit
                <Zap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Link to="/case-studies">
                Voir nos succès clients
              </Link>
            </Button>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      </section>
    </Layout>
  );
};

export default Services;

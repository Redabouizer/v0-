import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, TrendingUp, Users, BarChart3, CheckCircle, Zap } from "lucide-react";

const Ads = () => {
  const services = [
    {
      title: "Google Ads (SEA)",
      description: "Campagnes d'achat de mots-clés sur Google pour générer du trafic qualifié immédiatement.",
      features: ["Recherche de mots-clés", "Création d'annonces", "Optimisation des enchères", "Suivi ROI"],
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Publicités ciblées sur les réseaux sociaux pour toucher votre audience idéale.",
      features: ["Ciblage précis", "Créations visuelles", "A/B Testing", "Remarketing"],
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "LinkedIn Ads",
      description: "Campagnes B2B sur LinkedIn pour atteindre les décideurs et professionnels.",
      features: ["Ciblage professionnel", "Lead generation", "Brand awareness", "Sponsored content"],
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "YouTube Ads", 
      description: "Publicités vidéo sur YouTube pour maximiser votre visibilité et engagement.",
      features: ["Vidéos publicitaires", "Ciblage démographique", "Campagnes display", "Analytics avancées"],
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Stratégie",
      description: "Analyse de votre marché et définition de la stratégie publicitaire optimale."
    },
    {
      step: "02", 
      title: "Création des Campagnes",
      description: "Mise en place des campagnes avec ciblage précis et créations impactantes."
    },
    {
      step: "03",
      title: "Optimisation Continue", 
      description: "Suivi quotidien et optimisations pour maximiser votre retour sur investissement."
    },
    {
      step: "04",
      title: "Reporting & Analyse",
      description: "Reports détaillés et recommandations pour améliorer vos performances."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Ads - SEA & Social</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Publicité Digitale{" "}
            <span className="yellow-highlight">Performance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Boostez votre visibilité et générez des leads qualifiés avec nos campagnes 
            publicitaires sur Google, Facebook, Instagram et LinkedIn.
          </p>
          <Button asChild className="btn-noiise text-lg px-8 py-4">
            <Link to="/contact">
              Lancer ma campagne
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
              Nos Services{" "}
              <span className="text-primary">Publicitaires</span>
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

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Processus{" "}
              <span className="pink-highlight">Éprouvé</span>
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

      {/* Stats & Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <div>
              <div className="text-5xl font-black text-primary mb-2">+250%</div>
              <p className="text-lg text-muted-foreground">ROI moyen sur nos campagnes</p>
            </div>
            <div>
              <div className="text-5xl font-black text-secondary mb-2">-45%</div>
              <p className="text-lg text-muted-foreground">Coût par acquisition réduit</p>
            </div>
            <div>
              <div className="text-5xl font-black text-green-500 mb-2">98%</div>
              <p className="text-lg text-muted-foreground">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à booster votre visibilité ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Nos experts en publicité digitale sont là pour transformer 
            votre budget publicitaire en résultats concrets.
          </p>
          
          <Button asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            <Link to="/contact">
              Demander un devis gratuit
              <Zap className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Ads;

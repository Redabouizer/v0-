import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Zap, TrendingUp, Users, CheckCircle, Globe, Megaphone } from "lucide-react";

const MarketingDigital = () => {
  const services = [
    {
      title: "Stratégie Marketing Globale",
      description: "Élaboration d'une stratégie marketing digitale complète alignée sur vos objectifs business.",
      features: ["Audit digital complet", "Persona & parcours client", "Mix marketing digital", "Roadmap stratégique"],
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Inbound Marketing",
      description: "Attirez, convertissez et fidélisez vos prospects avec une approche inbound performante.",
      features: ["Content marketing", "Lead nurturing", "Marketing automation", "Scoring & qualification"],
      icon: <Megaphone className="w-8 h-8" />
    },
    {
      title: "Marketing Automation",
      description: "Automatisez vos campagnes marketing pour optimiser vos conversions et votre ROI.",
      features: ["Workflows automatisés", "Segmentation avancée", "Email marketing", "Lead scoring"],
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Performance Marketing", 
      description: "Maximisez vos résultats avec une approche data-driven et des optimisations continues.",
      features: ["Acquisition multicanal", "Optimisation CRO", "Attribution modeling", "ROI tracking"],
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const channels = [
    { name: "SEO/SEA", description: "Référencement naturel et payant", growth: "+340%" },
    { name: "Social Media", description: "Réseaux sociaux et social ads", growth: "+280%" },
    { name: "Email Marketing", description: "Campagnes email et automation", growth: "+190%" },
    { name: "Content Marketing", description: "Création et diffusion de contenu", growth: "+240%" },
    { name: "Affiliate Marketing", description: "Programme d'affiliation", growth: "+160%" },
    { name: "Marketing Mobile", description: "App marketing et mobile ads", growth: "+220%" }
  ];

  const process = [
    {
      step: "01",
      title: "Diagnostic & Audit",
      description: "Analyse complète de votre écosystème digital et de vos performances."
    },
    {
      step: "02", 
      title: "Stratégie Personnalisée",
      description: "Élaboration d'une stratégie marketing sur-mesure et d'un plan d'action."
    },
    {
      step: "03",
      title: "Déploiement Multicanal", 
      description: "Mise en œuvre coordonnée sur tous les canaux digitaux pertinents."
    },
    {
      step: "04",
      title: "Optimisation Continue",
      description: "Suivi des performances et optimisations basées sur la data."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Marketing Digital</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Marketing Digital{" "}
            <span className="yellow-highlight">360°</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stratégie marketing digitale complète pour accélérer votre croissance. 
            De l'acquisition à la fidélisation, nous optimisons chaque étape de votre funnel.
          </p>
          <Button asChild className="btn-noiise text-lg px-8 py-4">
            <Link to="/contact">
              Booster ma croissance
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
              Notre Approche{" "}
              <span className="text-primary">Marketing Digital</span>
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

      {/* Marketing Channels */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Canaux Marketing{" "}
              <span className="pink-highlight">Performants</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous maîtrisons l'ensemble des leviers du marketing digital 
              pour maximiser votre portée et vos conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{channel.name}</h3>
                    <p className="text-sm text-muted-foreground">{channel.description}</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {channel.growth}
                  </Badge>
                </div>
                
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Globe className="w-6 h-6" />
                </div>
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
              Notre Méthodologie{" "}
              <span className="text-primary">Éprouvée</span>
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

      {/* Success Stories Preview */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Résultats de nos{" "}
              <span className="text-primary">Clients</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "E-commerce Fashion",
                metric: "+450%",
                description: "Augmentation du chiffre d'affaires en 12 mois",
                sector: "E-commerce"
              },
              {
                company: "SaaS B2B", 
                metric: "+320%",
                description: "Croissance des leads qualifiés",
                sector: "Tech"
              },
              {
                company: "Immobilier",
                metric: "+280%",
                description: "Amélioration du taux de conversion",
                sector: "Immobilier"
              }
            ].map((story, index) => (
              <Card key={index} className="p-8 bg-white text-center hover:shadow-lg transition-shadow">
                <Badge variant="outline" className="mb-4">{story.sector}</Badge>
                <div className="text-4xl font-black text-primary mb-4">{story.metric}</div>
                <h3 className="text-lg font-bold mb-2">{story.company}</h3>
                <p className="text-muted-foreground text-sm">{story.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/case-studies">Voir tous nos cas clients</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-blue-500" />
              </div>
              <div className="text-4xl font-black text-blue-500 mb-2">500+</div>
              <p className="text-muted-foreground">Clients accompagnés</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-green-500" />
              </div>
              <div className="text-4xl font-black text-green-500 mb-2">+250%</div>
              <p className="text-muted-foreground">ROI moyen généré</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-purple-500" />
              </div>
              <div className="text-4xl font-black text-purple-500 mb-2">98%</div>
              <p className="text-muted-foreground">Taux de satisfaction</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-orange-500" />
              </div>
              <div className="text-4xl font-black text-orange-500 mb-2">25+</div>
              <p className="text-muted-foreground">Années d'expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Accélérez votre croissance digitale dès maintenant
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Notre expertise marketing digital 360° transforme votre présence en ligne 
            en machine à générer des leads et du chiffre d'affaires.
          </p>
          
          <Button asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            <Link to="/contact">
              Démarrer ma stratégie marketing
              <Target className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingDigital;

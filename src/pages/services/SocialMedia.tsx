import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Share2, Camera, MessageCircle, CheckCircle, Heart, TrendingUp } from "lucide-react";

const SocialMedia = () => {
  const services = [
    {
      title: "Stratégie Social Media",
      description: "Définition d'une stratégie complète pour développer votre présence sur les réseaux sociaux.",
      features: ["Audit réseaux sociaux", "Définition persona", "Planning éditorial", "KPIs & objectifs"],
      icon: <Share2 className="w-8 h-8" />
    },
    {
      title: "Community Management",
      description: "Animation quotidienne de vos communautés et interaction avec votre audience.",
      features: ["Publications régulières", "Réponses aux commentaires", "Modération", "Veille concurrentielle"],
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Création de Contenu",
      description: "Production de contenus visuels et textuels attractifs pour vos réseaux sociaux.",
      features: ["Visuels & videos", "Rédaction de posts", "Stories créatives", "Templates sur-mesure"],
      icon: <Camera className="w-8 h-8" />
    },
    {
      title: "Influence Marketing", 
      description: "Collaboration avec des influenceurs pour amplifier votre portée et votre crédibilité.",
      features: ["Sélection influenceurs", "Négociation partenariats", "Campagnes créatives", "Suivi performance"],
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const platforms = [
    { name: "Facebook", users: "2.9 Mds", color: "bg-blue-500" },
    { name: "Instagram", users: "2 Mds", color: "bg-pink-500" },
    { name: "LinkedIn", users: "900M", color: "bg-blue-700" },
    { name: "TikTok", users: "1 Md", color: "bg-black" },
    { name: "Twitter", users: "450M", color: "bg-sky-500" },
    { name: "YouTube", users: "2.7 Mds", color: "bg-red-500" }
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Analyse",
      description: "Analyse de votre présence actuelle et de vos concurrents."
    },
    {
      step: "02", 
      title: "Stratégie Personnalisée",
      description: "Création d'une stratégie adaptée à vos objectifs business."
    },
    {
      step: "03",
      title: "Production & Animation", 
      description: "Création de contenu et animation quotidienne de vos réseaux."
    },
    {
      step: "04",
      title: "Analyse & Optimisation",
      description: "Suivi des performances et optimisation continue."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Social Media</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Réseaux Sociaux{" "}
            <span className="yellow-highlight">Impactants</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Développez votre communauté et engagez votre audience avec notre expertise 
            en stratégie social media, community management et création de contenu.
          </p>
          <Button asChild className="btn-noiise text-lg px-8 py-4">
            <Link to="/contact">
              Booster ma présence sociale
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Présents sur{" "}
              <span className="text-primary">Tous les Réseaux</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous maîtrisons l'ensemble des plateformes sociales pour maximiser 
              votre portée et votre engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${platform.color} rounded-xl mx-auto mb-4`}></div>
                <h3 className="text-lg font-bold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.users} utilisateurs</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos Services{" "}
              <span className="pink-highlight">Social Media</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow bg-white">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Approche{" "}
              <span className="text-primary">Social Media</span>
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
      <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <div>
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-pink-500" />
              </div>
              <div className="text-5xl font-black text-pink-500 mb-2">+340%</div>
              <p className="text-lg text-muted-foreground">Croissance moyenne de l'engagement</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-purple-500" />
              </div>
              <div className="text-5xl font-black text-purple-500 mb-2">+156%</div>
              <p className="text-lg text-muted-foreground">Augmentation des followers</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <MessageCircle className="w-12 h-12 text-blue-500" />
              </div>
              <div className="text-5xl font-black text-blue-500 mb-2">+89%</div>
              <p className="text-lg text-muted-foreground">Interactions qualifiées</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Résultats moyens obtenus par nos clients sur une période de 6 mois 
              d'accompagnement social media.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Créons ensemble votre succès sur les réseaux sociaux
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            De la stratégie à l'animation quotidienne, nous développons 
            votre présence sociale avec impact et authenticité.
          </p>
          
          <Button asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            <Link to="/contact">
              Démarrer ma stratégie sociale
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SocialMedia;

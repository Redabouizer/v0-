import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Trophy, MapPin } from "lucide-react";

const History = () => {
  const timeline = [
    {
      year: "1999",
      title: "Naissance de WeClaim",
      description: "Création de l'agence par trois passionnés du web naissant, avec une vision : démocratiser le marketing digital pour les entreprises françaises.",
      milestone: "Fondation",
      clients: "5 premiers clients",
      team: "3 fondateurs"
    },
    {
      year: "2003",
      title: "Expansion SEO",
      description: "Développement de notre expertise en référencement naturel. Premiers succès majeurs avec des clients e-commerce pionniers.",
      milestone: "Spécialisation SEO", 
      clients: "25 clients actifs",
      team: "8 collaborateurs"
    },
    {
      year: "2007",
      title: "Ère des Réseaux Sociaux",
      description: "Intégration du social media marketing dans notre offre. Accompagnement des premières marques sur Facebook et Twitter.",
      milestone: "Social Media",
      clients: "60 clients",
      team: "15 experts"
    },
    {
      year: "2012",
      title: "Révolution Mobile",
      description: "Adaptation complète au mobile-first. Développement d'applications mobiles et stratégies de marketing mobile.",
      milestone: "Mobile-First",
      clients: "120 clients",
      team: "28 spécialistes"
    },
    {
      year: "2016",
      title: "Data & Analytics",
      description: "Création du pôle data science. Intégration de l'intelligence artificielle dans nos stratégies marketing.",
      milestone: "Big Data",
      clients: "200 clients",
      team: "45 talents"
    },
    {
      year: "2019",
      title: "Expansion Internationale",
      description: "Ouverture de notre bureau à Casablanca pour accompagner nos clients à l'international.",
      milestone: "International",
      clients: "300 clients",
      team: "65 experts"
    },
    {
      year: "2021",
      title: "Innovation IA",
      description: "Lancement de nos solutions d'automatisation marketing basées sur l'intelligence artificielle.",
      milestone: "IA Marketing",
      clients: "450 clients",
      team: "85 collaborateurs"
    },
    {
      year: "2024",
      title: "Leader du Marché",
      description: "Reconnaissance comme agence digitale de référence en France et au Maroc. Certification Google Premier Partner.",
      milestone: "Leadership",
      clients: "500+ clients",
      team: "110 experts"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Nous repoussons constamment les limites du marketing digital",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "La qualité de nos prestations est notre priorité absolue",
      icon: "⭐"
    },
    {
      title: "Proximité",
      description: "Une relation client basée sur la confiance et l'écoute",
      icon: "🤝"
    },
    {
      title: "Agilité",
      description: "Nous nous adaptons rapidement aux évolutions du marché",
      icon: "⚡"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Notre Histoire</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            25 ans d'{" "}
            <span className="yellow-highlight">Innovation Digitale</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            De startup pionnière à leader du marketing digital, découvrez l'histoire 
            de WeClaim et les étapes clés de notre évolution.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Notre{" "}
                <span className="pink-highlight">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Depuis 1999, notre mission est de démocratiser le marketing digital 
                et d'accompagner les entreprises dans leur transformation numérique. 
                Nous croyons que chaque entreprise, quelle que soit sa taille, 
                mérite d'avoir accès aux meilleures stratégies digitales.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Notre approche combine expertise technique, créativité et vision 
                stratégique pour créer des expériences digitales qui génèrent 
                des résultats concrets et durables.
              </p>
              <Button asChild className="btn-noiise">
                <Link to="/about">
                  Découvrir notre équipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="L'équipe WeClaim"
                className="w-full h-96 object-cover rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre Parcours{" "}
              <span className="text-primary">Depuis 1999</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez les moments clés qui ont façonné WeClaim 
              et fait de nous l'agence que nous sommes aujourd'hui.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="text-center lg:text-left">
                    <div className="text-4xl font-black text-primary mb-2">{event.year}</div>
                    <Badge variant="secondary" className="text-xs">
                      {event.milestone}
                    </Badge>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-primary mr-2" />
                      <span className="font-medium">{event.team}</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 text-secondary mr-2" />
                      <span className="font-medium">{event.clients}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos{" "}
              <span className="yellow-highlight">Valeurs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ces valeurs guident nos actions au quotidien et définissent 
              notre culture d'entreprise depuis nos débuts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              25 Ans de{" "}
              <span className="text-primary">Croissance</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Calendar className="w-12 h-12 text-blue-500" />
              </div>
              <div className="text-4xl font-black text-blue-500 mb-2">25+</div>
              <p className="text-lg text-muted-foreground">Années d'expertise</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-green-500" />
              </div>
              <div className="text-4xl font-black text-green-500 mb-2">110</div>
              <p className="text-lg text-muted-foreground">Experts passionnés</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Trophy className="w-12 h-12 text-purple-500" />
              </div>
              <div className="text-4xl font-black text-purple-500 mb-2">500+</div>
              <p className="text-lg text-muted-foreground">Clients accompagnés</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <MapPin className="w-12 h-12 text-orange-500" />
              </div>
              <div className="text-4xl font-black text-orange-500 mb-2">4</div>
              <p className="text-lg text-muted-foreground">Agences France & Maroc</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Écrivons ensemble le prochain chapitre
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Forte de 25 ans d'expertise et d'innovation, WeClaim continue d'évoluer 
            pour accompagner votre succès digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              <Link to="/contact">
                Rejoindre l'aventure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Link to="/careers">Nous recrutons</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;

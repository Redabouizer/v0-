import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Award, Medal, Star, Calendar, Users } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      year: "2024",
      title: "Agence SEO de l'Année",
      organization: "Search Marketing Awards",
      category: "SEO",
      description: "Récompense pour l'excellence de nos stratégies de référencement naturel et les résultats exceptionnels obtenus pour nos clients.",
      badge: "🥇",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      year: "2024",
      title: "Meilleure Campagne Social Media",
      organization: "Digital Marketing Excellence",
      category: "Social Media",
      description: "Campagne innovante sur Instagram qui a généré +400% d'engagement pour un client e-commerce.",
      badge: "🏆",
      color: "bg-pink-100 text-pink-800"
    },
    {
      year: "2023",
      title: "Innovation en IA Marketing",
      organization: "French Tech Awards",
      category: "Innovation",
      description: "Reconnaissance de nos outils d'automatisation marketing basés sur l'intelligence artificielle.",
      badge: "⚡",
      color: "bg-blue-100 text-blue-800"
    },
    {
      year: "2023",
      title: "Top Employer Tech",
      organization: "Great Place to Work",
      category: "RH",
      description: "Certification pour notre culture d'entreprise et nos pratiques RH innovantes dans le secteur tech.",
      badge: "👥",
      color: "bg-green-100 text-green-800"
    },
    {
      year: "2022",
      title: "Agence E-commerce de l'Année",
      organization: "E-commerce Awards",
      category: "E-commerce", 
      description: "Excellence dans l'accompagnement des sites e-commerce avec une croissance moyenne de +250% du CA.",
      badge: "🛒",
      color: "bg-purple-100 text-purple-800"
    },
    {
      year: "2022",
      title: "Excellence en Data Analytics",
      organization: "Analytics Professional Awards",
      category: "Analytics",
      description: "Expertise reconnue en web analytics et data science appliquée au marketing digital.",
      badge: "📊",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      year: "2021",
      title: "Meilleure Agence Digitale PME",
      organization: "Digital Business Awards",
      category: "Business",
      description: "Récompense pour notre accompagnement exceptionnel des PME dans leur transformation digitale.",
      badge: "🚀",
      color: "bg-orange-100 text-orange-800"
    },
    {
      year: "2021",
      title: "Certification Google Premier Partner",
      organization: "Google",
      category: "Certification",
      description: "Statut Premier Partner Google obtenu grâce à notre expertise Google Ads et nos performances client.",
      badge: "⭐",
      color: "bg-red-100 text-red-800"
    }
  ];

  const certifications = [
    {
      name: "Google Premier Partner",
      issuer: "Google",
      year: "2021-2024",
      description: "Certification premium pour l'excellence en Google Ads"
    },
    {
      name: "Facebook Marketing Partner", 
      issuer: "Meta",
      year: "2020-2024",
      description: "Partenaire certifié pour les publicités Facebook & Instagram"
    },
    {
      name: "Microsoft Advertising Partner",
      issuer: "Microsoft",
      year: "2022-2024", 
      description: "Expertise certifiée en publicité Bing Ads"
    },
    {
      name: "HubSpot Diamond Partner",
      issuer: "HubSpot",
      year: "2023-2024",
      description: "Niveau diamond en inbound marketing et automation"
    },
    {
      name: "Shopify Plus Partner",
      issuer: "Shopify",
      year: "2021-2024",
      description: "Partenaire certifié pour les projets e-commerce avancés"
    },
    {
      name: "ISO 9001:2015",
      issuer: "Bureau Veritas",
      year: "2020-2024",
      description: "Certification qualité pour nos processus et services"
    }
  ];

  const clientResults = [
    {
      metric: "+450%",
      description: "Augmentation du ROI moyen",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />
    },
    {
      metric: "98%",
      description: "Taux de satisfaction client",
      icon: <Star className="w-8 h-8 text-pink-500" />
    },
    {
      metric: "500+",
      description: "Clients accompagnés avec succès",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      metric: "25+",
      description: "Années d'expertise reconnue",
      icon: <Medal className="w-8 h-8 text-purple-500" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Nos Récompenses</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Excellence{" "}
            <span className="yellow-highlight">Reconnue</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Découvrez les prix, certifications et reconnaissances qui témoignent 
            de notre expertise et de la qualité de nos services en marketing digital.
          </p>
        </div>
      </section>

      {/* Client Results Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos Résultats{" "}
              <span className="pink-highlight">Parlent d'Eux-Mêmes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientResults.map((result, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  {result.icon}
                </div>
                <div className="text-4xl font-black text-primary mb-4">{result.metric}</div>
                <p className="text-muted-foreground font-medium">{result.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prix &{" "}
              <span className="text-primary">Distinctions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une reconnaissance constante de notre expertise par les leaders 
              de l'industrie du marketing digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{award.badge}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary mb-1">{award.year}</div>
                    <Badge className={award.color}>{award.category}</Badge>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2">{award.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{award.organization}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{award.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Certifications{" "}
              <span className="yellow-highlight">Professionnelles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nos certifications garantissent notre expertise technique et 
              notre conformité aux standards les plus élevés de l'industrie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline">{cert.year}</Badge>
                </div>
                
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Timeline */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Évolution de{" "}
              <span className="text-primary">Notre Excellence</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {awards.slice(0, 4).map((award, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white rounded-full shadow-soft flex items-center justify-center">
                      <div className="text-2xl">{award.badge}</div>
                    </div>
                  </div>
                  
                  <Card className="flex-1 p-6 bg-white">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold">{award.title}</h3>
                      <Badge variant="outline">{award.year}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{award.organization}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Recognition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partenaires{" "}
              <span className="text-primary">de Confiance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les plus grandes plateformes digitales nous font confiance 
              et reconnaissent notre expertise.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {["Google", "Meta", "Microsoft", "HubSpot", "Shopify", "LinkedIn"].map((partner, index) => (
              <div key={index} className="text-2xl font-bold text-muted-foreground">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bénéficiez d'une expertise reconnue et récompensée
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Nos prix et certifications témoignent de notre engagement constant 
            vers l'excellence. Rejoignez nos 500+ clients satisfaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              <Link to="/contact">
                Démarrer mon projet
                <Trophy className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Link to="/case-studies">Voir nos résultats</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Awards;

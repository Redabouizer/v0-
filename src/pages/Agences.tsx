import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail, Users, Clock, Award } from "lucide-react";

const Agences = () => {
  const offices = [
    {
      city: "Paris",
      isHeadquarter: true,
      address: "15 Rue de la République, 75003 Paris",
      phone: "+33 1 42 36 15 98",
      email: "paris@weclaim.fr",
      employees: 45,
      specialties: ["SEO", "SEA", "Social Media", "Analytics"],
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=600&h=400&fit=crop",
      manager: "Marie Dubois",
      description: "Notre siège social au cœur de Paris, regroupant nos équipes de direction et nos spécialistes en référencement naturel et payant."
    },
    {
      city: "Lyon", 
      isHeadquarter: false,
      address: "42 Cours Gambetta, 69003 Lyon",
      phone: "+33 4 78 25 14 87",
      email: "lyon@weclaim.fr",
      employees: 28,
      specialties: ["Content Marketing", "Webdesign", "E-commerce"],
      image: "https://images.unsplash.com/photo-1549552536-44ea73dd6b4e?w=600&h=400&fit=crop",
      manager: "Pierre Martin",
      description: "Notre bureau lyonnais spécialisé dans la création de contenu et le webdesign, au service des entreprises de la région Rhône-Alpes."
    },
    {
      city: "Casablanca",
      isHeadquarter: false,
      address: "Boulevard Mohammed V, 20000 Casablanca, Maroc",
      phone: "+212 5 22 45 67 89",
      email: "casablanca@weclaim.ma",
      employees: 22,
      specialties: ["Social Ads", "Analytics", "Mobile Marketing", "E-commerce"],
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73bb4?w=600&h=400&fit=crop",
      manager: "Youssef Benali",
      description: "Notre agence marocaine développe l'expertise en publicité sociale et marketing mobile pour l'Afrique du Nord et les marchés francophones."
    },
    {
      city: "Nantes",
      isHeadquarter: false,
      address: "12 Rue Crébillon, 44000 Nantes",
      phone: "+33 2 40 35 67 89",
      email: "nantes@weclaim.fr",
      employees: 15,
      specialties: ["Innovation", "IA Marketing", "Automation"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      manager: "Thomas Leroy",
      description: "Notre hub innovation à Nantes, laboratoire de nos nouvelles technologies et solutions d'intelligence artificielle."
    }
  ];

  const stats = [
    { value: "4", label: "Agences (France & Maroc)", icon: <MapPin className="w-6 h-6" /> },
    { value: "110", label: "Collaborateurs", icon: <Users className="w-6 h-6" /> },
    { value: "25+", label: "Années d'expérience", icon: <Clock className="w-6 h-6" /> },
    { value: "500+", label: "Clients accompagnés", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-8 text-primary border-primary/30">
            Nos Agences
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Un réseau d'agences{" "}
            <span className="yellow-highlight">proche de vous</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Avec 4 agences strategiquement implantées en France et au Maroc, WeClaim vous accompagne 
            localement avec l'expertise d'un réseau international de spécialistes du digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-noiise text-lg px-8 py-4">
              <Link to="/contact">
                Nous contacter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild className="btn-secondary text-lg px-8 py-4">
              <Link to="/about">Découvrir WeClaim</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos Agences France & Maroc
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chaque agence développe une expertise spécialisée tout en bénéficiant 
              de la force du réseau international WeClaim
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="bg-white shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={office.image}
                    alt={`Agence ${office.city}`}
                    className="w-full h-48 object-cover"
                  />
                  {office.isHeadquarter && (
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      Siège Social
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-sm font-semibold text-foreground">
                        {office.employees} collaborateurs
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {office.city}
                    </h3>
                    <div className="flex space-x-2">
                      {office.specialties.slice(0, 2).map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {office.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-3 text-primary" />
                      {office.address}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 mr-3 text-primary" />
                      {office.phone}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 mr-3 text-primary" />
                      {office.email}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-3 text-primary" />
                      Manager: {office.manager}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">Spécialités:</p>
                    <div className="flex flex-wrap gap-2">
                      {office.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="btn-noiise w-full">
                    <Link to="/contact">
                      Contacter cette agence
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Network Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Les avantages du{" "}
                <span className="text-primary">réseau WeClaim</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Proximité géographique
                    </h3>
                    <p className="text-muted-foreground">
                      Un interlocuteur local qui comprend votre marché et peut vous rencontrer facilement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Expertise mutualisée
                    </h3>
                    <p className="text-muted-foreground">
                      Bénéficiez de l'expertise de l'ensemble du réseau pour des projets complexes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Standards nationaux
                    </h3>
                    <p className="text-muted-foreground">
                      Qualité et méthodologies harmonisées sur l'ensemble de nos territoires d'intervention.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Réactivité optimale
                    </h3>
                    <p className="text-muted-foreground">
                      Intervention rapide et suivi personnalisé grâce à nos équipes locales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=500&fit=crop"
                alt="Réseau d'agences"
                className="w-full h-96 object-cover rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Trouvez l'agence la plus proche de vous
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour être mis en relation avec l'agence WeClaim 
            qui correspond le mieux à vos besoins et votre localisation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Link to="/contact">
                Prendre contact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Agences;

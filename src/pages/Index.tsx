import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Award, CheckCircle, Zap, Target, TrendingUp } from "lucide-react";
import FloatingTeam from "@/components/FloatingTeam";

const Index = () => {
  const services = [
    {
      icon: Zap,
      title: "Marketing Digital",
      description: "Stratégies digitales sur-mesure pour propulser votre croissance en ligne.",
      color: "from-primary to-primary-hover"
    },
    {
      icon: Target,
      title: "SEO & Référencement",
      description: "Positionnement optimal sur les moteurs de recherche avec des résultats durables.",
      color: "from-secondary to-secondary-hover"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Performance",
      description: "Analyse de données avancée pour optimiser vos performances digitales.",
      color: "from-accent to-accent-hover"
    }
  ];

  const stats = [
    { value: "85+", label: "Consultants Experts" },
    { value: "300+", label: "Clients Accompagnés" },
    { value: "15+", label: "Années d'Expérience" },
    { value: "2M€+", label: "CA Généré Clients" }
  ];

  const awards = [
    { year: "2024", title: "Meilleure Agence Marketing Digital" },
    { year: "2023", title: "Excellence en Innovation Digitale" },
    { year: "2022", title: "Top Agence SEO France" }
  ];

  return (
    <Layout>
      {/* Hero Section - Noiise Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-gradient">
        {/* Floating Team Members */}
        <FloatingTeam />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 animate-fade-in-up">
            <span className="gradient-text">Agence Digitale</span>
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up animation-delay-200">
            Votre stratégie digitale va faire
            <br />
            <span className="yellow-highlight inline-block transform rotate-1 mx-2">
              du bruit !
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-400">
            L'agence de marketing digital <span className="pink-highlight">WeClaim</span> accompagne les entreprises 
            de toutes tailles et de tous les secteurs grâce à ses{" "}
            <span className="font-semibold text-foreground">expertises en acquisition et en création</span>. 
            Nos 85 consultants web passionnés imaginent et déploient votre{" "}
            <span className="font-semibold text-foreground">stratégie digitale dans une logique de performances et de rentabilité</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="btn-premium text-lg px-8 py-4">
              <Link to="/contact">
                Contactez-nous !
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4">
              <Link to="/about">Nous découvrir</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
            {stats.map((stat, index) => (
              <div key={index} className="text-center card-professional p-6 bg-white/10 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-shimmer">{stat.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-primary border-primary">Nos Expertises</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Travaillez avec une agence digitale qui{" "}
              <span className="yellow-highlight">vise l'excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Notre mission est de vous rendre audible dans le brouhaha actuel. Nous n'allons pas 
              le faire n'importe comment, ni à n'importe quel prix : nous veillons à{" "}
              <span className="font-semibold text-foreground">élaborer des stratégies sur-mesure en cohérence avec vos objectifs</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-professional group hover:scale-105 transition-all duration-500 border-0 shadow-soft hover:shadow-premium"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="p-8 text-center relative overflow-hidden">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-floating group-hover:animate-pulse-glow`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="btn-premium">
              <Link to="/services">
                Découvrir toutes nos expertises
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-primary border-primary">Nos Récompenses</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Une expertise reconnue dans le{" "}
              <span className="pink-highlight">secteur digital</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <Card 
                key={index} 
                className="card-professional group border-0 shadow-soft hover:shadow-premium bg-white"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="p-8 text-center relative">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-full flex items-center justify-center shadow-glow">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                    {award.year}
                  </Badge>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {award.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-hover to-secondary"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-16 h-16 bg-secondary rounded-full animate-pulse animation-delay-500"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Vous êtes arrivé jusqu'ici ?
          </h2>
          <div className="text-4xl md:text-6xl font-bold mb-8">
            <span className="yellow-highlight text-foreground">N'en restons pas là.</span>
          </div>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Vous souhaitez en savoir plus sur nos expertises, notre agence digitale et les talents qui l'animent 
            ? Venez discuter avec eux de votre projet et obtenez des solutions pertinentes !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-4 rounded-full shadow-premium">
              <Link to="/contact">
                Demandez un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

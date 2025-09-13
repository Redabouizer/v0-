import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ExternalLink, TrendingUp, Users, Award, Target, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const categories = [
    { name: "Tous", count: 24, active: true },
    { name: "E-commerce", count: 8, active: false },
    { name: "B2B", count: 6, active: false },
    { name: "Startup", count: 5, active: false },
    { name: "Santé", count: 3, active: false },
    { name: "Finance", count: 2, active: false }
  ];

  const featuredProject = {
    title: "Transformation digitale complète pour LeMarcél",
    client: "LeMarcél - Retail Fashion",
    category: "E-commerce",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    challenge: "Refonte complète de l'écosystème digital avec migration vers Shopify Plus et stratégie omnicanale.",
    results: [
      { metric: "+185%", label: "Chiffre d'affaires online" },
      { metric: "+240%", label: "Trafic organique" },
      { metric: "-45%", label: "Coût d'acquisition" },
      { metric: "+320%", label: "Conversions mobiles" }
    ],
    services: ["Refonte UX/UI", "SEO", "SEA", "Social Media", "Analytics"],
    duration: "8 mois"
  };

  const projects = [
    {
      title: "Stratégie SEO internationale",
      client: "Vertbaudet",
      category: "E-commerce",
      year: "2024", 
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      description: "Déploiement d'une stratégie SEO sur 12 pays européens avec adaptation culturelle et linguistique.",
      results: [
        { metric: "+156%", label: "Trafic organique" },
        { metric: "+89%", label: "Positions top 3" }
      ],
      services: ["SEO International", "Content Marketing", "Analytics"]
    },
    {
      title: "Campagne de lancement startup",
      client: "TechFlow Solutions", 
      category: "B2B Startup",
      year: "2023",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      description: "Stratégie de lancement complète pour une startup B2B SaaS avec génération de leads qualifiés.",
      results: [
        { metric: "2,400", label: "Leads générés" },
        { metric: "€180k", label: "Pipeline créé" }
      ],
      services: ["Growth Hacking", "LinkedIn Ads", "Content", "Email Marketing"]
    },
    {
      title: "Refonte e-commerce premium",
      client: "Maison Hermès Digital",
      category: "Luxe & Premium",
      year: "2023",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop",
      description: "Création d'une expérience digitale premium avec parcours d'achat personnalisé.",
      results: [
        { metric: "+78%", label: "Taux de conversion" },
        { metric: "+134%", label: "Panier moyen" }
      ],
      services: ["UX/UI Design", "Développement", "SEO", "Analytics"]
    },
    {
      title: "Acquisition multicanale",
      client: "ClubMed Voyages",
      category: "Tourisme",
      year: "2023",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      description: "Stratégie d'acquisition 360° pour augmenter les réservations en ligne.",
      results: [
        { metric: "+95%", label: "Réservations online" },
        { metric: "-32%", label: "Coût par acquisition" }
      ],
      services: ["SEA", "Display", "Social Media", "Remarketing"]
    },
    {
      title: "Écosystème digital santé",
      client: "Laboratoires Pharmaceutiques",
      category: "Santé & Bien-être",
      year: "2022",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      description: "Création d'un écosystème digital pour l'information médicale avec compliance RGPD.",
      results: [
        { metric: "+210%", label: "Engagement médecins" },
        { metric: "100%", label: "Conformité RGPD" }
      ],
      services: ["Plateforme sur-mesure", "SEO Médical", "Compliance"]
    },
    {
      title: "App mobile fintech",
      client: "FinanceFlow",
      category: "Fintech",
      year: "2022",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Développement et lancement d'une app mobile de gestion financière pour particuliers.",
      results: [
        { metric: "50k+", label: "Téléchargements" },
        { metric: "4.8/5", label: "Note App Store" }
      ],
      services: ["Développement Mobile", "UX/UI", "ASO", "Growth Marketing"]
    }
  ];

  return (
    <Layout showFloatingTeam={false}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/30">
            Portfolio & Réalisations
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Nos réalisations qui font du{" "}
            <span className="yellow-highlight font-black">
              claiiiiiim !
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nous avons transformé les stratégies digitales de nos clients 
            avec des résultats mesurables et des croissances exceptionnelles.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`rounded-full ${category.active ? 'btn-noiise' : 'btn-secondary'}`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              🏆 Projet Phare 2024
            </h2>
          </div>

          <Card className="overflow-hidden max-w-6xl mx-auto hover:shadow-large transition-all">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="secondary">{featuredProject.category}</Badge>
                  <Badge variant="outline">{featuredProject.year}</Badge>
                  <Badge variant="default" className="bg-accent text-foreground">Projet Phare</Badge>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                  {featuredProject.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 text-lg">
                  {featuredProject.challenge}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {featuredProject.results.map((result, idx) => (
                    <div key={idx} className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                      <div className="text-sm text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.services.map((service, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Durée: {featuredProject.duration}
                  </div>
                  
                  <Button className="btn-noiise">
                    Voir le détail
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Nos Dernières Réalisations
            </h2>
            <p className="text-muted-foreground">
              Une sélection de projets qui illustrent notre savoir-faire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-large transition-all bg-white group">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-foreground border-foreground/20">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-primary mb-3 font-medium">
                    {project.client}
                  </p>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="text-center p-2 bg-muted/30 rounded">
                        <div className="font-bold text-primary text-sm">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.services.slice(0, 3).map((service, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                    {project.services.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.services.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Voir le projet
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/case-studies">
                Voir tous nos cas clients
                <TrendingUp className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats & Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Des Résultats qui Parlent
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">200+</div>
              <div className="text-muted-foreground text-sm">Projets Livrés</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">+150%</div>
              <div className="text-muted-foreground text-sm">Croissance Moyenne</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <div className="text-muted-foreground text-sm">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-success" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">15</div>
              <div className="text-muted-foreground text-sm">Awards Remportés</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à devenir notre prochain{" "}
            <span className="yellow-highlight font-black text-foreground">
              succès
            </span>{" "}
            ?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discutons de votre projet et découvrez comment nous pouvons transformer 
            votre stratégie digitale avec des résultats mesurables.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-foreground px-8 py-4 font-semibold">
              <Link to="/contact">Démarrer un projet</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
              <Link to="/case-studies">Voir nos cas clients</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { MapPin, Clock, Users, Briefcase, Heart, Zap, Trophy, Coffee, ArrowRight } from "lucide-react";

const Careers = () => {
  const jobOffers = [
    {
      title: "Expert SEO Senior",
      department: "Acquisition",
      location: "Paris",
      type: "CDI",
      experience: "5+ ans",
      salary: "45-55k€",
      urgent: true,
      description: "Rejoignez notre équipe d'experts SEO pour accompagner nos clients dans leur stratégie de référencement naturel.",
      skills: ["SEO technique", "Content Marketing", "Analytics", "Python"]
    },
    {
      title: "Consultant Google Ads",
      department: "Acquisition", 
      location: "Lyon",
      type: "CDI",
      experience: "3+ ans",
      salary: "38-45k€",
      urgent: false,
      description: "Pilotez les campagnes Google Ads de nos clients et optimisez leurs performances publicitaires.",
      skills: ["Google Ads", "Analytics", "Data Studio", "Excel"]
    },
    {
      title: "UX/UI Designer",
      department: "Création",
      location: "Paris",
      type: "CDI",
      experience: "4+ ans", 
      salary: "42-50k€",
      urgent: true,
      description: "Concevez des expériences utilisateur exceptionnelles pour les sites et applications de nos clients.",
      skills: ["Figma", "Sketch", "Prototyping", "User Research"]
    },
    {
      title: "Développeur React Senior",
      department: "Création",
      location: "Bordeaux",
      type: "CDI",
      experience: "5+ ans",
      salary: "50-60k€", 
      urgent: false,
      description: "Développez des applications web modernes et performantes avec les dernières technologies.",
      skills: ["React", "TypeScript", "Node.js", "GraphQL"]
    },
    {
      title: "Social Media Manager",
      department: "Création",
      location: "Paris",
      type: "CDI",
      experience: "3+ ans",
      salary: "35-42k€",
      urgent: false,
      description: "Gérez la présence social media de nos clients et créez des contenus engageants.",
      skills: ["Community Management", "Content Creation", "Analytics", "Photoshop"]
    },
    {
      title: "Data Analyst",
      department: "Acquisition",
      location: "Lyon",
      type: "CDI", 
      experience: "2+ ans",
      salary: "40-48k€",
      urgent: true,
      description: "Analysez les données de nos clients pour optimiser leurs performances digitales.",
      skills: ["SQL", "Python", "Google Analytics", "Data Viz"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Équilibre vie pro/perso",
      description: "Télétravail flexible, horaires adaptés et RTT supplémentaires"
    },
    {
      icon: Zap,
      title: "Formation continue",
      description: "Budget formation de 2000€/an et certifications prises en charge"
    },
    {
      icon: Trophy,
      title: "Évolution rapide",
      description: "Mobilité interne encouragée et accompagnement carrière personnalisé"
    },
    {
      icon: Coffee,
      title: "Ambiance startup",
      description: "Team buildings, afterworks et bureaux modernes avec café premium"
    },
    {
      icon: Users,
      title: "Équipe passionnée",
      description: "Collaborateurs experts et bienveillants dans un environnement stimulant"
    },
    {
      icon: Briefcase,
      title: "Projets variés",
      description: "Clients grands comptes et pure players pour diversifier votre expérience"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Candidature",
      description: "Envoyez-nous votre CV et lettre de motivation via notre formulaire"
    },
    {
      step: "02",
      title: "Premier échange",
      description: "Entretien RH de 30min pour faire connaissance et valider la motivation"
    },
    {
      step: "03",
      title: "Entretien technique", 
      description: "Échange avec votre futur manager pour évaluer vos compétences"
    },
    {
      step: "04",
      title: "Rencontre équipe",
      description: "Immersion d'une demi-journée pour découvrir l'équipe et l'environnement"
    },
    {
      step: "05",
      title: "Offre & intégration",
      description: "Proposition et accompagnement personnalisé pendant vos premiers mois"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Directrice SEO", 
      quote: "Chez WeClaim, j'ai pu évoluer rapidement grâce à la diversité des projets et au soutien de l'équipe. L'ambiance est vraiment unique !",
      years: "5 ans"
    },
    {
      name: "Carlos Rodriguez",
      role: "Lead SEA",
      quote: "La formation continue et les certifications m'ont permis de rester à la pointe. L'équilibre vie pro/perso est parfaitement respecté.",
      years: "3 ans"
    }
  ];

  return (
    <Layout showFloatingTeam={false}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/30">
            Carrières & Recrutement
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Viens faire du{" "}
            <span className="yellow-highlight font-black">
              claiiiiiim
            </span>{" "}
            avec nous !
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Rejoignez une équipe passionnée de 85 experts qui façonnent l'avenir du marketing digital. 
            Évolution, formation et projets stimulants vous attendent !
          </p>
          
          <Button asChild className="btn-noiise text-lg px-8 py-4">
            <Link to="#jobs">
              Voir nos offres
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Pourquoi rejoindre WeClaim ?
            </h2>
            <p className="text-muted-foreground">
              Une entreprise où il fait bon grandir professionnellement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Offers */}
      <section id="jobs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Nos Offres d'Emploi
            </h2>
            <p className="text-muted-foreground">
              {jobOffers.length} postes ouverts dans nos différentes agences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOffers.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-large transition-all bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                      {job.urgent && (
                        <Badge variant="destructive" className="text-xs">Urgent</Badge>
                      )}
                    </div>
                    <Badge variant="secondary" className="mb-3">{job.department}</Badge>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="font-semibold text-primary">{job.salary}</div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.experience}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="btn-noiise flex-1">
                    Postuler maintenant
                  </Button>
                  <Button variant="outline" size="sm">
                    En savoir plus
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Vous ne trouvez pas le poste qui vous correspond ?
            </p>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/contact">Candidature spontanée</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Notre Processus de Recrutement
            </h2>
            <p className="text-muted-foreground">
              Un processus transparent et bienveillant en 5 étapes
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ils témoignent
            </h2>
            <p className="text-muted-foreground">
              L'expérience collaborateur selon nos équipes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  <Badge variant="outline" className="mt-2">{testimonial.years} chez WeClaim</Badge>
                </div>
                
                <blockquote className="text-muted-foreground text-center italic">
                  "{testimonial.quote}"
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à rejoindre l'aventure{" "}
            <span className="yellow-highlight font-black text-foreground">
              WeClaim
            </span>{" "}
            ?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Envoyez-nous votre candidature et commencez une nouvelle aventure professionnelle 
            dans une équipe passionnée et dynamique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-foreground px-8 py-4 font-semibold">
              <Link to="/contact">Envoyer ma candidature</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
              <Link to="/team">Rencontrer l'équipe</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;

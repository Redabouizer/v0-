import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Layout from "@/components/Layout"
import { Link } from "react-router-dom"
import { ArrowRight, Target, Heart, Lightbulb, Zap, MapPin } from "lucide-react"

const About = () => {
  const timeline = [
    { year: "2018", event: "Ouverture à Casablanca", description: "Implantation de WeClaim au Maroc" },
    {
      year: "2019",
      event: "Première certification Google Maroc",
      description: "Reconnaissance de notre expertise SEA locale",
    },
    { year: "2020", event: "Équipe marocaine", description: "Constitution d'une équipe d'experts locaux" },
    { year: "2021", event: "50 clients marocains", description: "Croissance rapide sur le marché local" },
    {
      year: "2023",
      event: "Leader digital Casablanca",
      description: "Plus de 150 entreprises marocaines accompagnées",
    },
    { year: "2024", event: "Innovation IA au Maroc", description: "Intégration de l'IA dans nos processus locaux" },
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Transparence",
      description:
        "Une communication claire et honnête avec tous nos partenaires, clients et collaborateurs marocains.",
      color: "bg-red-100",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Créativité",
      description:
        "L'innovation et la créativité au cœur de chaque stratégie pour des résultats exceptionnels adaptés au marché marocain.",
      color: "bg-yellow-100",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agilité",
      description:
        "Adaptation rapide aux évolutions du marché digital marocain et aux besoins spécifiques de chaque client local.",
      color: "bg-blue-100",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Recherche constante des meilleures technologies et méthodes pour optimiser les performances au Maroc.",
      color: "bg-green-100",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-8 text-primary border-primary/30">
            Agence Casablanca
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Une équipe d'experts digitaux basée à{" "}
            <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">Casablanca</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Une équipe d'experts digitaux basée à Casablanca, prête à accompagner les entreprises marocaines dans leur
            transformation digitale avec passion, expertise et innovation locale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-noiise text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">
                Travaillons ensemble
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              className="btn-secondary text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link to="/team">Rencontrer l'équipe</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/weclaim-site-replica-main/src/assets/hero-building.jpg"
                alt="Notre agence à Casablanca"
                className="w-full h-80 object-cover rounded-lg shadow-soft"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-foreground">Casablanca, Maroc</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi Casablanca ?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Casablanca, capitale économique du Maroc, est le cœur battant de l'innovation digitale marocaine. Notre
                agence s'est implantée dans cette ville dynamique pour être au plus près des entreprises marocaines et
                comprendre leurs défis spécifiques.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nous combinons l'expertise internationale avec une connaissance approfondie du marché local, de la
                culture marocaine et des habitudes de consommation digitale au Maroc.
              </p>
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-600/10 to-red-600/10 rounded-lg border border-green-600/20">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="font-medium text-foreground">Fiers d'accompagner les entreprises marocaines</span>
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Mission au Maroc</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Faire entendre la voix des entreprises marocaines dans le paysage digital international. Nous créons des
                stratégies sur-mesure qui génèrent de la valeur et des performances mesurables, adaptées au contexte
                culturel et économique marocain.
              </p>
              <p className="text-lg text-muted-foreground">
                Chaque projet est une symphonie où discipline, subtilité et excellence s'orchestrent pour créer une
                mélodie parfaite entre votre marque marocaine et votre public cible.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Notre mission au Maroc"
                className="w-full h-80 object-cover rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les piliers qui guident chacune de nos actions et décisions au quotidien pour nos clients marocains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center text-primary mx-auto mb-4`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Histoire à Casablanca</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Depuis notre implantation au Maroc, nous n'avons cessé de grandir et d'innover
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-lg p-6 shadow-soft">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.event}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Prêt à faire partie de notre histoire marocaine ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez les 150+ entreprises marocaines qui nous font confiance pour leur croissance digitale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Link to="/contact">
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 bg-transparent"
            >
              <Link to="/case-studies">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Layout from "@/components/Layout"
import { Link } from "react-router-dom"
import { ArrowRight, Eye, TrendingUp, BarChart3, Edit3, Target, Share2, Monitor } from "lucide-react"

const IndexNoiise = () => {
  // Client logos from the images
  const clientLogos = [
    "LES ARCS",
    "LEROY MERLIN Studio",
    "ClubMed",
    "vertbaudet",
    "Les Galeries Lafayette Voyage",
    "BARNES",
    "King MARCEL",
  ]

  const awards = [
    { year: "2024", title: "Meilleure campagne SEA", category: "Gold" },
    { year: "2024", title: "Meilleure campagne search marketing", category: "Gold" },
    { year: "2022", title: "Meilleure campagne SEO", category: "Gold" },
    { year: "2022", title: "Meilleure campagne content marketing", category: "Gold" },
  ]

  const stats = [
    { value: "+55%", label: "de croissance moyenne chez nos clients", color: "text-yellow-500" },
    { value: "+2662%", label: "de croissance pour notre meilleure campagne", color: "text-blue-500" },
    { value: "4.9/5", label: "Sur Google Review", color: "text-green-500" },
  ]

  const expertises = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Référencement naturel",
      description:
        "Positionnez votre site sur les premiers résultats de Google pour générer durablement des visites qualifiées avec l'accompagnement de notre agence SEO à Paris, à Lyon et dans toute la France !",
      color: "bg-blue-100",
      buttonText: "Agence SEO",
      href: "/services/seo",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Référencement payant",
      description:
        "Menez des campagnes SEA d'achat de mots-clés performantes pour améliorer leur rentabilité ! Nous sommes certifiés agence Google Ads Partner Premium et Microsoft Advertising.",
      color: "bg-orange-100",
      buttonText: "Agence SEA",
      href: "/services/sea",
    },
    {
      icon: <Edit3 className="w-6 h-6" />,
      title: "Content Marketing",
      description:
        "Déployez une stratégie de contenu sur-mesure et faites-vous entendre avec le content marketing ! Nous imaginons et créons du contenu adapté à votre cible et à vos objectifs.",
      color: "bg-pink-100",
      buttonText: "Agence contenu",
      href: "/services/content",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Création de site internet",
      description:
        "Créer un site web esthétique, performant et optimisé pour la conversion du trafic grâce à notre agence web ! Nous vous aidons à concevoir ou à refondre votre site vitrine et e-commerce.",
      color: "bg-green-100",
      buttonText: "Agence web",
      href: "/services/web",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Web Analytics & Datas",
      description:
        "Collectez et analysez les données Analytics de votre site web pour mieux comprendre ses performances ! La donnée éclaire la prise de décision et souligne les résultats tout comme les axes d'amélioration.",
      color: "bg-yellow-100",
      buttonText: "Agence web analytics",
      href: "/services/analytics",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social media",
      description:
        "Renforcez votre image en ligne et tissez des liens avec votre communauté grâce au talent d'une agence de social media management ! Les médias sociaux permettent de répondre à beaucoup d'objectifs marketing.",
      color: "bg-pink-100",
      buttonText: "Agence social media",
      href: "/services/social",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Webdesign",
      description:
        "Facilitez la conversion de votre trafic en élaborant une navigation simplifiée respectant les usages web. Le webdesign s'inscrit parfaitement dans un travail d'optimisation du taux de conversion.",
      color: "bg-green-100",
      buttonText: "Agence webdesign",
      href: "/services/webdesign",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Social Ads",
      description:
        "Optimiser ou créez des campagnes Social media Ads mieux ciblées et plus performantes ! L'immense audience des principaux réseaux sociaux permet d'atteindre votre cible à coup sûr.",
      color: "bg-orange-100",
      buttonText: "Agence social ads",
      href: "/services/social-ads",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Marketing digital",
      description:
        "Bénéficiez de toutes les compétences de notre équipe pluridisciplinaire avec un accompagnement global et complet ! La synergie entre les services favorise le succès de votre projet.",
      color: "bg-orange-100",
      buttonText: "Agence webmarketing",
      href: "/services/marketing",
    },
  ]

  return (
    <Layout>
      {/* Hero Section - Updated with Casablanca focus and Moroccan identity */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <div className="mb-6">
            <Badge variant="outline" className="mb-8 text-primary border-primary/30">
              Agence Digitale - Casablanca
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground">
              Votre stratégie digitale à Casablanca va faire
              <br />
              <span className="inline-block">
                la{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-green-600 via-red-600 to-green-600 bg-clip-text text-transparent font-black">
                    différence !
                  </span>
                  <div className="absolute -top-2 -right-2 w-6 h-4 bg-gradient-to-r from-green-600 to-red-600 rounded-sm transform rotate-12 opacity-80"></div>
                </span>
              </span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl mb-6 text-foreground leading-relaxed">
              Notre agence digitale accompagne les entreprises marocaines dans leur croissance grâce à des solutions
              digitales innovantes et adaptées.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              <strong>Basée à Casablanca</strong>, notre équipe d'experts passionnés imagine et déploie votre
              <strong> stratégie digitale dans une logique de performances et de rentabilité</strong>. Nous{" "}
              <strong>faisons entendre la voix de nos clients marocains et développons leur croissance</strong> sur
              l'ensemble des leviers digitaux.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button asChild className="btn-noiise text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact">
                Contactez-nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              className="btn-secondary text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link to="/about">Découvrir l'agence</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600/10 to-red-600/10 rounded-full border border-green-600/20">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-sm font-medium text-foreground">Fiers d'être marocains</span>
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Noiise Style */}
      <section className="py-12 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section - Noiise Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary">Nos expertises récompensées</h2>
            </div>
          </div>

          {/* Awards with Profile Image (Noiise style) */}
          <div className="flex items-center justify-center mb-16">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-team bg-primary">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                alt="Award Winner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">🏆</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{award.year}</div>
                      <div className="text-sm text-muted-foreground">{award.title}</div>
                    </div>
                  </div>
                  <Badge variant="secondary">{award.category}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild className="btn-secondary">
              <Link to="/about">Découvrir nos collaborations primées</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Une équipe d'experts digitaux basée à{" "}
                <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
                  Casablanca
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
                  prête à accompagner
                </span>{" "}
                les entreprises marocaines
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Notre agence digitale à Casablanca unit ses talents, compétences et savoir-faire pour un accompagnement
                toujours plus personnalisé et adapté au marché marocain. Notre challenge ? Vous mettre sur le devant de
                la scène avec un site web qui parle à votre public marocain et qui est optimisé pour être en première
                page des moteurs de recherche, des réseaux qui mettent en avant vos valeurs et vos produits et des
                campagnes publicitaires qui augmentent votre taux de conversion !
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                WECLAIM Casablanca, c'est peut-être un détail pour vous, mais pour nous, ce nom veut dire beaucoup. Ce
                nom fait écho à ce que nous sommes et ce que nous voulons être demain pour les entreprises marocaines.
              </p>

              <Button asChild className="btn-noiise bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">
                  Demandez un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 rounded-3xl overflow-hidden relative">
                <img
                  src="/weclaim-site-replica-main/src/assets/hero-building.jpg"
                  alt="Notre agence digitale à Casablanca"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <Button className="bg-white text-primary hover:bg-white/90 rounded-full w-16 h-16 text-xl">▶</Button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Découvrir notre agence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synergies Section - Noiise Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl overflow-hidden relative flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Collaboration et expertise"
                  className="w-full h-full object-cover"
                />

                {/* Green Pills - Noiise Style */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-4">
                  <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg">Performance</div>
                  <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg">Collaboration</div>
                  <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg">Expertises</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Des <span className="text-green-500">synergies pour une refonte</span> qui vont au-delà du design
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                La{" "}
                <Link to="/services" className="text-primary hover:underline">
                  refonte d'un site
                </Link>{" "}
                se limite rarement à son design. C'est une occasion idéale de repenser tous les aspects du site. Au sein
                de notre agence digitale, nous intégrons tous les métiers du web mobilisés pour une refonte de site
                globale. Nos experts en design, en développement technique et en référencement SEO travaillent main dans
                la main en mode projet pour lever tous les freins à l'atteinte de vos objectifs.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                La mise en place d'une méthodologie éprouvée permet de fluidifier et d'optimiser l'ensemble des étapes
                clés : de la conception graphique des maquettes jusqu'au recettage SEO. Cette organisation vous offre
                plus de sérénité et de transparence tout au long du processus. Réduisez les risques pour votre
                référencement et les difficultés inhérentes à un projet de refonte en le confiant à une agence
                multidisciplinaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className={`text-6xl md:text-7xl font-black ${stat.color}`}>{stat.value}</div>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start mb-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Les expertises de notre agence digitale pour{" "}
                <span className="yellow-highlight">vous faire entendre</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nous maîtrisons de nombreux domaines d'expertises – sans être exclusifs. Vous travaillez déjà avec
                d'autres agences web ou souhaitez profiter des services d'une agence de marketing digital complète ?
                Nous nous adaptons pour nous mettre au service de votre projet… et de votre croissance !
              </p>
              <p className="text-sm text-muted-foreground mb-8">Les certifications de notre agence web marketing</p>
              <div className="flex space-x-4 opacity-60">
                <div className="text-xs">QASEO</div>
                <div className="text-xs">Google Analytics</div>
                <div className="text-xs">Google Partner</div>
                <div className="text-xs">CESEO</div>
                <div className="text-xs">Meta Business Partner</div>
              </div>
            </div>

            <div className="lg:w-2/3 lg:pl-12">
              <div className="grid md:grid-cols-2 gap-8">
                {expertises.slice(0, 6).map((expertise, index) => (
                  <div key={index} className="space-y-4">
                    <div
                      className={`w-16 h-16 ${expertise.color} rounded-2xl flex items-center justify-center text-primary`}
                    >
                      {expertise.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{expertise.title}</h3>
                    <p className="text-muted-foreground">{expertise.description}</p>
                    <Button asChild className="btn-noiise">
                      <Link to={expertise.href}>
                        {expertise.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {expertises.slice(6).map((expertise, index) => (
              <div key={index} className="space-y-4">
                <div
                  className={`w-16 h-16 ${expertise.color} rounded-2xl flex items-center justify-center text-primary`}
                >
                  {expertise.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{expertise.title}</h3>
                <p className="text-muted-foreground">{expertise.description}</p>
                <Button asChild className="btn-noiise">
                  <Link to={expertise.href}>
                    {expertise.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-green-500">528 clients</span> en parlent mieux que nous
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Gudrun Sjödén 🇸🇪</h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-bold text-green-500">+36% de chiffre d'affaires</span> sur un secteur en crise
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Neurasmus</h4>
                  <p className="text-sm text-muted-foreground">Transformation digitale réussie</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-6">Vous avez des objectifs en tête ?</p>
            <Button asChild className="btn-noiise text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">
                Demander un audit gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Vous êtes arrivé jusqu'ici ?</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
            N'en restons pas là.
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Contactez notre agence de Casablanca et obtenez des solutions digitales adaptées à vos besoins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-noiise text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">
                Demandez un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              className="btn-secondary text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link to="/case-studies">Voir nos succès</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexNoiise

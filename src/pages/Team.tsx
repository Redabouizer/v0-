import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Layout from "@/components/Layout"
import { Link } from "react-router-dom"
import { Linkedin, Twitter, Mail, Award, Users, MapPin, Calendar } from "lucide-react"

const Team = () => {
  const leadership = [
    {
      name: "Robert Wilson",
      role: "CEO & Fondateur",
      image: "/assets/team-member-6.jpg",
      bio: "25+ années d'expérience dans le digital. Ancien VP Marketing chez Google, passionné d'innovation et de performance.",
      expertise: ["Stratégie", "Leadership", "Innovation"],
      location: "Paris",
      joinDate: "2009",
      linkedin: "#",
      twitter: "#",
      email: "robert@weclaim.com",
    },
    {
      name: "Michelle Davis",
      role: "COO & Directrice Stratégie",
      image: "/assets/team-member-3.jpg",
      bio: "Experte en transformation digitale avec 20 ans d'expérience chez McKinsey & Company. Spécialiste des stratégies data-driven.",
      expertise: ["Stratégie", "Analytics", "Transformation"],
      location: "Paris",
      joinDate: "2010",
      linkedin: "#",
      twitter: "#",
      email: "michelle@weclaim.com",
    },
  ]

  const departments = [
    {
      name: "Acquisition",
      description: "Experts en SEO, SEA et acquisition digitale",
      count: 24,
      color: "bg-primary",
      members: [
        {
          name: "Sarah Johnson",
          role: "Directrice SEO",
          image: "/assets/team-member-1.jpg",
          expertise: ["SEO", "Content", "Analytics"],
          location: "Paris",
          joinDate: "2015",
        },
        {
          name: "Carlos Rodriguez",
          role: "Lead SEA",
          image: "/assets/team-member-2.jpg",
          expertise: ["Google Ads", "Facebook Ads", "Analytics"],
          location: "Lyon",
          joinDate: "2017",
        },
      ],
    },
    {
      name: "Création",
      description: "Designers, développeurs et créatifs",
      count: 18,
      color: "bg-secondary",
      members: [
        {
          name: "David Kim",
          role: "Directeur Créatif",
          image: "/assets/team-member-4.jpg",
          expertise: ["Design", "UX/UI", "Branding"],
          location: "Paris",
          joinDate: "2016",
        },
        {
          name: "Emily Chen",
          role: "Lead Developer",
          image: "/assets/team-member-5.jpg",
          expertise: ["React", "Node.js", "DevOps"],
          location: "Bordeaux",
          joinDate: "2018",
        },
      ],
    },
  ]

  const stats = [
    { value: "85", label: "Consultants Experts", icon: Users },
    { value: "4", label: "Agences en France", icon: MapPin },
    { value: "15", label: "Années d'Excellence", icon: Calendar },
    { value: "200+", label: "Projets Réussis", icon: Award },
  ]

  const offices = [
    { city: "Paris", address: "15 rue de la Paix", team: 45, isHQ: true },
    { city: "Lyon", address: "32 rue Bellecour", team: 20, isHQ: false },
    { city: "Bordeaux", address: "18 cours de l'Intendance", team: 12, isHQ: false },
    { city: "Lille", address: "25 rue Nationale", team: 8, isHQ: false },
  ]

  return (
    <Layout showFloatingTeam={false}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/30">
            Notre Équipe
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            L'équipe qui fait du <span className="yellow-highlight font-black">claiiiiiim !</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Découvrez les talents passionnés qui imaginent et déploient votre stratégie digitale dans une logique de
            performances et de rentabilité.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Direction & Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fondateurs et dirigeants qui portent la vision WeClaim depuis plus de 15 ans
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-large transition-all">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-white shadow-team">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white">
                    <Award className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-foreground">{leader.name}</h3>
                <Badge variant="secondary" className="mb-4">
                  {leader.role}
                </Badge>

                <p className="text-muted-foreground mb-6 leading-relaxed">{leader.bio}</p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {leader.expertise.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4" />
                  <span>{leader.location}</span>
                  <span>•</span>
                  <Calendar className="h-4 w-4" />
                  <span>Depuis {leader.joinDate}</span>
                </div>

                <div className="flex justify-center space-x-3">
                  <Button size="sm" variant="outline" className="rounded-full p-2 bg-transparent">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full p-2 bg-transparent">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full p-2 bg-transparent">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Teams */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Nos Départements d'Excellence</h2>
            <p className="text-muted-foreground">Des équipes spécialisées pour chaque expertise digitale</p>
          </div>

          {departments.map((dept, deptIndex) => (
            <div key={deptIndex} className="mb-16">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div
                    className={`w-12 h-12 ${dept.color} rounded-full flex items-center justify-center text-white mr-4`}
                  >
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-foreground">{dept.name}</h3>
                    <p className="text-muted-foreground">{dept.description}</p>
                  </div>
                </div>
                <Badge variant="secondary">{dept.count} experts</Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dept.members.map((member, memberIndex) => (
                  <Card key={memberIndex} className="p-6 text-center hover:shadow-medium transition-all bg-white">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-[3px] border-white shadow-soft">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{member.role}</p>

                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {member.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{member.location}</span>
                      <span>•</span>
                      <span>{member.joinDate}</span>
                    </div>
                  </Card>
                ))}

                {/* Show more placeholder cards */}
                {Array.from({ length: Math.min(2, dept.count - dept.members.length) }).map((_, index) => (
                  <Card key={`placeholder-${index}`} className="p-6 text-center bg-muted/50 border-dashed">
                    <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      +{dept.count - dept.members.length} autres experts
                    </p>
                    <Button size="sm" variant="outline">
                      Voir l'équipe
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Nos Agences en France</h2>
            <p className="text-muted-foreground">4 bureaux pour être au plus proche de nos clients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-medium transition-all ${office.isHQ ? "border-primary bg-primary/5" : "bg-white"}`}
              >
                {office.isHQ && (
                  <Badge variant="default" className="mb-4">
                    Siège Social
                  </Badge>
                )}

                <h3 className="text-xl font-bold text-foreground mb-2">{office.city}</h3>
                <p className="text-muted-foreground text-sm mb-4">{office.address}</p>

                <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{office.team} collaborateurs</span>
                </div>

                <Button size="sm" variant="outline">
                  Voir l'agence
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Envie de faire du <span className="yellow-highlight font-black text-foreground">claiiiiiim</span> avec nous
            ?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Rejoignez une équipe passionnée et dynamique qui façonne l'avenir du marketing digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-foreground px-8 py-4 font-semibold"
            >
              <Link to="/careers">Voir nos offres</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 bg-transparent"
            >
              <Link to="/contact">Candidature spontanée</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Team

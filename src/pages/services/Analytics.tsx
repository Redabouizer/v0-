import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Target, TrendingUp, Eye, CheckCircle, Zap, PieChart } from "lucide-react";

const Analytics = () => {
  const services = [
    {
      title: "Google Analytics 4",
      description: "Configuration et optimisation de GA4 pour un suivi précis de vos performances web.",
      features: ["Configuration GA4", "Événements personnalisés", "Audiences avancées", "Rapports sur-mesure"],
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Google Tag Manager",
      description: "Mise en place et gestion de vos tags pour un tracking complet et organisé.",
      features: ["Configuration GTM", "Tags événements", "Variables & déclencheurs", "Debug & validation"],
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Data Studio & Looker",
      description: "Création de dashboards visuels pour analyser vos données marketing en temps réel.",
      features: ["Dashboards interactifs", "Rapports automatisés", "Visualisations avancées", "Partage équipe"],
      icon: <PieChart className="w-8 h-8" />
    },
    {
      title: "Attribution Marketing", 
      description: "Analyse des parcours clients pour optimiser l'attribution de vos conversions.",
      features: ["Modèles attribution", "Parcours multicanal", "ROI par canal", "Optimisation budget"],
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const metrics = [
    {
      category: "Acquisition",
      kpis: ["Trafic organique", "Coût par clic", "Taux de conversion", "ROAS"]
    },
    {
      category: "Engagement", 
      kpis: ["Temps sur site", "Pages/session", "Taux de rebond", "Événements"]
    },
    {
      category: "Conversion",
      kpis: ["Taux conversion", "Valeur commande", "LTV client", "Attribution"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Audit Analytics",
      description: "Analyse de votre configuration actuelle et identification des opportunités."
    },
    {
      step: "02", 
      title: "Plan de Mesure",
      description: "Définition des KPIs et objectifs de tracking alignés sur votre business."
    },
    {
      step: "03",
      title: "Implémentation", 
      description: "Configuration des outils et mise en place du tracking personnalisé."
    },
    {
      step: "04",
      title: "Reporting & Insights",
      description: "Création de rapports et analyse des données pour optimiser vos performances."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Web Analytics & Datas</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Analytics &{" "}
            <span className="yellow-highlight">Data Driven</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transformez vos données en insights actionnables. Notre expertise en web analytics 
            et data science vous aide à optimiser vos performances digitales.
          </p>
          <Button asChild className="btn-noiise text-lg px-8 py-4">
            <Link to="/contact">
              Analyser mes données
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos Services{" "}
              <span className="text-primary">Analytics</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
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

      {/* KPIs Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              KPIs que nous{" "}
              <span className="pink-highlight">Mesurons</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous identifions et suivons les métriques qui comptent vraiment 
              pour votre business et vos objectifs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{metric.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {metric.kpis.map((kpi, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm font-medium">
                      <Badge variant="outline" className="w-full justify-center">
                        {kpi}
                      </Badge>
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
              Notre Méthode{" "}
              <span className="text-primary">Data-Driven</span>
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

      {/* Tools & Technologies */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Outils & Technologies{" "}
              <span className="text-primary">Analytics</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Google Analytics 4",
              "Google Tag Manager", 
              "Google Data Studio",
              "Looker Studio",
              "Hotjar",
              "Mixpanel",
              "Amplitude",
              "Adobe Analytics"
            ].map((tool, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white">
                <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">{tool}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Impact de nos{" "}
              <span className="text-primary">Optimisations Analytics</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-green-500" />
              </div>
              <div className="text-5xl font-black text-green-500 mb-2">+180%</div>
              <p className="text-lg text-muted-foreground">Amélioration du tracking des conversions</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-blue-500" />
              </div>
              <div className="text-5xl font-black text-blue-500 mb-2">+95%</div>
              <p className="text-lg text-muted-foreground">Précision des données collectées</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-purple-500" />
              </div>
              <div className="text-5xl font-black text-purple-500 mb-2">-67%</div>
              <p className="text-lg text-muted-foreground">Temps d'analyse des rapports</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transformez vos données en avantage concurrentiel
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Notre expertise en web analytics et data science vous donne 
            les clés pour optimiser vos performances et ROI digital.
          </p>
          
          <Button asChild className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            <Link to="/contact">
              Auditer mes analytics
              <BarChart3 className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Analytics;

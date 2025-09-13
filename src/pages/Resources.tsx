import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "CURL : le Mantra qui révèle (vraiment) les marques aux IA",
      description: "Découvrez comment optimiser votre référencement naturel pour les algorithmes de demain.",
      category: "SEO",
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      illustration: "🤖"
    },
    {
      title: "WECLAIM obtient la médaille d'argent Ecovadis pour sa politique RSE",
      description: "Notre engagement pour une agence digitale plus responsable et durable.",
      category: "Actualités de l'agence",
      color: "bg-gradient-to-br from-green-100 to-green-200",
      illustration: "🏆"
    },
    {
      title: "Les 4 S Google : évolution du comportement digital",
      description: "Comprendre les nouveaux parcours clients à l'ère du mobile-first.",
      category: "Ads",
      color: "bg-gradient-to-br from-orange-100 to-orange-200",
      illustration: "📱"
    }
  ];

  const categories = [
    { name: "SEO", color: "bg-blue-100 text-blue-800" },
    { name: "Actualités de l'agence", color: "bg-gray-100 text-gray-800" },
    { name: "Ads", color: "bg-orange-100 text-orange-800" },
    { name: "Marketing Digital", color: "bg-primary/10 text-primary" }
  ];

  return (
    <Layout>
      {/* Hero Section - Noiise Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Centre de ressources{" "}
            <span className="yellow-highlight">
              le jukebox de WECLAIM
            </span>
          </h1>
        </div>
      </section>

      {/* Resources Grid - Noiise Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {resources.map((resource, index) => (
              <Card key={index} className={`${resource.color} p-8 rounded-3xl border-0 hover:shadow-lg transition-shadow cursor-pointer group`}>
                <div className="text-6xl mb-6">{resource.illustration}</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="rounded-full">
                    {resource.category}
                  </Badge>
                  <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Category Pills - Noiise Style */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`${category.color} px-6 py-2 rounded-full text-sm font-medium cursor-pointer hover:shadow-md transition-shadow`}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Noiise Pink Style */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video bg-white/10 rounded-3xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Notre équipe passionnée"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-pink-600/20 flex items-center justify-center">
                  <Button className="bg-white text-pink-600 hover:bg-white/90 rounded-full w-16 h-16 text-xl">
                    ▶
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Lire la vidéo</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Une équipe qui rit fort, parle fort, boit du café fort et des boissons 
                encore plus fortes. Qui obtient des résultats forts, s'amuse fort et 
                surtout aime ses clients très très fort. Bref, nous faisons du{" "}
                <strong className="font-black">bruiiiiiit !</strong> Oui, mais nous le faisons pour nos clients et nous le faisons bien !
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Une équipe{" "}
                <span className="font-black">passionnée, exubérante, volubile, débordante, exaltée...</span>
                <br />
                Bref, nous !
              </h2>
              
              <div className="bg-white rounded-lg inline-block">
                <Button asChild className="text-pink-600 font-semibold px-6 py-3 bg-white hover:bg-gray-50 rounded-lg">
                  <Link to="/team">
                    Je rejoins la team !
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Noiise Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Vous cherchez d'autres ressources ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explorez notre blog pour découvrir encore plus de contenus sur le marketing digital, 
            le référencement et les dernières tendances du web.
          </p>
          
          <Button asChild className="btn-noiise text-lg px-8 py-4">
            <Link to="/blog">
              Découvrir le blog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;

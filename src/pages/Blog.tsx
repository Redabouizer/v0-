import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Clock, User, ArrowRight, TrendingUp, MessageSquare, Eye } from "lucide-react";

const Blog = () => {
  const categories = [
    { name: "Tous", count: 42, active: true },
    { name: "SEO", count: 12, active: false },
    { name: "SEA", count: 8, active: false },
    { name: "Social Media", count: 15, active: false },
    { name: "Analytics", count: 7, active: false }
  ];

  const featuredPost = {
    title: "Comment optimiser votre stratégie digitale en 2024 ?",
    excerpt: "Découvrez les nouvelles tendances et meilleures pratiques pour maximiser votre présence digitale et générer plus de conversions cette année.",
    category: "Stratégie Digitale",
    author: "Sarah Johnson",
    date: "15 Mars 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    views: "2.4k",
    comments: 24
  };

  const blogPosts = [
    {
      title: "L'impact de l'IA sur le marketing digital",
      excerpt: "Comment l'intelligence artificielle révolutionne les stratégies marketing et les opportunités qu'elle offre.",
      category: "Innovation",
      author: "Carlos Rodriguez",
      date: "12 Mars 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop",
      views: "1.8k",
      comments: 16
    },
    {
      title: "ROI du SEO : Comment mesurer l'efficacité ?",
      excerpt: "Méthodes et KPIs essentiels pour évaluer le retour sur investissement de vos actions SEO.",
      category: "SEO",
      author: "Michelle Davis",
      date: "10 Mars 2024",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      views: "3.2k",
      comments: 31
    },
    {
      title: "Social Commerce : La nouvelle frontière",
      excerpt: "Stratégies pour transformer vos réseaux sociaux en véritables canaux de vente.",
      category: "Social Media",
      author: "David Kim",
      date: "8 Mars 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=300&fit=crop",
      views: "2.1k",
      comments: 19
    },
    {
      title: "Google Analytics 4 : Guide complet",
      excerpt: "Maîtrisez GA4 avec notre guide pratique et nos conseils d'experts pour optimiser votre tracking.",
      category: "Analytics",
      author: "Emily Chen",
      date: "5 Mars 2024",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      views: "4.1k",
      comments: 28
    },
    {
      title: "Tendances E-commerce 2024",
      excerpt: "Les évolutions à suivre pour rester compétitif dans le monde du commerce électronique.",
      category: "E-commerce",
      author: "Robert Wilson",
      date: "3 Mars 2024",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
      views: "2.8k",
      comments: 22
    },
    {
      title: "Optimisation des campagnes Google Ads",
      excerpt: "Techniques avancées pour améliorer vos performances SEA et réduire vos coûts d'acquisition.",
      category: "SEA",
      author: "Sarah Johnson",
      date: "1 Mars 2024",
      readTime: "11 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      views: "3.5k",
      comments: 35
    }
  ];

  return (
    <Layout showFloatingTeam={false}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/30">
            Blog & Actualités
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            L'expertise digitale qui fait du{" "}
            <span className="yellow-highlight font-black">
              claiiiiiim !
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos derniers articles, tendances du marché et conseils d'experts 
            pour optimiser votre stratégie digitale.
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

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              ⭐ Article à la une
            </h2>
          </div>

          <Card className="overflow-hidden max-w-4xl mx-auto hover:shadow-large transition-all">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Badge variant="secondary" className="mr-3">
                    {featuredPost.category}
                  </Badge>
                  <Badge variant="outline">À la une</Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <span>{featuredPost.date}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {featuredPost.views}
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {featuredPost.comments}
                    </div>
                  </div>
                  
                  <Button className="btn-noiise">
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Derniers Articles
            </h2>
            <p className="text-muted-foreground">
              Restez à jour avec nos dernières publications et insights digitaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-large transition-all bg-white">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-foreground line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views}
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                    
                    <Button size="sm" variant="outline" className="text-xs">
                      Lire plus
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="btn-secondary">
              Voir tous les articles
              <TrendingUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Restez informé de nos{" "}
            <span className="yellow-highlight font-black text-foreground">
              dernières actualités !
            </span>
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Recevez notre newsletter hebdomadaire avec les dernières tendances digitales 
            et nos conseils d'experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email..."
              className="flex-1 px-4 py-3 rounded-full text-foreground bg-white border-0 focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent-hover text-foreground px-6 py-3 rounded-full font-semibold">
              S'abonner
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

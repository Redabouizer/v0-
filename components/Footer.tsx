import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Footer = () => {
  return (
    <footer className="bg-white mt-16">
      {/* CTA Section - Updated with Moroccan styling */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vous êtes arrivé jusqu'ici ?</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">
            N'en restons pas là.
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-white/90">
            Contactez notre agence de Casablanca et obtenez des solutions digitales adaptées à vos besoins.
          </p>
          <div className="bg-white rounded-lg inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center text-blue-600 font-semibold px-6 py-3 hover:text-blue-700 transition-colors"
            >
              Demandez un devis
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-foreground tracking-tight">
                <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">We</span>
                Claim
              </span>
            </Link>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Casablanca</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">123 Boulevard Mohammed V</p>
                  <p className="text-muted-foreground">20000 Casablanca, Maroc</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <p className="text-muted-foreground">+212 5 22 XX XX XX</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <p className="text-muted-foreground">casablanca@weclaim.ma</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Expertises
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cas Clients
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Ressources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Nous découvrir
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Restez informé des dernières tendances du marketing digital au Maroc
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Votre email" className="flex-1 text-sm" />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                S'abonner
              </Button>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 WeClaim Casablanca. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

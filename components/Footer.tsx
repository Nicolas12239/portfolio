import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="w-full py-8 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NJI-MOLUH Nicolas</h3>
            <p className="text-muted-foreground mb-4">
              Développeur web spécialisé dans la création de sites web et d'applications à la fois esthétiques et fonctionnels.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/Nicolas12239" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/nicolas-nji-moluh-9bb269298/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mail:nicolas.njimoluh@lomebs.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="tel:+22896095435" aria-label="Phone">
                  <Phone className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Compétences</Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projets</Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experiences</Link>
              </li>
              <li>
                <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">Educations</Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="mailto:nicolas.njimoluh@lomebs.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  nicolas.njimoluh@lomebs.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="tel:+22896095435" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +228 96-09-54-35
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NJI-MOLUH Nicolas.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
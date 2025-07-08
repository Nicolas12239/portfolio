"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = "Web Developer"
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 150)
      
      return () => clearTimeout(timeout)
    }
  }, [typedText])
  
  return (
    <section id="hero" className="w-full py-20 md:py-32 flex flex-col items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Bonjour, je suis <span className="text-primary">Nicolas</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium mt-2 flex items-center">
                <span>{typedText}</span>
                <span className="animate-pulse ml-1">|</span>
              </h2>

              <p className="text-muted-foreground text-lg mt-6 max-w-xl">
                Étant une personne dynamique et pleins de ressources, je suis passionné d’informatique et de tout ce qui a trait de prés ou de loin au digital.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild>
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a href="app/public/NJI-MOLUH CV.pdf" download>
  <Button variant="outline">
    <Download className="mr-2 h-4 w-4" /> Télécharger le CV
  </Button>
</a>

            </motion.div>

            <motion.div 
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="https://github.com/Nicolas12239" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/nicolas-nji-moluh-9bb269298/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mail:nicolas.nicolasnjimoluh0@lgmail.com">
                <Button variant="ghost" size="icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="tel:+22896095435">
                <Button variant="ghost" size="icon" aria-label="Phone">
                  <Phone className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
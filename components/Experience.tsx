"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, Calendar } from 'lucide-react'

type Experience = {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: '1',
    position: 'Concepteur graphique',
    company: 'FLYSMART',
    location: 'Lomé, Togo',
    startDate: 'Nov 2024',
    endDate: 'Dec 2024',
    description: [
      'Concepteur du Logo de l\'agence',
      'Concepteur de flyers de publicité pour l\'agence',
      'Concepteur du nom de l\'agence',
    ]
  },
  {
    id: '2',
    position: 'Développeur web',
    company: 'Intello de Lomé Business School',
    location: 'Lomé, Togo',
    startDate: 'Apr 2024',
    endDate: 'Apr 2024',
    description: [
      'Développeur d\'une plateforme de crowdfunding (myhelpfunding.netlify.app)',
      'Co-Concepteur du plan cahier de charge',
      'Finaliste de la compétition',
    ]
  },
  {
    id: '3',
    position: 'Chargé clientèle',
    company: 'EWP-SHOP',
    location: 'Lomé, Togo',
    startDate: '2023',
    endDate: '2024',
    description: [
      'Accueil et vente des produits aux clients',
      'Teneur de contenu publicitaire sur les réseaux',
      'Réceptionniste des nouveaux produits que reçoit l\'entreprise',
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="w-full py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Expériences professionnelles.</h2>
          
        </motion.div>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((experience, index) => (
            <motion.div 
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index === 0 ? 'is-active' : ''}`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow group-[.is-active]:bg-primary z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase className="h-4 w-4 group-[.is-active]:text-white" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] card p-4 rounded-lg shadow-sm">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">{experience.position}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {experience.startDate} - {experience.endDate}
                      </div>
                    </div>
                    <CardDescription>
                      {experience.company} • {experience.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
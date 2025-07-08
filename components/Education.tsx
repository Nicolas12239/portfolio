"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, Calendar } from 'lucide-react'

type Education = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

const educations: Education[] = [
  {
    id: '1',
    degree: 'Bachelor 2 Système d\'information',
    institution: 'Lomé Business School',
    location: 'Lomé, Togo',
    startDate: '2024',
    endDate: '2025',
    description: 'Specializing in Web Development and Database Management.'
  },
  {
    id: '2',
    degree: 'Bachelor 1 Système d\'information',
    institution: 'Lomé Business School',
    location: 'Lomé, Togo',
    startDate: '2023',
    endDate: '2024',
    description: 'Focus on programming fundamentals and system architecture.'
  },
  {
    id: '3',
    degree: 'Baccalauréat littéraire',
    institution: 'Réveil d\'or',
    location: 'Lomé, Togo',
    startDate: '2022',
    endDate: '2023',
    description: 'Literary Baccalaureate with a focus on languages and humanities.'
  }
]

const Education = () => {
  return (
    <section id="education" className="w-full py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          <p className="text-muted-foreground mt-2">Mon parcours éducatif.</p>
        </motion.div>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {educations.map((education, index) => (
            <motion.div 
              key={education.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index === 0 ? 'is-active' : ''}`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow group-[.is-active]:bg-primary z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <GraduationCap className="h-4 w-4 group-[.is-active]:text-white" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] card p-4 rounded-lg shadow-sm">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">{education.degree}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {education.startDate} - {education.endDate}
                      </div>
                    </div>
                    <CardDescription>
                      {education.institution} • {education.location}
                    </CardDescription>
                  </CardHeader>
                  
                  {education.description && (
                    <CardContent>
                      <p className="text-sm">{education.description}</p>
                    </CardContent>
                  )}
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
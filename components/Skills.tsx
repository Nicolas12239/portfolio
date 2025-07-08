"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Code, Database, Layout, Figma, FileCode, Terminal, 
  PanelRight, Crop, Languages, Palette
} from 'lucide-react'

type Skill = {
  name: string;
  level: 'débutant' | 'intermediaire' | 'avancer' | 'expert';
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'language';
}

const Skills = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'HTML', level: 'expert', category: 'frontend' },
    { name: 'CSS', level: 'expert', category: 'frontend' },
    { name: 'JavaScript', level: 'intermediaire', category: 'frontend' },
    { name: 'React', level: 'débutant', category: 'frontend' },
    { name: 'Next.js', level: 'débutant', category: 'frontend' },
    { name: 'Flutter', level: 'débutant', category: 'frontend' },
    
    // Backend
    { name: 'PHP', level: 'intermediaire', category: 'backend' },
    { name: 'Laravel', level: 'débutant', category: 'backend' },
    { name: 'Python', level: 'débutant', category: 'backend' },
    { name: 'C', level: 'débutant', category: 'backend' },
    { name: 'MySQL', level: 'intermediate', category: 'backend' },
    
    // Design
    { name: 'Figma', level: 'débutant', category: 'design' },
    { name: 'Canva', level: 'avancer', category: 'design' },
    { name: 'Framer', level: 'débutant', category: 'design' },
    
    // Tools
    { name: 'Git', level: 'intermediaire', category: 'tools' },
    { name: 'MS Project', level: 'intermediaire', category: 'tools' },
    { name: 'Workbench', level: 'intermediaire', category: 'tools' },
    { name: 'Pack Office', level: 'intermediaire', category: 'tools' },
    { name: 'No code (buble)', level: 'intermediaire', category: 'tools' },
    
    // Languages
    { name: 'French', level: 'expert', category: 'language' },
    { name: 'English', level: 'intermediaire', category: 'language' },
  ]
  
  const [filter, setFilter] = useState<string | null>(null)
  
  const filterButtons = [
    { label: 'All', value: null, icon: Code },
    { label: 'Frontend', value: 'frontend', icon: Layout },
    { label: 'Backend', value: 'backend', icon: Database },
    { label: 'Design', value: 'design', icon: Palette },
    { label: 'Tools', value: 'tools', icon: Terminal },
    { label: 'Langages', value: 'language', icon: Languages },
  ]
  
  const filteredSkills = filter 
    ? skills.filter(skill => skill.category === filter) 
    : skills
  
  const getLevelColor = (level: Skill['level']) => {
    switch(level) {
      case 'débutant': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'intermediaire': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'avancer': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return '';
    }
  }
  
  const getIcon = (category: Skill['category']) => {
    switch(category) {
      case 'frontend': return <Layout className="h-4 w-4 mr-1" />;
      case 'backend': return <Database className="h-4 w-4 mr-1" />;
      case 'design': return <Palette className="h-4 w-4 mr-1" />;
      case 'tools': return <Terminal className="h-4 w-4 mr-1" />;
      case 'language': return <Languages className="h-4 w-4 mr-1" />;
      default: return null;
    }
  }

  return (
    <section id="skills" className="w-full py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">Mes compétences</h2>
          <p className="text-muted-foreground mt-2">Présentation de mon expertise technique</p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filterButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <Button
                key={btn.label}
                variant={filter === btn.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(btn.value)}
                className="mb-2"
              >
                <Icon className="h-4 w-4 mr-2" /> {btn.label}
              </Button>
            )
          })}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index % 4) }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="flex items-center">
                      {getIcon(skill.category)}
                      <h3 className="font-medium">{skill.name}</h3>
                    </div>
                    <Badge className={getLevelColor(skill.level)}>
                      {skill.level}
                    </Badge>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div 
                      className="bg-primary h-2 rounded-full"
                      style={{ 
                        width: skill.level === 'débutant' ? '25%' :
                              skill.level === 'intermediaire' ? '50%' :
                              skill.level === 'avancer' ? '75%' : '100%'
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
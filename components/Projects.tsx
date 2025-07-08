"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github, Plus } from 'lucide-react'
import Link from 'next/link'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'design' | 'managerial';
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'MyHelpFunding Platform',
      description: 'Une plateforme de crowfunding mise en place dans le cadre de Seic à la LBS, qui consiste à aider les porteur de projets à avoir des financements grâce à la plateforme.',
      image: 'app/public/IMAGE MYHELP.JPG',
      demoUrl: 'https://myhelpfunding.netlify.app',
      githubUrl: 'https://github.com',
      technologies: ['Boostrap', 'Css', 'MySql'],
      category: 'web'
    },
    {
      id: '2',
      title: 'EWP-Shop ',
      description: 'Une entreprise basée sur la vente de produits purement Apple.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      demoUrl: '',
      githubUrl: '',
      technologies: [''],
      category: 'managerial'
    },
    {
      id: '3',
      title: 'FLYSMART ',
      description: 'Une entreprise de vente de billet d avions et de billets d hotels.',
      image: 'https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg',
      demoUrl: '',
      githubUrl: '',
      technologies: [''],
      category: 'design'
    },
    {
      id: '4',
      title: 'UniFind',
      description: 'Site web et mobile permettant à des chercheurs d universités de pouvoir retrouvé assez rapidement des écoles adaptées et à être suivi durant leur inscriptions .',
      image: 'app/public/UniFind.jepg.png',
      demoUrl: 'https://flourishing-lolly-39d9c7.netlify.app/',
      githubUrl: '',
      technologies: ['Nextjs, react, MySql'],
      category: 'web'
    }
  ])
  
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    image: '',
    demoUrl: '',
    githubUrl: '',
    technologies: [],
    category: 'web'
  })
  
  const [techInput, setTechInput] = useState('')
  
  const handleAddTech = () => {
    if (techInput.trim() && !newProject.technologies.includes(techInput.trim())) {
      setNewProject({
        ...newProject,
        technologies: [...newProject.technologies, techInput.trim()]
      })
      setTechInput('')
    }
  }
  
  const handleRemoveTech = (tech: string) => {
    setNewProject({
      ...newProject,
      technologies: newProject.technologies.filter(t => t !== tech)
    })
  }
  
  const handleSubmit = () => {
    if (newProject.title && newProject.description) {
      setProjects([
        ...projects,
        {
          ...newProject,
          id: Date.now().toString()
        }
      ])
      
      setNewProject({
        title: '',
        description: '',
        image: '',
        demoUrl: '',
        githubUrl: '',
        technologies: [],
        category: 'web'
      })
    }
  }

  return (
    <section id="projects" className="w-full py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight">Mes Projets</h2>
            <p className="text-muted-foreground mt-2"></p>
          </motion.div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4 md:mt-0">
                <Plus className="h-4 w-4 mr-2" /> Ajouter Projets
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Ajouter un nouveau projet</DialogTitle>
                <DialogDescription>
                  
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">Title</Label>
                  <Input 
                    id="title" 
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="col-span-3" 
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">Description</Label>
                  <Textarea 
                    id="description" 
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    className="col-span-3" 
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="image" className="text-right">Image URL</Label>
                  <Input 
                    id="image" 
                    value={newProject.image}
                    onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                    className="col-span-3" 
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="demoUrl" className="text-right">Demo URL</Label>
                  <Input 
                    id="demoUrl" 
                    value={newProject.demoUrl}
                    onChange={(e) => setNewProject({...newProject, demoUrl: e.target.value})}
                    className="col-span-3" 
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="githubUrl" className="text-right">GitHub URL</Label>
                  <Input 
                    id="githubUrl" 
                    value={newProject.githubUrl}
                    onChange={(e) => setNewProject({...newProject, githubUrl: e.target.value})}
                    className="col-span-3" 
                  />
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">Category</Label>
                  <select 
                    id="category"
                    value={newProject.category}
                    onChange={(e) => setNewProject({...newProject, category: e.target.value as any})}
                    className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="web">Web</option>
                    <option value="mobile">Mobile</option>
                    <option value="design">Design</option>
                    <option value="managerial">Managerial</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="technologies" className="text-right">Technologies</Label>
                  <div className="col-span-3 flex gap-2">
                    <Input 
                      id="technologies" 
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      placeholder="Add technology and press Enter"
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTech())}
                    />
                    <Button type="button" onClick={handleAddTech}>Add</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="col-start-2 col-span-3 flex flex-wrap gap-2">
                    {newProject.technologies.map(tech => (
                      <Badge key={tech} variant="secondary" className="cursor-pointer" onClick={() => handleRemoveTech(tech)}>
                        {tech} ×
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button type="button" onClick={handleSubmit}>Save Project</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="design">Managerial</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === 'web').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mobile">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === 'mobile').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === 'design').map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent>
          <CardDescription className="text-sm line-clamp-3">
            {project.description}
          </CardDescription>
        </CardContent>
        
        <CardFooter className="mt-auto flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" /> Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default Projects
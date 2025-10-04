import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Chatbot for enterprise",
      description: "A modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["Python", "OpenAI", "Milvis", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/maiphong0411/",
      liveUrl: "",
      image: "https://atpro.com.vn/wp-content/uploads/2024/01/chatbot-la-gi-1.jpg"
    },
    {
      title: "Code Generation",
      description: "A code generation model trained on a large corpus of programming languages to assist developers in writing code faster and more efficiently.",
      technologies: ["Pytorch", "Tokenizer", "DDP", "Mixed-precision training"],
      githubUrl: "https://github.com/maiphong0411/code_generation",
      liveUrl: "",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
    {
      title: "Mini RAG",
      description: "A Retrieval-Augmented Generation (RAG) system that combines a pre-trained language model with a vector database to provide accurate and context-aware responses.",
      technologies: ["LLM", "ChromaDB", "ReACT", "Python"],
      githubUrl: "https://github.com/maiphong0411/miniRAG",
      liveUrl: "",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my work and skills, built with modern web technologies and optimized for performance.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://portfolio-demo.com",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization and automated reporting features.",
      technologies: ["React", "D3.js", "Python", "MongoDB", "Express"],
      githubUrl: "https://github.com/username/analytics",
      liveUrl: "https://analytics-demo.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, progress tracking, and interactive learning modules for students and instructors.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
      githubUrl: "https://github.com/username/lms",
      liveUrl: "https://lms-demo.com",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
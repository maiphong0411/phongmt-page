import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Rocket, Users } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive user interfaces with attention to detail."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams using agile methodologies and modern tools."
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "Git", "Figma", "Tailwind CSS", "Next.js"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with a strong background in machine learning and software engineering.
            I love training neutral network and building intelligent agents from scratch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Experience Story */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Started learning Information Technology at HUST with 5-years engineer degree.
                After graduation, I had a great chance to work at VinBigData and VinBrain through VinGroup AI Training Program. 
                During this period, I gained valuable experience in developing and deploying machine learning models.
              </p>
              <p>
                Currently, I am working as Data Scientist at Johnson and Johnson through VMO Holdings. 
                I am responsible for building GenAI applications for Johnson & Johnson to increase content creating performance. Also, I am going deeply to ad-hoc analysis to understand the business problem and provide the valuable insights.
              </p>
              <p>
                My future goal is to bring AI to many applications and I always believe that AI will help our life better.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
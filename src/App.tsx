import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { SkillsSection } from "@/components/ui/skills-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <section id="hero">
            <HeroSection />
          </section>
          <AboutSection />
          <section id="skills">
            <SkillsSection />
          </section>
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

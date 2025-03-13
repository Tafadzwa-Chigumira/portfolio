"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubLogo, Envelope, LinkedinLogo, ArrowSquareOut, List, X } from "@phosphor-icons/react/dist/ssr";


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; 


interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

interface SkillCategory {
  name: string;
  skills: string[];
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setActiveSection(sectionId);
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      setFormStatus("error");
      console.error("Form submission error:", error);
    }
  };
  
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen p-10">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">Tafadzwa Chigumira</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link 
              href="#home" 
              className={cn(
                "transition-colors hover:text-foreground/80", 
                activeSection === "home" ? "text-foreground" : "text-foreground/60"
              )}
              onClick={() => handleNavClick("home")}
            >
              Home
            </Link>
            <Link 
              href="#projects" 
              className={cn(
                "transition-colors hover:text-foreground/80", 
                activeSection === "projects" ? "text-foreground" : "text-foreground/60"
              )}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </Link>
            <Link 
              href="#skills" 
              className={cn(
                "transition-colors hover:text-foreground/80", 
                activeSection === "skills" ? "text-foreground" : "text-foreground/60"
              )}
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </Link>
            <Link 
              href="#about" 
              className={cn(
                "transition-colors hover:text-foreground/80", 
                activeSection === "about" ? "text-foreground" : "text-foreground/60"
              )}
              onClick={() => handleNavClick("about")}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className={cn(
                "transition-colors hover:text-foreground/80", 
                activeSection === "contact" ? "text-foreground" : "text-foreground/60"
              )}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <List className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 w-full bg-background border-b p-4 shadow-lg">
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              <Link 
                href="#home" 
                className={cn(
                  "transition-colors hover:text-foreground/80 py-2", 
                  activeSection === "home" ? "text-foreground" : "text-foreground/60"
                )}
                onClick={() => handleNavClick("home")}
              >
                Home
              </Link>
              <Link 
                href="#projects" 
                className={cn(
                  "transition-colors hover:text-foreground/80 py-2", 
                  activeSection === "projects" ? "text-foreground" : "text-foreground/60"
                )}
                onClick={() => handleNavClick("projects")}
              >
                Projects
              </Link>
              <Link 
                href="#skills" 
                className={cn(
                  "transition-colors hover:text-foreground/80 py-2", 
                  activeSection === "skills" ? "text-foreground" : "text-foreground/60"
                )}
                onClick={() => handleNavClick("skills")}
              >
                Skills
              </Link>
              <Link 
                href="#about" 
                className={cn(
                  "transition-colors hover:text-foreground/80 py-2", 
                  activeSection === "about" ? "text-foreground" : "text-foreground/60"
                )}
                onClick={() => handleNavClick("about")}
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className={cn(
                  "transition-colors hover:text-foreground/80 py-2", 
                  activeSection === "contact" ? "text-foreground" : "text-foreground/60"
                )}
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          id="home" 
          className="container grid items-center gap-6 pt-6 pb-8 md:py-10"
          
        >
          <div className="flex flex-col items-start gap-4">
            <div className="inline-block">
              <Badge variant="outline" className="mb-4 text-sm px-3 py-1">Available for work</Badge>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
              Hi, I&lsquo;m Tafadzwa Chigumira.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Full-stack Developer.
              </span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              I build accessible, responsive, and performant web applications with modern technologies.
              Specialized in AI and ML integration for next-generation solutions.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Button asChild size="lg">
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="#projects">View my work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects" 
          className="container py-12 md:py-16 lg:py-20"
        
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground mb-8 max-w-[800px]">
            Here are some of my recent projects showcasing my skills and expertise in building modern web applications.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative aspect-video">
                  <Image 
                    src={project.image || "/placeholder.svg"} 
                    alt={project.title} 
                    fill 
                    className="object-cover rounded-xl blur-md" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <GithubLogo className="h-5 w-5" />
                        </Link>
                      )}
                      {project.demo && (
                        <Link 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ArrowSquareOut className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Button variant="outline" asChild>
              <Link 
                href="https://github.com/tafadzwa-chigumira" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <GithubLogo className="h-4 w-4" />
                View More on GitHub
              </Link>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="skills" 
          className="py-12 md:py-16 lg:py-20 bg-muted/40"
          
        >
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground mb-8 max-w-[800px]">
              I work with a variety of technologies and frameworks to build scalable and maintainable applications.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {skillCategories.map((category, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-3">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="px-2 py-0.5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section 
          id="about" 
          className="container py-12 md:py-16 lg:py-20"
        
        >
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-full max-h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/assets/images/profile_1.svg?height=500&width=500" 
                alt="Tafadzwa Chigumira" 
                fill
                className="object-contain" 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                quality={100}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Computer Science student specializing in AI and software engineering with proven experience in building intelligent applications and scalable systems.
                  Demonstrated success in designing RESTful APIs, streamlining data pipelines, and deploying ML models.
                </p>
                <p>
                  Skilled in Python, JavaScript, and cloud technologies with a focus on creating innovative solutions that merge robust engineering principles with advanced AI capabilities.
                </p>
                <p>
                  When I&apos;m not coding, you can find me hiking, reading, or experimenting with new recipes in the
                  kitchen. I believe in writing clean, maintainable code and creating intuitive user experiences.
                </p>
                <p className="font-medium text-foreground">I&apos;m currently open to new opportunities where I can contribute my skills and grow as a developer.</p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <a href="/assets/files/Tafadzwa_Chigumira_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className="py-12 md:py-16 lg:py-20 bg-muted/40"
        >
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-8 max-w-[800px]">
              Have a project in mind or just want to say hello? Feel free to reach out.
            </p>
            
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Envelope className="h-5 w-5 text-primary" />
                      </div>
                      <Link 
                        href="mailto:tchigumira20@gmail.com" 
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        tchigumira20@gmail.com
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <GithubLogo className="h-5 w-5 text-primary" />
                      </div>
                      <Link
                        href="https://github.com/tafadzwa-chigumira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        github.com/tafadzwa-chigumira
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <LinkedinLogo className="h-5 w-5 text-primary" />
                      </div>
                      <Link
                        href="https://linkedin.com/in/tafadzwa-chigumira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/tafadzwa-chigumira
                      </Link>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-medium mb-4">Availability</h4>
                    <p className="text-muted-foreground">
                      I&apos;m currently available for freelance work, internships, full-time positions, and interesting project collaborations.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-6">Send a Message</h3>
                  
                  {formStatus === "success" ? (
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-md">
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm mt-1">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                      
                      {formStatus === "error" && (
                        <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-2 rounded-md text-sm">
                          Something went wrong. Please try again later.
                        </div>
                      )}
                      
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={formStatus === "submitting"}
                      >
                        {formStatus === "submitting" ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tafadzwa Chigumira. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-1">Built with Next.js and Tailwind CSS</p>
          </div>
          <div className="flex items-center gap-6">
            <Link 
              href="https://github.com/tafadzwa-chigumira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubLogo className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/Tafadzwa-Chigumira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinLogo className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:tchigumira20@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email Contact"
            >
              <Envelope className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="container mt-6">
          <a 
            href="#home"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => handleNavClick("home")}
          >
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}


const projects: Project[] = [
  {
    title: "Smart Document Collaboration Platform",
    description: "A collaborative document editing platform with real-time synchronization, version control, and AI-powered content suggestions.",
    image: "/assets/images/image_3.svg?height=200&width=400",
    technologies: ["Next.js", "Django", "WebSockets", "Redis", "AWS"],
    github: "https://github.com/tafadzwa-chigumira/smart-docs",
    demo: "https://smart-docs.example.com",
  },
  {
    title: "Resonate Hub",
    description: "A community platform for connecting like-minded individuals with shared interests, featuring real-time chat and event organization.",
    image: "/assets/images/image_2.svg?height=200&width=400",
    technologies: ["Next.js", "Django", "PostgreSQL", "Material UI", "Redux"],
    github: "https://github.com/tafadzwa-chigumira/resonate-hub",
    demo: "https://resonate-hub.example.com",
  },
  {
    title: "AI Research Assistant (Indago)",
    description: "An ML-powered application that helps researchers discover relevant papers, extract key insights, and generate literature reviews.",
    image: "/assets/images/image_1.svg?height=200&width=400",
    technologies: ["Python", "PyTorch", "FastAPI", "React", "PostgreSQL"],
    github: "https://github.com/tafadzwa-chigumira/research-assistant",
    demo: "https://research-assistant.example.com",
  },
]

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux", "Material UI"],
  },
  {
    name: "Backend Development",
    skills: ["Node.js", "Express", "Python", "Django", "Flask", "FastAPI", "REST API Design", "GraphQL"],
  },
  {
    name: "Database & Data",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Firebase", "SQL", "NoSQL", "Data Modeling"],
  },
  {
    name: "DevOps & Cloud",
    skills: ["Git", "Docker", "CI/CD", "GitHub Actions", "AWS", "GCP", "Vercel", "Terraform"],
  },
  {
    name: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "NLP", "Computer Vision", "Reinforcement Learning"],
  },
  {
    name: "UI/UX & Design",
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Accessibility (WCAG)", "Design Systems"],
  },
]

import { Button } from "@/components/ui/button";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ExternalLink, Github, Code, Briefcase, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1565751036548-9a8876ed7bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "A drag-and-drop task management application inspired by Trello. Built with React and Firebase. Includes features like real-time updates, task assignments, and due date tracking.",
    technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "A modern portfolio website for a photographer with a focus on minimalist design and optimal image loading performance.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Finance Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "An interactive dashboard for visualizing financial data with charts, graphs, and filtering capabilities.",
    technologies: ["React", "D3.js", "TypeScript", "Redux"],
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Recipe Finder App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "A mobile application that helps users find recipes based on available ingredients. Includes features like recipe saving, meal planning, and nutritional information.",
    technologies: ["React Native", "Expo", "Firebase", "Spoonacular API"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Weather Forecast App",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "A weather forecast application with a clean UI that provides current conditions, hourly forecasts, and 7-day predictions.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
];

const Portfolio = () => {
  const categories = ["All", "Web Development", "Web Application", "UI/UX Design", "Mobile App"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredProjects = projects
    .filter(project => selectedCategory === "All" || project.category === selectedCategory)
    .filter(project => !showFeaturedOnly || project.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="section-container pt-24">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my work across web development, UI/UX design, and application development
          </p>
        </AnimatedSection>

        {/* Intro Section */}
        <AnimatedSection animation="slide-up" className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="rounded-full bg-blue-100 p-6 w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
                <Briefcase className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">My Approach to Development</h2>
              <p className="text-gray-600 mb-4">
                I specialize in creating responsive, user-friendly applications with clean, maintainable code. My projects range from modern e-commerce solutions to interactive dashboards and mobile applications.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                <Skill name="React" level={90} />
                <Skill name="Node.js" level={85} />
                <Skill name="UI/UX Design" level={80} />
                <Skill name="Mobile Dev" level={75} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Filter Section */}
        <AnimatedSection animation="slide-up" className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant={showFeaturedOnly ? "default" : "outline"}
                className="flex items-center gap-1 rounded-full"
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              >
                <Star className="h-4 w-4" />
                <span>Featured Projects</span>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Projects Section */}
        {showFeaturedOnly && (
          <AnimatedSection className="mb-12">
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Featured Projects
              </h2>
              <p className="text-gray-600 mb-4">
                These are some of my best works that showcase my skills and expertise.
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500">No projects found in this category.</p>
          </div>
        )}

        {/* Contact Section */}
        <AnimatedSection animation="fade-in" className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Button asChild className="rounded-full px-8">
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

const ProjectCard = ({ 
  project, 
  index 
}: { 
  project: typeof projects[0]; 
  index: number 
}) => {
  return (
    <AnimatedSection
      animation="scale-in"
      delay={index * 100}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-video overflow-hidden">
        {project.featured && (
          <div className="absolute top-2 right-2 z-10">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
              <Star className="h-3 w-3" />
              Featured
            </span>
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
              <ExternalLink className="h-4 w-4" />
              <span>Demo</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Skill = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-2">
        <Code className="h-8 w-8 text-blue-500" />
      </div>
      <h3 className="font-medium text-sm">{name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default Portfolio;

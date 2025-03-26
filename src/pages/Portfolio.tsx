
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

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
  },
];

const Portfolio = () => {
  const categories = ["All", "Web Development", "Web Application", "UI/UX Design", "Mobile App"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my recent projects and work
          </p>
        </AnimatedSection>

        {/* Filter Categories */}
        <AnimatedSection animation="slide-up" className="mb-10">
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
        </AnimatedSection>

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

export default Portfolio;

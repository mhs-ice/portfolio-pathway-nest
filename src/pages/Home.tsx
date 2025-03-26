
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
        <div className="container section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in" className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-4">
                Web Developer & Designer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Hi, I'm <span className="text-gradient">John Doe</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                I build beautiful, responsive and high-performance web applications
                that solve real problems and deliver exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/portfolio">
                    View Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="John Doe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg glass-effect">
                  <p className="text-lg font-medium">10+ Years Experience</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I offer a wide range of services to help you build your digital presence and grow your business.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="I build custom websites and applications using the latest technologies to ensure performance, scalability, and maintainability."
              delay={200}
            />
            <ServiceCard
              title="UI/UX Design"
              description="I create intuitive and engaging user interfaces that deliver exceptional user experiences and help achieve business goals."
              delay={300}
            />
            <ServiceCard
              title="Frontend Development"
              description="I specialize in building responsive, interactive frontends using modern frameworks like React, Vue, and Angular."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my technical skills and expertise in various technologies and tools.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <SkillBadge name="JavaScript" delay={200} />
            <SkillBadge name="TypeScript" delay={250} />
            <SkillBadge name="React" delay={300} />
            <SkillBadge name="Node.js" delay={350} />
            <SkillBadge name="Tailwind CSS" delay={400} />
            <SkillBadge name="HTML/CSS" delay={450} />
            <SkillBadge name="Next.js" delay={500} />
            <SkillBadge name="GraphQL" delay={550} />
            <SkillBadge name="Git" delay={600} />
            <SkillBadge name="Figma" delay={650} />
            <SkillBadge name="MongoDB" delay={700} />
            <SkillBadge name="PostgreSQL" delay={750} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-violet-500 text-white">
        <div className="section-container text-center">
          <AnimatedSection animation="scale-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Get in touch and let's discuss your project.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ 
  title, 
  description, 
  delay = 0 
}: { 
  title: string; 
  description: string; 
  delay?: number
}) => {
  return (
    <AnimatedSection
      animation="slide-up"
      delay={delay}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedSection>
  );
};

const SkillBadge = ({ 
  name, 
  delay = 0 
}: { 
  name: string; 
  delay?: number 
}) => {
  return (
    <AnimatedSection
      animation="fade-in"
      delay={delay}
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100"
    >
      <span className="font-medium text-gray-800">{name}</span>
    </AnimatedSection>
  );
};

export default Home;

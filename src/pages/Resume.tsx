
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey, experience, education, and skills
          </p>
        </AnimatedSection>

        <div className="mb-8 flex justify-center">
          <Button className="rounded-full flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Experience Section */}
            <AnimatedSection className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Work Experience</h2>
              
              <ResumeItem
                title="Senior Frontend Developer"
                company="Tech Innovations Inc."
                period="2020 - Present"
                description="Led the frontend development team in building a scalable, responsive web application. Implemented modern frontend architecture using React, TypeScript, and Tailwind CSS. Improved page load times by 40% through optimization techniques."
                delay={100}
              />
              
              <ResumeItem
                title="Web Developer"
                company="Creative Solutions"
                period="2018 - 2020"
                description="Developed responsive websites for various clients across different industries. Collaborated with designers to implement pixel-perfect UI/UX designs. Utilized JavaScript, HTML5, CSS3, and various frontend frameworks."
                delay={200}
              />
              
              <ResumeItem
                title="Junior Developer"
                company="Digital Creators"
                period="2016 - 2018"
                description="Assisted in the development of web applications and websites. Gained extensive experience with JavaScript, CSS preprocessors, and build tools. Participated in code reviews and implemented feedback from senior developers."
                delay={300}
                isLast
              />
            </AnimatedSection>

            {/* Education Section */}
            <AnimatedSection className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Education</h2>
              
              <ResumeItem
                title="Master's in Computer Science"
                company="Tech University"
                period="2014 - 2016"
                description="Specialized in Web Technologies and User Experience Design. Graduated with honors. Thesis on Optimizing Web Performance in Modern JavaScript Frameworks."
                delay={400}
              />
              
              <ResumeItem
                title="Bachelor's in Information Technology"
                company="Science College"
                period="2010 - 2014"
                description="Focused on software development and web technologies. Participated in various hackathons and coding competitions. Dean's List for academic excellence."
                delay={500}
                isLast
              />
            </AnimatedSection>
          </div>

          <div className="lg:col-span-1">
            {/* Skills Section */}
            <AnimatedSection className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Technical Skills</h2>
              
              <SkillCategory title="Programming Languages" delay={100}>
                <Skill name="JavaScript" level={90} />
                <Skill name="TypeScript" level={85} />
                <Skill name="HTML5" level={95} />
                <Skill name="CSS3" level={90} />
                <Skill name="Python" level={70} />
              </SkillCategory>
              
              <SkillCategory title="Frameworks & Libraries" delay={200}>
                <Skill name="React" level={95} />
                <Skill name="Node.js" level={80} />
                <Skill name="Vue.js" level={75} />
                <Skill name="Express.js" level={80} />
                <Skill name="Tailwind CSS" level={90} />
              </SkillCategory>
              
              <SkillCategory title="Tools & Platforms" delay={300}>
                <Skill name="Git" level={85} />
                <Skill name="Docker" level={70} />
                <Skill name="Webpack" level={80} />
                <Skill name="AWS" level={65} />
                <Skill name="Figma" level={75} />
              </SkillCategory>
            </AnimatedSection>

            {/* Languages Section */}
            <AnimatedSection className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Languages</h2>
              
              <div className="space-y-4">
                <Skill name="English" level={100} delay={400} />
                <Skill name="Spanish" level={80} delay={450} />
                <Skill name="French" level={60} delay={500} />
              </div>
            </AnimatedSection>

            {/* Certifications */}
            <AnimatedSection className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Certifications</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900">AWS Certified Developer</p>
                    <p className="text-sm text-gray-500">2021</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900">Google Professional Web Developer</p>
                    <p className="text-sm text-gray-500">2020</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900">React Advanced Concepts</p>
                    <p className="text-sm text-gray-500">2019</p>
                  </div>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResumeItem = ({ 
  title, 
  company, 
  period, 
  description, 
  delay = 0, 
  isLast = false 
}: { 
  title: string; 
  company: string; 
  period: string; 
  description: string; 
  delay?: number; 
  isLast?: boolean 
}) => {
  return (
    <AnimatedSection delay={delay} animation="slide-up" className="mb-6">
      <div className={`relative ${!isLast ? "pb-6 border-b border-gray-100" : ""}`}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex justify-between mb-2">
          <span className="text-blue-600 font-medium">{company}</span>
          <span className="text-gray-500 text-sm">{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </AnimatedSection>
  );
};

const SkillCategory = ({ 
  title, 
  children, 
  delay = 0 
}: { 
  title: string; 
  children: React.ReactNode; 
  delay?: number 
}) => {
  return (
    <AnimatedSection delay={delay} className="mb-6">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="space-y-3">
        {children}
      </div>
    </AnimatedSection>
  );
};

const Skill = ({ 
  name, 
  level, 
  delay = 0 
}: { 
  name: string; 
  level: number; 
  delay?: number 
}) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <span className="text-gray-700">{name}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-700 ease-out"
          style={{ 
            width: `${level}%`, 
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

export default Resume;


import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="slide-in" className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animation="fade-in" className="order-1 lg:order-2">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Feel free to reach out to me by phone, email, or come visit me at my office. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-6">
                  <ContactItem
                    icon={<MapPin className="h-6 w-6 text-blue-600" />}
                    title="Location"
                    content="1234 Tech Lane, San Francisco, CA 94107, USA"
                    delay={100}
                  />
                  <ContactItem
                    icon={<Phone className="h-6 w-6 text-blue-600" />}
                    title="Phone"
                    content="+1 (555) 123-4567"
                    delay={200}
                  />
                  <ContactItem
                    icon={<Mail className="h-6 w-6 text-blue-600" />}
                    title="Email"
                    content="contact@johndoe.com"
                    delay={300}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Office Hours</h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              {/* Map (placeholder) */}
              <div className="rounded-xl overflow-hidden h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Placeholder</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  content, 
  delay = 0
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  delay?: number 
}) => {
  return (
    <AnimatedSection animation="slide-up" delay={delay} className="flex items-start gap-4">
      <div className="flex-shrink-0 p-2 bg-blue-50 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </AnimatedSection>
  );
};

export default Contact;

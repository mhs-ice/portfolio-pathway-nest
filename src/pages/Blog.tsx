
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2023",
    category: "Web Development",
    date: "June 15, 2023",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development, including WebAssembly, Edge Computing, and more.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Implementing Responsive Design Best Practices",
    category: "UI/UX",
    date: "May 22, 2023",
    excerpt: "A comprehensive guide to implementing responsive design principles that ensure your websites look great on all devices.",
    image: "https://images.unsplash.com/photo-1617729357701-e0b75f743131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    author: "John Doe",
  },
  {
    id: 3,
    title: "Getting Started with TypeScript in React Projects",
    category: "JavaScript",
    date: "April 10, 2023",
    excerpt: "A step-by-step tutorial on integrating TypeScript into your React projects to improve code quality and developer experience.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    author: "John Doe",
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    category: "Accessibility",
    date: "March 5, 2023",
    excerpt: "Learn how to make your web applications accessible to all users, including those with disabilities, to reach a wider audience.",
    image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    author: "John Doe",
  },
  {
    id: 5,
    title: "Performance Optimization Techniques for Modern Websites",
    category: "Performance",
    date: "February 18, 2023",
    excerpt: "Discover practical techniques to optimize your website's performance, from code splitting to lazy loading and more.",
    image: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    author: "John Doe",
  },
  {
    id: 6,
    title: "Introduction to Serverless Architecture",
    category: "Cloud Computing",
    date: "January 30, 2023",
    excerpt: "An introduction to serverless architecture and how it can simplify your backend development process while reducing costs.",
    image: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    author: "John Doe",
  },
];

const categories = ["All", "Web Development", "UI/UX", "JavaScript", "Accessibility", "Performance", "Cloud Computing"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and design
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex-none">
              <select
                className="w-full h-10 px-3 rounded-md border border-input bg-background"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <AnimatedSection animation="fade-in" className="mb-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video md:aspect-auto">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-blue-600 font-medium">{filteredPosts[0].category}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{filteredPosts[0].date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{filteredPosts[0].excerpt}</p>
                  <div className="mt-auto">
                    <Button asChild>
                      <Link to={`/blog/${filteredPosts[0].id}`}>Read Article</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500">No articles found. Try adjusting your search criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <span className="sr-only">Previous page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="active">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BlogPostCard = ({ 
  post, 
  index 
}: { 
  post: typeof blogPosts[0]; 
  index: number 
}) => {
  return (
    <AnimatedSection
      animation="scale-in"
      delay={index * 100}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-xs text-blue-600 font-medium">{post.category}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-xs text-gray-500">{post.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <Button asChild variant="outline">
          <Link to={`/blog/${post.id}`}>Read More</Link>
        </Button>
      </div>
    </AnimatedSection>
  );
};

export default Blog;

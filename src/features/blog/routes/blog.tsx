import { useState } from "react";
import blogImg1 from "../../../assets/images/blog2.jpg";
import blogImg2 from "../../../assets/images/blog1.jpg";
import blogImg3 from "../../../assets/images/blog3.jpg";
import { FiCalendar, FiArrowRight, FiSearch } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Things to Know About U.S. Immigration Law",
    summary: "A quick guide to the most important aspects of U.S. immigration policy, helping you understand your rights and next steps.",
    image: blogImg1,
    date: "July 20, 2025",
    category: "Immigration",
    link: "https://www.ashoorilaw.com/blog/5-things-your-immigration-lawyer-should-know-to-help-your-case/",
    readTime: "5 min read",
    comments: 12,
    featured: true
  },
  {
    id: 2,
    title: "What To Do After a Visa Denial",
    summary: "Visa denial doesn't mean the end. Here are strategic ways to recover, refile, or appeal with confidence.",
    image: blogImg2,
    date: "July 18, 2025",
    category: "Visas",
    link: "https://www.ahlgrenlaw.com/2024/08/what-to-do-if-your-visa-application-is-denied/",
    readTime: "7 min read",
    comments: 8,
    featured: false
  },
  {
    id: 3,
    title: "Understanding Asylum in the U.S.",
    summary: "Who qualifies for asylum, and how can you make your case stronger? A must-read for anyone seeking refuge.",
    image: blogImg3,
    date: "July 10, 2025",
    category: "Asylum",
    link: "https://www.americanimmigrationcouncil.org/fact-sheet/asylum-united-states/",
    readTime: "10 min read",
    comments: 15,
    featured: true
  },
  // Add more posts as needed
];

export default function BlogLanding() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Immigration", "Visas", "Asylum", "Citizenship"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-white dark:bg-gray-900 px-4 py-16 lg:py-24 mt-[-70px]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
          Legal Insights & Resources
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Expert analysis, practical guides, and the latest updates in immigration law
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {filteredPosts.some(post => post.featured) && (
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Featured Article</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            {filteredPosts.find(post => post.featured) && (
              <>
                <img 
                  src={filteredPosts.find(post => post.featured)?.image} 
                  alt={filteredPosts.find(post => post.featured)?.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                      {filteredPosts.find(post => post.featured)?.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <FiCalendar className="mr-1" />
                      {filteredPosts.find(post => post.featured)?.date}
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <FaRegComment className="mr-1" />
                      {filteredPosts.find(post => post.featured)?.comments} comments
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {filteredPosts.find(post => post.featured)?.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {filteredPosts.find(post => post.featured)?.summary}
                  </p>
                  <a 
                    href={filteredPosts.find(post => post.featured)?.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Read full article <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {post.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <FiCalendar className="mr-1" /> {post.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {post.summary}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={post.link}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
                  >
                    Read more <FiArrowRight className="ml-1" />
                  </a>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <FaRegComment className="mr-1" /> {post.comments}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter & CTA */}
      <div className="max-w-7xl mx-auto mt-24 relative">
  {/* Decorative elements */}
  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[rgba(221,201,174,0.3)] dark:bg-[rgba(221,201,174,0.2)] rounded-full blur-xl"></div>
  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-xl"></div>
  
  {/* Main CTA container */}
  <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/80 dark:to-blue-800/90 rounded-2xl p-8 md:p-12 text-center overflow-hidden border border-blue-200 dark:border-blue-700/50">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-10 dark:opacity-5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iIzFkNGI5YiIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+')]"></div>
    </div>
    
    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-4">
        Need Personalized Legal Advice?
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Our experienced attorneys are ready to guide you through your unique legal situation with customized solutions.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contactus"
          className="relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Schedule a Consultation 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
        
        <a
          href="tel:+2235298055"
          className="px-6 py-3.5 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
      </div>
      
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
        
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
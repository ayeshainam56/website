import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface BlogFrontmatter {
  title: string;
  date: string;
  category: string;
  readTime: string;
  comments: number;
  featured?: boolean;
  image?: string;
}

interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
}

const posts = import.meta.glob("../content/*.md", { eager: true, as: "raw" });

function parsePosts(): BlogPost[] {
  return Object.entries(posts).map(([filePath, raw]) => {
    const slug = filePath.split("/").pop()?.replace(".md", "") || "";
    const { data, content } = matter(raw as string);
    return {
      slug,
      title: (data as Partial<BlogFrontmatter>).title || "Untitled",
      date: (data as Partial<BlogFrontmatter>).date || "",
      category: (data as Partial<BlogFrontmatter>).category || "General",
      readTime: (data as Partial<BlogFrontmatter>).readTime || "3 min read",
      comments: (data as Partial<BlogFrontmatter>).comments || 0,
      featured: (data as Partial<BlogFrontmatter>).featured || false,
      image: (data as Partial<BlogFrontmatter>).image || "/assets/images/default.jpg",
      content,
    };
  });
}

export default function BlogLanding() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBlogPosts(parsePosts());
  }, []);

  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 px-4 py-12 sm:py-16 lg:py-24 mt-[-70px]">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-white mb-8 sm:mb-10 text-center">
        Legal Insights & Resources
      </h1>

      {/* Search */}
      <div className="max-w-md mx-auto mb-6 sm:mb-8">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-6 sm:mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Section */}
      <div className="relative">
        {/* Mobile: Vertical list */}
        <div className="grid grid-cols-1 gap-6 sm:hidden">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                {post.date} • {post.readTime}
              </p>
              <div className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
                <ReactMarkdown>{post.content.substring(0, 150) + "..."}</ReactMarkdown>
              </div>
              <a
                href={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        {/* Tablet & Desktop: Horizontal carousel */}
        <div className="hidden sm:flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth px-4 lg:px-12" ref={scrollRef}>
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              className="flex-shrink-0 w-[45%] lg:w-[30%] bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                {post.date} • {post.readTime}
              </p>
              <div className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
                <ReactMarkdown>{post.content.substring(0, 150) + "..."}</ReactMarkdown>
              </div>
              <a
                href={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        {/* Arrows (only for sm and up) */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700 ml-[-50px]"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Main CTA */}
      <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/80 dark:to-blue-800/90 rounded-2xl p-6 sm:p-8 md:p-12 text-center overflow-hidden border border-blue-200 dark:border-blue-700/50 mt-12 sm:mt-16">
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-3 sm:mb-4">
            Need Personalized Legal Advice?
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Our experienced attorneys are ready to guide you through your unique legal situation with customized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contactus"
              className="relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Schedule a Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

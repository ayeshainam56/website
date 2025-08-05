import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

// Type for frontmatter fields
interface BlogFrontmatter {
  title: string;
  date: string;
  category: string;
  readTime: string;
  comments: number;
  featured?: boolean;
  image?: string;
}

// Type for blog post
interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
}

// Load all Markdown files in blog/content as raw text
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

  // Load blog posts on mount
  useEffect(() => {
    setBlogPosts(parsePosts());
  }, []);

  // Dynamic categories
  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  // Filter logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-white dark:bg-gray-900 px-4 py-16 lg:py-24 mt-[-70px]">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-10 text-center">
        Legal Insights & Resources
      </h1>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <div
            key={post.slug}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
              <ReactMarkdown>
                {post.content.substring(0, 150) + "..."}
              </ReactMarkdown>
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
    </div>
  );
}

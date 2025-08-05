import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

interface MarkdownModule {
  default: string;
}

interface BlogFrontmatter {
  title: string;
  date: string;
  category: string;
  readTime: string;
  comments?: number;
  featured?: boolean;
  image?: string;
}

// Import all markdown posts as raw content
const posts = import.meta.glob<MarkdownModule>("../content/*.md", { eager: true, as: "raw" });

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Find post by slug
  const postFile = Object.entries(posts).find(([path]) =>
    path.includes(`${slug}.md`)
  );

  if (!postFile) {
    return <h2 className="text-center mt-10">Post not found</h2>;
  }

  const raw = postFile[1] as unknown as string;
  const { data, content } = matter(raw);
  const frontmatter = data as Partial<BlogFrontmatter>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">
        {frontmatter.title ?? "Untitled"}
      </h1>
      <p className="text-gray-500 mb-6">
        {frontmatter.date ?? ""} • {frontmatter.readTime ?? "3 min read"}
      </p>

      {frontmatter.image && (
        <img
          src={frontmatter.image}
          alt={frontmatter.title ?? "Blog image"}
          className="w-full mb-6 rounded"
        />
      )}

      <ReactMarkdown
        components={{
          p: (props) => (
            <p {...props} className="mb-4 text-gray-700 dark:text-gray-300" />
          ),
          h2: (props) => (
            <h2 {...props} className="text-2xl font-bold mt-6 mb-3" />
          ),
          li: (props) => (
            <li {...props} className="list-disc ml-6 mb-1" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

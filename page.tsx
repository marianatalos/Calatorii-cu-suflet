import Link from "next/link";
import { articles } from "./articles";

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Călătorii cu suflet în Turcia – Blog
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-5 flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-muted-foreground text-sm mb-4">
                {article.excerpt}
              </p>
              <div className="mt-auto">
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-primary font-medium hover:underline"
                >
                  Citește mai mult →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

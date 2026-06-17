import { Link } from "@tanstack/react-router";
import Section from "./section";

interface Blog {
  id: string;
  name: string;
  description: string;
  cover: string;
  createdAt: string;
}

export default function BlogsSection() {
  const blogs: Blog[] = [
    {
      cover:
        "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740&q=80",
      id: "1",
      name: "Software Development",
      description:
        "Let's improve help your business grow with powerful and scalable software solutions",
      createdAt: new Date().toString(),
    },
    {
      cover:
        "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740&q=80",
      id: "1",
      name: "Mentoring",
      description:
        "Come learn how I work behind the scenes from the ground up and level up your skills",
      createdAt: new Date().toString(),
    },
    {
      cover:
        "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740&q=80",
      id: "1",
      name: "Consultancy",
      description:
        "Let's deep dive into what is the best next direction for your business and make it grow",
      createdAt: new Date().toString(),
    },
    {
      cover:
        "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740&q=80",
      id: "1",
      name: "Consultancy",
      description:
        "Let's deep dive into what is the best next direction for your business and make it grow",
      createdAt: new Date().toString(),
    },
  ];

  return (
    <Section
      title={"My Latest Thoughts"}
      seeMore={{ to: "/blogs", text: "See all" }}
    >
      <ul className="grid md:grid-cols-2 gap-4">
        {blogs.map((p) => (
          <BlogItem key={p.id} blog={p} />
        ))}
      </ul>
    </Section>
  );
}

function BlogItem({ blog }: { blog: Blog }) {
  return (
    <li className="bg-fd-card p-3 rounded-lg hover:brightness-120 transition-all">
      <Link to={`/products/${blog.name.split(" ").join("-")}_--_${blog.id}`}>
        <div className="flex gap-4 justify-between relative">
          <img
            src={blog.cover}
            className="w-full aspect-video object-cover rounded-lg"
          />
          <span className="absolute text-xs right-2 top-2">
            {new Date(blog.createdAt).toDateString()}
          </span>
        </div>

        <div className="flex-1 mt-4">
          <div className="flex gap-2 items-center">
            <h4 className="font-bold line-clamp-2">{blog.name}</h4>
          </div>
          <p className="text-fd-muted-foreground max-w-128 line-clamp-3">
            {blog.description}
          </p>
        </div>
      </Link>
    </li>
  );
}

import { Link } from "@tanstack/react-router";
import Section from "./section";
import { ArrowRightIcon } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  cover: string;
  role: "Owner" | "Contributor" | "Collaborator";
  scope: "Private" | "Public";
  link?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10",
      id: "1",
      name: "Arkos.js",
      description: "The Express & Prisma RESTful framework",
      role: "Owner",
      scope: "Public",
      link: "https://github.com/uanela/arkos",
    },
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10",
      id: "1",
      name: "SuperM7.com",
      description: "Business e-commerce platform",
      role: "Owner",
      scope: "Private",
      link: "https://www.superm7.com",
    },
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10",
      id: "1",
      name: "Neovim Tree",
      description: "A file explorer tree for neovim written in lua",
      role: "Collaborator",
      scope: "Public",
      link: "https://github.com/nvim-tree/nvim-tree.lua",
    },
  ];

  return (
    <Section title={"Projects"} seeMore={{ to: "/projects", text: "See all" }}>
      <ul className="grid gap-4">
        {projects.map((p) => (
          <ProjectItem key={p.id} project={p} />
        ))}
      </ul>
    </Section>
  );
}

function ProjectItem({ project }: { project: Project }) {
  return (
    <li className="bg-fd-card p-3 rounded-lg hover:brightness-120 transition-all">
      <Link
        to={
          project?.link ||
          `/products/${project.name.split(" ").join("-")}_--_${project.id}`
        }
      >
        <div className="flex gap-4">
          <img
            src={project.cover}
            className="size-16 object-cover rounded-lg"
          />
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <h4 className="font-bold">{project.name}</h4>
              {project.role === "Collaborator" && (
                <span className="text-xs bg-sky-900 px-1  text-sky-200 border border-sky-500 rounded-full">
                  collaborator
                </span>
              )}
              {project.scope === "Public" && (
                <span className="text-xs bg-fuchsia-900 px-1  text-fuchsia-200 border border-fuchsia-500 rounded-full">
                  open source
                </span>
              )}
            </div>
            <p className="text-fd-muted-foreground max-w-96">
              {project.description}
            </p>
          </div>
          <button className="bg-fd-background rounded-lg p-2 aspect-square size-10 flex items-center justify-center self-center hover:text-fd-primary cursor-pointer">
            <ArrowRightIcon size={18} />
          </button>
        </div>
      </Link>
    </li>
  );
}

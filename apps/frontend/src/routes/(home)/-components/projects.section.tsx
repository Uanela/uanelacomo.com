import { Link } from "@tanstack/react-router";
import Section from "./section";
import { ArrowRightIcon } from "lucide-react";
import type { BadgeProps } from "#/components/ui/badge";
import Badge from "#/components/ui/badge";

interface Project {
  id: string;
  name: string;
  description: string;
  cover: string;
  roles: ("Owner" | "Contributor" | "Collaborator" | "Maintainer")[];
  scope: "Private" | "Public";
  link?: string;
}

const projectRoleMap: Record<Project["roles"][number], BadgeProps["color"]> = {
  Collaborator: "orange",
  Contributor: "sky",
  Maintainer: "red",
  Owner: "emerald",
};

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10",
      id: "1",
      name: "Arkos.js",
      description: "The Express & Prisma RESTful framework",
      roles: ["Maintainer"],
      scope: "Public",
      link: "https://github.com/uanela/arkos",
    },
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10",
      id: "1",
      name: "SuperM7.com",
      description: "Business e-commerce platform",
      roles: ["Owner"],
      scope: "Private",
      link: "https://www.superm7.com",
    },
    {
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10",
      id: "1",
      name: "Neovim Tree",
      description: "A file explorer tree for neovim written in lua",
      roles: ["Collaborator"],
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
          `/projects/${project.name.split(" ").join("-")}_--_${project.id}`
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
              {project.roles.map((r) => (
                <Badge color={projectRoleMap[r]}>{r.toLowerCase()}</Badge>
              ))}
              {project.scope === "Public" && (
                <span className="text-xs bg-fuchsia-900 px-1  text-fuchsia-200 border border-fuchsia-500 rounded-full">
                  oss
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

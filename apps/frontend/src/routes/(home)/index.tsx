import { NavItem } from "#/components/navbar";
import { myConfig } from "#/utils/my.config";
import { createFileRoute, Link } from "@tanstack/react-router";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import ProjectSection from "./-components/projects.section";
import ServicesSection from "./-components/services.section";
import BlogsSection from "./-components/blog.section";

export const Route = createFileRoute("/(home)/")({ component: Home });

function Home() {
  return (
    <div className="grid gap-8 py-8">
      <HeroSection />
      <ProjectSection />
      <ServicesSection />
      <BlogsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-fd-background p-8 py-12 rounded-xl w-full grid text-center justify-items-center">
      <div className="flex flex-col justify-center items-center gap-1">
        <img
          src={`${myConfig.github.link}.png`}
          className="rounded-full md:size-28"
        />
        <Link
          className="text-sm text-fd-muted-foreground"
          to={myConfig.github.link}
        >
          @{myConfig.github.username}
        </Link>
      </div>

      <h1 className="font-bold md:text-3xl text-xl mt-4">{myConfig.name}</h1>

      <ul className="flex items-center justify-center gap-4 mt-2 mb-4">
        <NavItem Icon={GithubIcon} to={myConfig.github.link}>
          Github
        </NavItem>
        <NavItem Icon={LinkedinIcon} to={myConfig.linkedIn}>
          LinkedIn
        </NavItem>
        <NavItem Icon={YoutubeIcon} to={myConfig.youtube}>
          Youtube
        </NavItem>
      </ul>

      <p className="text-fd-muted-foreground mt-2 max-w-lg">
        {myConfig.description}
      </p>
    </div>
  );
}

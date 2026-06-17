import { Link } from "@tanstack/react-router";
import Section from "./section";
import { ArrowRightIcon } from "lucide-react";

interface Service {
  id: string;
  name: string;
  description: string;
  cover: string;
  link?: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      cover:
        "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740&q=80",
      id: "1",
      name: "Software Development",
      description:
        "Let's improve help your business grow with powerful and scalable software solutions",
      link: "https://github.com/uanela/arkos",
    },
    {
      cover:
        "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740&q=80",
      id: "1",
      name: "Mentoring",
      description:
        "Come learn how I work behind the scenes from the ground up and level up your skills",
      link: "https://www.superm7.com",
    },
    {
      cover:
        "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740&q=80",
      id: "1",
      name: "Consultancy",
      description:
        "Let's deep dive into what is the best next direction for your business and make it grow",
      link: "https://github.com/nvim-tree/nvim-tree.lua",
    },
  ];

  return (
    <Section title={"Services"} seeMore={{ to: "/services", text: "See all" }}>
      <ul className="grid gap-4">
        {services.map((p) => (
          <ServiceItem key={p.id} service={p} />
        ))}
      </ul>
    </Section>
  );
}

function ServiceItem({ service }: { service: Service }) {
  return (
    <li className="bg-fd-card p-3 rounded-lg hover:brightness-120 transition-all">
      <Link
        to={
          service?.link ||
          `/products/${service.name.split(" ").join("-")}_--_${service.id}`
        }
      >
        <div className="flex gap-4 justify-between">
          <img
            src={service.cover}
            className="size-12 object-cover rounded-lg"
          />
          <button className="bg-fd-background rounded-lg p-2 aspect-square size-10 flex items-center justify-center self-center hover:text-fd-primary cursor-pointer">
            <ArrowRightIcon size={18} />
          </button>
        </div>

        <div className="flex-1 mt-4">
          <div className="flex gap-2 items-center">
            <h4 className="font-bold">{service.name}</h4>
          </div>
          <p className="text-fd-muted-foreground max-w-128">
            {service.description}
          </p>
        </div>
      </Link>
    </li>
  );
}

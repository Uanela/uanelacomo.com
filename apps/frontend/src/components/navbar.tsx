import { Link } from "@tanstack/react-router";
import {
  BriefcaseBusinessIcon,
  FolderIcon,
  HomeIcon,
  InfoIcon,
  MailIcon,
  NotebookPenIcon,
  type LucideProps,
} from "lucide-react";

export default function Navbar() {
  return (
    <div className="">
      <nav className="mx-auto bg-fd-background p-6 rounded-b-xl">
        <ul className="flex items-center justify-center md:gap-12 gap-10">
          <NavItem to="/" Icon={HomeIcon}>
            Home
          </NavItem>
          <NavItem to="/projects" Icon={FolderIcon}>
            Projects
          </NavItem>
          <NavItem to="/services" Icon={BriefcaseBusinessIcon}>
            Services
          </NavItem>
          <NavItem to="/blog" Icon={NotebookPenIcon}>
            Blog
          </NavItem>
          <NavItem to="/contact" Icon={MailIcon}>
            Contact
          </NavItem>
          <NavItem to="/about" Icon={InfoIcon}>
            About
          </NavItem>
        </ul>
      </nav>
    </div>
  );
}

export function NavItem({
  children,
  Icon,
  to,
}: {
  children: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  to: string;
}) {
  return (
    <li
      className="text-white hover:text-fd-primary"
      aria-describedby={children}
    >
      <Link to={to} className="block w-full h-full">
        <Icon /> <span className="sr-only">{children}</span>
      </Link>
    </li>
  );
}

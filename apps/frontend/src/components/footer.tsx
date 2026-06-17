import { myConfig } from "#/utils/my.config";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  type LucideProps,
} from "lucide-react";
import type { ReactNode } from "react";

const today = new Date();

export default function Footer() {
  const leftItems = [
    {
      icon: MapPinIcon,
      content: (
        <div>
          <p className="text-fd-muted-foreground">Cidade da Beira</p>
          <p className="font-bold text-fd-foreground">Sofala, Moçambique</p>
        </div>
      ),
    },
    {
      icon: PhoneIcon,
      content: (
        <ul>
          {myConfig.phones.map((p) => (
            <li>
              <a href={`tel:${p.replaceAll(" ", "")}`}>{p}</a>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: MailIcon,
      content: (
        <a href={`mailto:${myConfig.email}`} className="text-fd-foreground">
          {myConfig.email}
        </a>
      ),
    },
  ];

  return (
    <footer className="bg-fd-background p-8 pb-0 rounded-t-xl w-full grid gap-4 text-fd-muted-foreground">
      <img src="/uanela-logo.png" className="size-16" />
      <div className="grid md:grid-cols-2 mt-8 gap-12">
        <div>
          <h1 className="font-bold md:text-3xl text-xl text-fd-foreground">
            {myConfig.name}
          </h1>
          <p className="text-fd-muted-foreground mt-2 max-w-lg">
            {myConfig.description}
          </p>
        </div>
        <div className="grid gap-4">
          {leftItems.map((item, i) => (
            <FooterLeftItem key={i} Icon={item.icon}>
              {item.content}
            </FooterLeftItem>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t-3 border-fd-card py-4 text-center">
        <p className="text-sm">
          © MIT {today.getFullYear()} Uanela Como, All rights reserved
        </p>
      </div>
    </footer>
  );
}

function FooterLeftItem({
  Icon,
  children,
}: {
  children: ReactNode;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-fd-card aspect-square p-3 rounded-lg">
        <Icon />
      </div>
      <div>{children}</div>
    </div>
  );
}

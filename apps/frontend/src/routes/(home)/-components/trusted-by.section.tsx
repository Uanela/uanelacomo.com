import Section from "./section";

export default function TrustedBySection() {
  const brands = [
    {
      image: "/trusted-by-logos/becas-logo.png",
    },
    {
      image: "/trusted-by-logos/kevintiller-logo.png",
    },
    {
      image: "/trusted-by-logos/kooler-logo.png",
    },
    {
      image: "/trusted-by-logos/phedzana-logo.png",
    },
    {
      image: "/trusted-by-logos/superm7-logo.png",
    },
    {
      image: "/trusted-by-logos/wcreatesolutions-logo.png",
    },
  ];

  return (
    <Section title={"Trusted By"}>
      <ul className="grid md:grid-cols-3 gap-4 place-items-center">
        {brands.map((b) => (
          <img
            src={b.image}
            className="object-contain h-24  border-fd-accent rounded-lg w-full p-3 px-4"
          />
        ))}
      </ul>
    </Section>
  );
}

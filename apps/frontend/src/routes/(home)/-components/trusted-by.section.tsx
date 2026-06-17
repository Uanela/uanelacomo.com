import Section from "./section";

export default function TrustedBySection() {
  const brands = [{ src: "" }];

  return (
    <Section title={"Trusted By"}>
      <ul className="grid md:grid-cols-2 gap-4">
        {brands.map((b) => (
          <img src={b.src} />
        ))}
      </ul>
    </Section>
  );
}

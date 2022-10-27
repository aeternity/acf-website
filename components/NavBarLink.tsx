import Link from "next/link";

export const NavBarLink = ({
  href,
  text,
  textSize,
}: {
  href: string;
  text: string;
  textSize?: "text-md" | "text-lg" | "text-xl";
}) => {
  return (
    <Link href={href}>
      <a className={`px-2 ${textSize || ""}`}>{text}</a>
    </Link>
  );
};

export const NAVBAR_LINKS_DATA = [
  { href: "/about", text: "Who we are" },
  { href: "/blog", text: "Blog" },
  { href: "/philosophy", text: "Our Philosophy" },
  { href: "/grants", text: "Ecosystem Grant Program" },
  { href: "/supported-projects", text: "Supported Projects" },
];

export const NavBarLinks = ({
  textSize,
}: {
  textSize: "text-md" | "text-lg" | "text-xl";
}) => (
  <>
    {NAVBAR_LINKS_DATA.map((l) => (
      <li key={l.href}>
        <NavBarLink textSize={textSize} href={l.href} text={l.text} />
      </li>
    ))}
  </>
);

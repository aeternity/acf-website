import Link from "next/link";

export const NavBarLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href}>
      <a
        className={`px-1 btn btn-ghost text-md font-normal capitalize justify-start
                    hover:bg-accent focus:bg-accent focus:text-secondary `}
      >
        {text}
      </a>
    </Link>
  );
};

export const NAVBAR_LINKS_DATA = [
  { href: "/philosophy", text: "Our Philosophy" },
  { href: "/about", text: "Who we are" },
  { href: "/grants", text: "Grant Program" },
  { href: "/donate", text: "Donate" },
  { href: "/blog", text: "Blog" },
];

export const NavBarLinks = () => (
  <>
    {NAVBAR_LINKS_DATA.map((l) => (
      <li key={l.href}>
        <NavBarLink href={l.href} text={l.text} />
      </li>
    ))}
  </>
);

import Link from "next/link";

export const NavBarLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href}>
      <a
        className={`px-1 btn btn-ghost text-md font-normal capitalize justify-start
                    hover:bg-base-300 focus:bg-base-300 focus:text-secondary `}
      >
        {text}
      </a>
    </Link>
  );
};

export const NAVBAR_LINKS_DATA = [
  { href: "/about", text: "Who we are" },
  { href: "/philosophy", text: "Our Philosophy" },
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

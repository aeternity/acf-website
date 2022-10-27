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
export const NavBarLinks = ({
  textSize,
}: {
  textSize: "text-md" | "text-lg" | "text-xl";
}) => {
  return (
    <>
      <li className="px-1">
        <NavBarLink textSize={textSize} href={"/about"} text={"Who we are"} />
      </li>
      <li>
        <NavBarLink textSize={textSize} href={"/blog"} text={"Blog"} />
      </li>
      <li>
        <NavBarLink
          textSize={textSize}
          href={"/philosophy"}
          text={"Our Philosophy"}
        />
      </li>
      <li>
        <NavBarLink
          textSize={textSize}
          href={"/grants"}
          text={"Ecosystem Grant Program"}
        />
      </li>
      <li>
        <NavBarLink
          textSize={textSize}
          href={"/supported-projects"}
          text={"Supported Projects"}
        />
      </li>
    </>
  );
};

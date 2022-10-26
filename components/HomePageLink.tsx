import Link from "next/link";

export const HomePageLink = ({
  href,
  text,
}: {
  href: string;
  text: string;
}) => {
  return (
    <Link href={href}>
      <a className="link link-primary">{text}</a>
    </Link>
  );
};

import { ReactElement, useState } from "react";
import Link from "next/link";
import { NavBarLink, NavBarLinks } from "./NavBarLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faDiscourse } from "@fortawesome/free-brands-svg-icons/faDiscourse";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

function SocialMediaLink({
  href,
  icon,
}: {
  href: string;
  icon: IconDefinition;
}) {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

function Footer() {
  return (
    <div
      id="footer"
      className="px-1 text-center my-2 lg:mt-4 rounded-md border-top box-border"
    >
      <div className="grid space-y-1 grid-cols-1 md:grid-cols-3">
        <div className={"grid grid-cols-1 xl:grid-cols-2"}>
          <NavBarLink
            href={"https://aeternity.com"}
            text={"æternity Blockchain"}
          />
          <NavBarLink
            href={
              "https://forum.aeternity.com/t/howto-apply-for-a-grant-from-the-aeternity-crypto-foundation-liechtenstein/6880"
            }
            text={"Submit a Grant Proposal"}
          />
          <NavBarLink href={"/media-kit"} text={"Media Kit"} />
          <NavBarLink
            href={"mailto:hello@aeternity-foundation.org"}
            text={"Contact Us"}
          />
        </div>
        <div>
          <div>Get in Touch!</div>
          <div className="space-x-2">
            <SocialMediaLink
              href={"https://github.com/aeternity"}
              icon={faGithub}
            />
            <SocialMediaLink
              href={"https://twitter.com/aeternityCF"}
              icon={faTwitter}
            />
            <SocialMediaLink
              href={
                "https://www.linkedin.com/company/æternity-crypto-foundation/"
              }
              icon={faLinkedin}
            />
            <SocialMediaLink
              href={"https://www.facebook.com/aefoundationbg/"}
              icon={faFacebook}
            />
            <SocialMediaLink
              href={"https://telegram.me/aeternity"}
              icon={faTelegram}
            />
            <SocialMediaLink
              href={"https://www.youtube.com/channel/UCNm_8-3T8fU17YjD9Z57IcQ"}
              icon={faYoutube}
            />
            <SocialMediaLink
              href={"https://forum.aeternity.com/c/li-foundation/31"}
              icon={faDiscourse}
            />
          </div>
        </div>
        <div>
          <div>{`©  2019 - ${new Date().getFullYear()} Æternity Crypto Foundation`}</div>
          <div>{"Made with <3 in Liechtenstein"}</div>
        </div>
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: ReactElement }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="drawer">
      <input
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={() => setDrawerOpen(true)}
      />
      <div className="drawer-content">
        <div className=" lg:mx-8 2xl:mx-12 max-w-screen-2xl ">
          <div className="navbar w-full bg-base-100 border-b-2 border-b-primary fixed top-0 z-50">
            <div className="navbar-start">
              <label
                className="btn btn-ghost drawer-button md:hidden text-2xl"
                onClick={() => setDrawerOpen(true)}
              >
                <FontAwesomeIcon icon={faBars} />
              </label>
              <Link href={"/"}>
                <a className="btn btn-ghost normal-case text-xl hover:bg-base-100">
                  Home
                </a>
              </Link>
            </div>
            <div className="hidden md:flex">
              <ul className="menu menu-horizontal space-x-1 p-0 bg-base-100">
                <NavBarLinks textSize={"text-md"} />
              </ul>
            </div>
          </div>
          <main className="min-h-[66vh] mt-24 px-2 sm:px-4">{children}</main>
          <Footer />
        </div>
      </div>
      <div className="drawer-side" onClick={() => setDrawerOpen(false)}>
        <label
          className="drawer-overlay"
          onClick={() => setDrawerOpen(false)}
        />
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content p-2 bg-base-100 w-52"
        >
          <ul>
            <Link href={"/"}>
              <a className="btn btn-ghost normal-case text-xl hover:bg-base-100">
                Home
              </a>
            </Link>
          </ul>
          <NavBarLinks textSize={"text-xl"} />
        </ul>
      </div>
    </div>
  );
}

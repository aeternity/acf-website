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
import Image from "next/image";
import { assetUrl } from "../lib";

function SocialMediaLink({
  href,
  icon,
}: {
  href: string;
  icon: IconDefinition;
}) {
  return (
    <a target="_blank" rel="noreferrer" href={href} className="text-primary">
      <FontAwesomeIcon icon={icon} height={16} />
    </a>
  );
}

function Footer() {
  return (
    <div
      id="footer"
      className="px-1 text-center my-2 lg:mt-4 rounded-md border-top box-border text-sm font-light"
    >
      <div className="grid space-y-1 grid-cols-1 md:grid-cols-3">
        <div className={"grid grid-cols-1 xl:grid-cols-2"}>
          <a
            href={"https://aeternity.com"}
            target="_blank"
            rel="noreferrer"
            className="link link-secondary"
          >
            æternity Blockchain
          </a>
          <a
            href={
              "https://forum.aeternity.com/t/howto-apply-for-a-grant-from-the-aeternity-crypto-foundation-liechtenstein/6880"
            }
            target="_blank"
            rel="noreferrer"
            className="link link-secondary"
          >
            Submit a Grant Proposal
          </a>
          <a
            href={"mailto:hello@aeternity-foundation.org"}
            target="_blank"
            rel="noreferrer"
            className="link link-secondary"
          >
            Contact Us
          </a>
        </div>
        <div>
          <div>Get in Touch!</div>
          <div className="space-x-2 inline-flex content-center">
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
        <div className="font-light text-2xs">
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
    <div className="drawer ">
      <input
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={() => setDrawerOpen(true)}
      />
      <div className="drawer-content">
        <div className="navbar bg-base-300 shadow border-b border-secondary/20 fixed top-0 z-50 ">
          <div className="navbar-start">
            <label
              className="btn btn-ghost drawer-button md:hidden text-2xl"
              onClick={() => setDrawerOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} width={32} height={32} />
            </label>
            <Link href={"/"}>
              <a className="btn btn-ghost p-0 bg-base-300 hover:bg-base-300">
                <Image
                  src={assetUrl("/ACF-logo-white.svg")}
                  height={48}
                  width={150}
                  alt={"Aeternity Crypto Foundation Logo"}
                  priority={true}
                />
              </a>
            </Link>
          </div>
          <div className="hidden md:inline-flex">
            <ul className="menu menu-horizontal space-x-1 p-0">
              <NavBarLinks />
            </ul>
          </div>
        </div>
        <main className="min-h-[66vh] my-24 px-2 sm:px-4 lg:mx-8 2xl:mx-12 ">
          {children}
        </main>
        <Footer />
      </div>
      <div className="drawer-side" onClick={() => setDrawerOpen(false)}>
        <label
          className="drawer-overlay bg-secondary-content"
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
          <div className={`text-left align-left`}>
            <NavBarLinks />
          </div>
        </ul>
      </div>
    </div>
  );
}

import { ReactElement } from "react";
import Link from "next/link";
import { HomePageLink } from "./HomePageLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faDiscourse } from "@fortawesome/free-brands-svg-icons/faDiscourse";

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

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <div className="px-1">
        <HomePageLink href={"/"} text={"Home"} />
      </div>
      <main className="min-h-[80vh] px-1 sm:px-2">{children}</main>
      <div id="footer" className="px-1 text-center mt-2 lg:mt-4">
        <div className="grid space-y-1 grid-cols-1 md:grid-cols-3">
          <div className={"grid grid-cols-1 xl:grid-cols-2"}>
            <HomePageLink
              href={"https://aeternity.com"}
              text={"aeternity blockchain"}
            />
            <HomePageLink
              href={
                "https://forum.aeternity.com/t/howto-apply-for-a-grant-from-the-aeternity-crypto-foundation-liechtenstein/6880"
              }
              text={"Submit a Grant Proposal"}
            />
            <HomePageLink href={"/media-kit"} text={"Media Kit"} />
            <HomePageLink
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
                href={
                  "https://www.youtube.com/channel/UCNm_8-3T8fU17YjD9Z57IcQ"
                }
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
    </>
  );
}

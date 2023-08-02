import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faDiscourse } from "@fortawesome/free-brands-svg-icons/faDiscourse";
import {
  faEnvelope,
  faHeart,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assetUrl } from "../lib";
import Image from "next/image";
import Link from "next/link";

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

const SocialMediaLinks = [
  { "mailto:hello@aeternity-foundation.org": faEnvelope },
  { "https://github.com/aeternity": faGithub },
  { "https://twitter.com/aeternityCF": faTwitter },
  {
    "https://www.linkedin.com/company/æternity-crypto-foundation/": faLinkedin,
  },
  // { "https://www.facebook.com/aefoundationbg/": faFacebook },
  // { "https://telegram.me/aeternity": faTelegram },
  // { "https://www.youtube.com/channel/UCNm_8-3T8fU17YjD9Z57IcQ": faYoutube },
  { "https://forum.aeternity.com/c/li-foundation/31": faDiscourse },
];

export function Footer() {
  return (
    <div>
      <hr />
      <div
        id="footer"
        className="footer max-w-7xl mx-auto z-10 pb-4 pl-8 pt-4 bg-white"
      >
        <div>
          <div className="columns-1 xl:columns-2">
            <div>
              <Link href="/terms-conditions">
                <span className="link link-primary link-hover">
                  Terms & conditions
                </span>
              </Link>
            </div>
            <div>
              <Link href="/privacy">
                <span className="link link-primary link-hover">
                  Privacy policy
                </span>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <span className="link link-primary link-hover">Contact us</span>
              </Link>
            </div>
            <div>
              <a
                href="https://forum.aeternity.com/t/howto-apply-for-a-grant-from-the-aeternity-crypto-foundation-liechtenstein/6880"
                target="_blank"
                rel="noreferrer"
                className="link link-primary link-hover"
              >
                Submit a Grant proposal
              </a>
            </div>
            <div>
              <a
                className="link link-primary link-hover"
                href="https://medium.com/aeternity-crypto-foundation"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </div>
            <div>
              <a
                href="https://aeternity.com"
                target="_blank"
                rel="noreferrer"
                className="link link-primary link-hover"
              >
                <Image
                  src={assetUrl("/logo/aeternity-logo-small.svg")}
                  height={10}
                  width={20}
                  alt="æternity blockchain"
                  priority={true}
                />{" "}
                æternity blockchain
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="footer-title">Get in Touch!</div>
          <div className="space-x-2 inline-flex content-center">
            {SocialMediaLinks.map((link) => (
              <>
                <SocialMediaLink
                  key={Object.keys(link)[0]}
                  href={Object.keys(link)[0]}
                  icon={Object.values(link)[0]}
                />
              </>
            ))}
          </div>
        </div>
        <div className="font-light text-2xs text-primary">
          <div>{`©  2019 - ${new Date().getFullYear()} æternity crypto foundation`}</div>
          <div>
            Made with{" "}
            <FontAwesomeIcon
              className="inline text-error"
              icon={faHeart}
              height={14}
            />{" "}
            in Liechtenstein
          </div>
        </div>
      </div>
    </div>
  );
}

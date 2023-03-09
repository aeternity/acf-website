import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faDiscourse } from "@fortawesome/free-brands-svg-icons/faDiscourse";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assetUrl } from "../lib";
import Image from "next/image";
import Link from "next/link";

export function SocialMediaLink({
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

export function Footer() {
  return (
    <div
      id="footer"
      className="bg-white z-20 border-t border-accent-content/10"
    >
      <div
        id="footer"
        className="footer mx-auto max-w-7xl px-4 lg:px-8 z-10 p-4 sm:p-8 "
      >
        <div>
          <div className="columns-1 xl:columns-2">
            <div>
              <Link href="/terms-conditions">
                <a className="link link-secondary link-hover">
                  Terms & Conditions
                </a>
              </Link>
            </div>
            <div>
              <Link href="/privacy">
                <a className="link link-secondary link-hover">Privacy policy</a>
              </Link>
            </div>
            <div>
              <a
                href="https://aeternity.com"
                target="_blank"
                rel="noreferrer"
                className="link link-secondary link-hover"
              >
                <Image
                  src={assetUrl("/logo/aeternity-logo-small.svg")}
                  height={10}
                  width={20}
                  alt="Aeternity blockchain"
                  priority={true}
                />{" "}
                æternity Blockchain
              </a>
            </div>
            <div>
              <a
                href="https://forum.aeternity.com/t/howto-apply-for-a-grant-from-the-aeternity-crypto-foundation-liechtenstein/6880"
                target="_blank"
                rel="noreferrer"
                className="link link-secondary  link-hover"
              >
                Submit a Grant Proposal
              </a>
            </div>
            <div>
              <Link href="/contact">
                <a className="link link-secondary  link-hover">Contact Us</a>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="footer-title">Get in Touch!</div>
          <div className="space-x-2 inline-flex content-center">
            <SocialMediaLink
              href="https://github.com/aeternity"
              icon={faGithub}
            />
            <SocialMediaLink
              href="https://twitter.com/aeternityCF"
              icon={faTwitter}
            />
            <SocialMediaLink
              href="https://www.linkedin.com/company/æternity-crypto-foundation/"
              icon={faLinkedin}
            />
            <SocialMediaLink
              href="https://www.facebook.com/aefoundationbg/"
              icon={faFacebook}
            />
            <SocialMediaLink
              href="https://telegram.me/aeternity"
              icon={faTelegram}
            />
            <SocialMediaLink
              href="https://www.youtube.com/channel/UCNm_8-3T8fU17YjD9Z57IcQ"
              icon={faYoutube}
            />
            <SocialMediaLink
              href="https://forum.aeternity.com/c/li-foundation/31"
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

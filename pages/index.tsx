import { BlogPost } from "contentlayer/generated";
import { NAVBAR_LINKS_DATA } from "../components/NavBarLink";
import Link from "next/link";
import Image from "next/image";
import { assetUrl } from "../lib";

export default function Home({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <div className="card mx-auto max-w-4xl p-4 py-6 md:shadow shadow-primary/66 bg-gradient-to-r from-[#F0F0FC] to-[#D8E8E8]">
        <div className="card-title"></div>
        <div className="card-body text-xl font-light">
          <Image
            src={assetUrl("/ACF-logo.svg")}
            width="400"
            height="200"
            alt={"Aeternity Crypto Foundation logo"}
          />
          <div className="text-left space-y-6">
            <p>
              The Æternity Crypto Foundation brings together all the necessary
              resources, expertise and infrastructure to ensure a stable
              environment and thriving open source ecosystem around the æternity
              blockchain.
            </p>
            <p>
              Æternity is a scalable, decentralized platform that enables
              efficient and secure communication and value transfer between
              participants. We believe that æternity has the potential to
              revolutionize the way we interact and do business.
            </p>
            <p>
              The Æternity Crypto Foundation is a non-profit organization,
              established in the <br /> Principality of Liechtenstein.
            </p>
          </div>
        </div>
        <ul className="mt-8 space-y-2 md:hidden">
          {NAVBAR_LINKS_DATA.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="">
                <a className={`btn btn-sm btn-ghost`}>{l.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

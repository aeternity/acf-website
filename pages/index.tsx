import { BlogPost } from "contentlayer/generated";
import { NAVBAR_LINKS_DATA } from "../components/NavBarLink";
import Link from "next/link";
import Image from "next/image";
import { assetUrl } from "../lib";
import { Constellation } from "../components/constellation";

export default function Home({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="main-bg-img relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-3/5 home-left-container z-10 relative">
                <h2 className="text-4xl text-[#37C4D5] font-bold mb-5">
                  Æternity
                  <div className="font-normal">Crypto Foundation</div>
                </h2>
                <p className="text-white mb-2 text-lg">
                  The Æternity Crypto Foundation brings together all the
                  necessary resources, expertise and infrastructure to ensure a
                  stable environment and thriving open source ecosystem around
                  the æternity blockchain.
                </p>
                <p className="text-white text-lg mb-2">
                  Æternity is a scalable, decentralized platform that enables
                  efficient and secure communication and value transfer between
                  participants. We believe that æternity has the potential to
                  revolutionize the way we interact and do business.
                </p>
                <p className="text-white text-lg mb-6">
                  Æternity is a scalable, decentralized platform that enables
                  The Æternity Crypto Foundation is a non-profit organization,
                  established in the <br /> Principality of Liechtenstein.
                </p>
                <a
                  href="https://forum.aeternity.com/c/li-foundation/grant/81"
                  className="bg-secondary hover:opacity-80 text-white font-bold py-2 px-4 rounded mb-6"
                  target="_blank"
                >
                  See More
                </a>
              </div>
              <div className="md:w-2/5 ml-10 flex justify-center" />
            </div>
          </div>
        </div>
      </div>
      <Constellation />
    </div>
  );
}

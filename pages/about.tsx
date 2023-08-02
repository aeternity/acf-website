import { allPeople, Markdown, Person } from "contentlayer/generated";
import { PersonCard } from "../components/PersonCard";
import { updateTitleTag } from "./_app";
import { useState } from "react";
import Link from "next/link";
import { assetUrl } from "../lib";
import Image from "next/image";
import { SimpleContainer } from "../components/SimpleContainer";

export async function getStaticProps() {
  const persons = allPeople.sort((a, b) => a.index - b.index);
  return { props: { persons } };
}

export default function Home({ persons }: { persons: Person[] }) {
  const [info, setInfo] = useState<Markdown | null>(null);
  const listStyles = {
    li: "flex items-center m-4",
    text: "ml-4 text-xl text-gray",
  };

  return (
    <>
      {updateTitleTag("Who We Are")}
      <SimpleContainer>
        <>
          <h1 className="text-5xl ">Who We Are</h1>
          <p>
            The Æternity Crypto Foundation is a non-profit organization
            established in the Principality of Liechtenstein. The Foundation
            brings together all the necessary resources and infrastructure to
            ensure a stable environment and thriving open source ecosystem
            around the æternity blockchain.
          </p>
          <p>
            The organization is committed to promoting technical excellence and
            user-friendly applications as well as supporting projects built on
            the æternity blockchain.
          </p>
          <h2 className="pt-4 pb-1 text-3xl font-normal">
            Core and Essentials Development Domains
          </h2>
          <p>
            The 7 domains below are current areas of focus for the core open
            source development effort, listed in order of approximate funding
            priority. The order may be adjusted as development progresses and
            priorities evolve.
          </p>
          <ul className="icons-option-list list-disc list-inside mt-3">
            <li className={listStyles.li}>
              <Image
                src={assetUrl("icons/protocol-svgrepo-com.svg")}
                width={40}
                height={40}
              />
              <span className={listStyles.text}>Protocol Maintenance</span>
            </li>
            <li className={listStyles.li}>
              <Image
                src={assetUrl("icons/maintenance-documents-svgrepo-com.svg")}
                width={40}
                height={40}
              />
              <span className={listStyles.text}>Protocol Development</span>
            </li>
            <li className={listStyles.li}>
              <Image
                src={assetUrl("icons/api-svgrepo-com.svg")}
                width={40}
                height={40}
              />
              <span className={listStyles.text}>SDKs</span>
            </li>
            <li className={listStyles.li}>
              <Image
                src={assetUrl("icons/wallet-svgrepo-com.svg")}
                width={40}
                height={40}
              />
              <span className={listStyles.text}>Wallets and Interfaces</span>
            </li>
            <li className={listStyles.li}>
              <Image
                src={assetUrl("icons/app-update-svgrepo-com.svg")}
                width={40}
                height={40}
              />
              <span className={listStyles.text}>æpps and Integrations</span>
            </li>
            <li className={listStyles.li}>
              <Image
                src={assetUrl("icons/api-settings-svgrepo-com.svg")}
                width={40}
                height={40}
              />
              <span className={listStyles.text}>Middleware Backend API</span>
            </li>
            <li className={listStyles.li}>
              <Image
                src={assetUrl("icons/window-dev-tools-svgrepo-com.svg")}
                width={40}
                height={40}
              />
              <span className={listStyles.text}>Dev-Tools</span>
            </li>
          </ul>
          <p className="pt-2 text-xl">
            Read more about{" "}
            <Link href="/philosophy">
              <a className="link text-primary">our philosophy</a>
            </Link>{" "}
            and the{" "}
            <Link href="/grants">
              <a className="link text-primary">grants program</a>
            </Link>
            .
          </p>
        </>
      </SimpleContainer>
      <div className="clear-both pb-8 lg:pb-12">
        <div className="about relative">
          <div className="mt-10 m-0">
            <div className="text-center">
              <h3 className="text-6xl text-primary">People</h3>
              <div className="container min-h-[50vh]">
                {persons.map((person, idx) => (
                  <PersonCard key={idx} person={person} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

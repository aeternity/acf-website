import { allPeople, Person } from "contentlayer/generated";
import { PersonCard } from "../components/PersonCard";
import { updateTitleTag } from "./_app";
import { Constellation } from "../components/constellation";
import { SimpleContainer } from "../components/SimpleContainer";
import Link from "next/link";
import React from "react";

export async function getStaticProps() {
  const persons = allPeople.sort((a, b) => a.index - b.index);
  return { props: { persons } };
}

export default function Home({ persons }: { persons: Person[] }) {
  return (
    <>
      {updateTitleTag("Who We Are")}
      <SimpleContainer>
        <>
          <div className="font-serif">
            <h1 className="text-3xl text-center mt-8 mb-4">Who We Are</h1>
            <div className="text-xl">
              <p>
                The Æternity Crypto Foundation is a non-profit organization
                established in the Principality of Liechtenstein. The Foundation
                brings together all the necessary resources and infrastructure
                to ensure a stable environment and thriving open source
                ecosystem around the æternity blockchain.
              </p>
              <p>
                The organization is committed to promoting technical excellence
                and user-friendly applications as well as supporting projects
                built on the æternity blockchain.
              </p>
              <h2 className="pt-3 text-2xl">
                Core and Essentials Development Domains
              </h2>
              <p>
                The 7 domains below are current areas of focus for the core open
                source development effort, listed in order of approximate
                funding priority. The order may be adjusted as development
                progresses and priorities evolve.
              </p>
              <ul className="list-disc list-inside">
                <li> Protocol Maintenance</li>
                <li> Protocol Development</li>
                <li> SDKs</li>
                <li> Wallets and Interfaces</li>
                <li> æpps and Integrations</li>
                <li> Middleware Backend API - Dev-Tools</li>
                <li> Dev-Tools</li>
              </ul>
            </div>
          </div>
          <div className="my-6 pb-3">
            <div className="relative text-center">
              <h3 className="text-2xl">People</h3>
            </div>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6">
            {persons.map((person, idx) => (
              <PersonCard key={idx} {...person} />
            ))}
          </div>
          <p className="pt-10 text-xl">
            Read more about{" "}
            <Link href="/philosophy">
              <a className="link">our philosophy</a>
            </Link>{" "}
            and the{" "}
            <Link href="/grants">
              <a className="link">grants program</a>
            </Link>
            .
          </p>
        </>
      </SimpleContainer>
      <Constellation />
    </>
  );
}

import Head from "next/head";
import { allPeople, Person } from "contentlayer/generated";
import { PersonCard } from "../components/PersonCard";

export async function getStaticProps() {
  const persons = allPeople.sort((a, b) => {
    return a.index - b.index;
  });
  return { props: { persons } };
}

export default function Home({ persons }: { persons: Person[] }) {
  return (
    <div className="">
      <div className={"prose"}>
        <Head>
          <title>ACF - Who We Are</title>
        </Head>

        <h1 className="mb-8 text-3xl font-bold">Who We Are</h1>
        <div className="">
          <p>
            The æternity Crypto Foundation is a non-profit organization
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
          <div>
            Core and Essentials Development Domains The 7 domains below are
            current areas of focus for the core open source development effort,
            listed in order of approximate funding priority. The order may be
            adjusted as development progresses and priorities evolve.
            <ul className="space-y-1">
              <li>Protocol Maintenance</li>
              <li>Protocol Development</li>
              <li>SDKs</li>
              <li>Wallets and Interfaces</li>
              <li>æpps and Integrations</li>
              <li>Middleware Backend API</li>
              <li>Dev-Tools</li>
            </ul>
          </div>
        </div>
        <h2>People</h2>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {persons.map((person, idx) => (
          <PersonCard key={idx} {...person} />
        ))}
      </div>
    </div>
  );
}

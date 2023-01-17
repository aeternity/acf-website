import { allPeople, Person } from "contentlayer/generated";
import { PersonCard } from "../components/PersonCard";
import { updateTitleTag } from "./_app";

export async function getStaticProps() {
  const persons = allPeople.sort((a, b) => {
    return a.index - b.index;
  });
  return { props: { persons } };
}

export default function Home({ persons }: { persons: Person[] }) {
  return (
    <div className="">
      {updateTitleTag("Who We Are")}
      <div className={"prose font-serif"}>
        <h1 className="">Who We Are</h1>
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
        </div>
        <h2>People</h2>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {persons.map((person, idx) => (
          <PersonCard key={idx} {...person} />
        ))}
      </div>
    </div>
  );
}

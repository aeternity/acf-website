import { allPeople, Person } from "contentlayer/generated";
import { PersonCard } from "../components/PersonCard";
import { updateTitleTag } from "./_app";
import { Constellation } from "../components/constellation";

export async function getStaticProps() {
  const persons = allPeople.sort((a, b) => a.index - b.index);
  return { props: { persons } };
}

export default function Home({ persons }: { persons: Person[] }) {
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center p-10 relative  z-10">
        <div className="max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-white">
          <div className="clear-both">
            {updateTitleTag("Who We Are")}
            <div className={"font-serif"}>
              <h1 className="text-3xl text-center mt-8 mb-4">Who We Are</h1>
              <div className="text-xl">
                <p>
                  The Æternity Crypto Foundation is a non-profit organization
                  established in the Principality of Liechtenstein. The
                  Foundation brings together all the necessary resources and
                  infrastructure to ensure a stable environment and thriving
                  open source ecosystem around the æternity blockchain.
                </p>
                <p>
                  The organization is committed to promoting technical
                  excellence and user-friendly applications as well as
                  supporting projects built on the æternity blockchain.
                </p>
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
          </div>
        </div>
      </div>
      <Constellation />
    </div>
  );
}

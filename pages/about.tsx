import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPeople, Person } from "contentlayer/generated";
import Image from "next/image";

export async function getStaticProps() {
  const persons = allPeople.sort((a, b) => {
    return compareDesc(new Date(a.name), new Date(b.name));
  });
  return { props: { persons } };
}

function PersonCard(person: Person) {
  return (
    <div className="card card-compact shadow-sm border border-primary/5 max-w-[420px]">
      {person.imageSrc ? (
        <figure className="block bg-blend-darken">
          <Image
            src={person.imageSrc}
            alt={`${person.name} portrait`}
            width={420}
            height={420}
            layout="intrinsic"
          />
        </figure>
      ) : null}
      <div className="card-body prose p-1">
        <div>
          <h2 className="card-title mt-1">{person.name}</h2>
          <h4>{person.position}</h4>
        </div>
        <div
          className="cl-post-body"
          dangerouslySetInnerHTML={{ __html: person.body.html }}
        />
      </div>
    </div>
  );
}

export default function Home({ persons }: { persons: Person[] }) {
  return (
    <div className="">
      <Head>
        <title>ACF - Who We Are</title>
      </Head>
      <h1 className="mb-8 text-3xl font-bold">Who We Are</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {persons.map((person, idx) => (
          <PersonCard key={idx} {...person} />
        ))}
      </div>
    </div>
  );
}

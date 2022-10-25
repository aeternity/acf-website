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

function PostCard(person: Person) {
  return (
    <div className="mb-6 p-4 prose card shadow-xl">
      <figure>
        <Image
          src={person.imageSrc}
          alt={`${person.name} portrait`}
          width={200}
          height={200}
        />
      </figure>
      <div className="card-body flex space-x-2">
        <div>
          <h2 className={"card-title"}>{person.name}</h2>
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
    <div className="pt-4">
      <Head>
        <title>ACF - Who We Are</title>
      </Head>
      <h1 className="mb-8 text-3xl font-bold">Who We Are</h1>

      <div className="flex space-x-4 ">
        {persons.map((person, idx) => (
          <PostCard key={idx} {...person} />
        ))}
      </div>
    </div>
  );
}

import { Person } from "contentlayer/generated";
import Image from "next/image";

export function PersonCard(person: Person) {
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

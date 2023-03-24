import { Person, Markdown } from "contentlayer/generated";
import Image from "next/image";
import { assetUrl } from "../lib";

interface PersonCard {
  person: Person;
}

export function PersonCard(props: PersonCard) {
  const { person } = props;
  return (
    <>
      <div className="hexagon cursor-pointer">
        {person.imageSrc ? (
          <Image
            src={assetUrl(person.imageSrc)}
            alt={`${person.name} portrait`}
            width={420}
            height={420}
            layout="intrinsic"
          />
        ) : null}
        <div className="imageText">
          <h2 className="mt-2">{person.name}</h2>
          <div className="position">{person.position}</div>
          <div
            className="info"
            dangerouslySetInnerHTML={{ __html: person.body.html }}
          />
        </div>
      </div>
    </>
  );
}

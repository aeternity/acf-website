import { Person, Markdown } from "contentlayer/generated";
import Image from "next/image";
import { assetUrl } from "../lib";

interface PersonCard {
  person: Person;
  onClick: (info: Markdown) => void;
}

export function PersonCard(props: PersonCard) {
  const { person, onClick } = props;
  return (
    <>
      <div
        className="hexagon cursor-pointer"
        onClick={() => onClick(person.body)}
      >
        {person.imageSrc ? (
          <Image
            src={assetUrl(person.imageSrc)}
            alt={`${person.name} portrait`}
            width={420}
            height={420}
            layout="intrinsic"
          />
        ) : null}
        <label
          htmlFor="modal-about"
          className="absolute block w-[100%] h-[100%] z-10 cursor-pointer"
        />
        <div className="imageText">
          <h2 className="mt-2">{person.name}</h2>
          <div className="position">{person.position}</div>
        </div>
      </div>
    </>
  );
}

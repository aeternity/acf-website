import { updateTitleTag } from "./_app";
import { assetUrl } from "../lib";
import React from "react";
import { SVGAnimation } from "../components/SVGAnimation";
import { SimpleContainer } from "../components/SimpleContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFlask,
  faPaintBrush,
  faShieldAlt,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const listItems = [
    {
      title: "Open Source Development",
      icon: faCode,
      description:
        "Foster open source development is main funding focus of the æternity crypto foundation (ACF).",
    },
    {
      title: "Research and Education Activities",
      icon: faFlask,
      description:
        "The ACF supports research and education in the fields of blockchain technology, cryptography and mathematics.",
    },
    {
      title: "Community Growth oriented activities",
      icon: faUsers,
      description:
        "The ACF is interested in community driven initiatives. Examples are: The æmbassador program and aeknow.org.",
    },
    {
      title: "Culture and Art",
      icon: faPaintBrush,
      description:
        "Creative work is supported in various ways. One example is the YAIR art project yair.art.",
    },
    {
      title: "Governance, DAO",
      icon: faShieldAlt,
      description:
        "The ACF fosters decentralized decision-making models and supports DAO initiatives in the blockchain space.",
    },
    {
      title: "NFT",
      icon: faStar,
      description:
        "The ACF promotes NFT adoption and innovation, empowering creators and collectors in the digital ownership realm.",
    },
  ];
  return (
    <>
      {updateTitleTag("Ecosystem Grant Program")}
      <SVGAnimation
        data={assetUrl("/bg/3shapes.svg")}
        className="svg-animated-bg relative lg:absolute top-0 right-0 overflow-hidden will-change-[transform, opacity, filter] z-0 w-auto lg:w-[30%] m-0 lg:mt-[8%] lg:mr-[4%]"
      />
      <SimpleContainer>
        <>
          <h1 className="text-5xl">Ecosystem Grant Program</h1>
          <p>
            To succeed long term, the æternity Foundation is dedicated to enable
            community-driven innovation to benefit people around the world, and
            sustaining open source blockchain technology and its development.
          </p>
          <p>
            <strong>
              The Foundation invites individuals, teams and non-commercial
              projects to apply for a grant or donation.
            </strong>
          </p>
          <h2 className="text-3xl font-normal">Funding Categories</h2>
          <p>
            The main focus of support is <strong>technical advancement</strong>{" "}
            of the æternity open-source blockchain protocol.
          </p>
          <p>Further target areas are the promotion of æternity ecosystems:</p>
          <ul className="icons-option-list list-none list-inside">
            {listItems.map((item) => (
              <li key={item.title} className="m-4">
                <FontAwesomeIcon
                  className="inline"
                  icon={item.icon}
                  width={30}
                />
                <span className="ml-4 pl-1 text-xl text-gray">
                  {item.title}
                </span>
                {item.description && (
                  <p className="ml-12 pl-1 text-sm mt-0">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
          <h2 className="text-3xl font-normal">Call for Proposals</h2>
          <h4>Who can apply?</h4>
          <p>Individuals, teams and non-commercial projects</p>
          <h4>When the call is open?</h4>
          <p>Always!</p>
          <h4>How to apply?</h4>
          <p>
            To apply, please create an account on the official æternity{" "}
            <a className="link text-primary" href="https://forum.aeternity.com">
              Forum
            </a>
          </p>
          <p>
            Please, prepare your submission according to these required
            application guidelines. Additional resources are available{" "}
            <a
              className="link text-primary"
              href="https://forum.aeternity.com/c/li-foundation/grant/81"
            >
              HERE
            </a>
          </p>
          <p>
            For any question - feel free to contact us on{" "}
            <a
              className="link text-primary"
              href="mailto:hello@aeternity-foundation.org"
            >
              hello@aeternity-foundation.org
            </a>
          </p>
        </>
      </SimpleContainer>
    </>
  );
}

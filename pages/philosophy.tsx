import React from "react";
import { updateTitleTag } from "./_app";
import { assetUrl } from "../lib";
import { SVGAnimation } from "../components/SVGAnimation";
import { SimpleContainer } from "../components/SimpleContainer";

export default function Home() {
  return (
    <>
      {updateTitleTag("Our Philosophy")}
      <SVGAnimation
        data={assetUrl("/bg/philosophy.svg")}
        className="lg:w-[30%] m-0 lg:mt-[5%] lg:mr-[4%]"
      />
      <SimpleContainer>
        <>
          <h1 className="text-5xl">Our Philosophy</h1>
          <p>
            Empowering people, businesses &amp; open-source blockchain
            technology advancement.
          </p>
          <p>
            <strong>
              We are not æternity blockchain, nor its owners and managers.
            </strong>
          </p>
          <p>
            We are contributors, just like numerous community members &amp;
            projects, taking care of the smooth flow of the blockchain,
            continuous development, technology advancement, and empowerment of
            its ecosystem.
          </p>
          <p>
            <strong>
              We are one of many organizations that cares deeply about æternity
              technology — its innovations, values &amp; scalability.
            </strong>
          </p>
          <p>
            Research, development, innovations, community learning &amp;
            building opportunities, Ambassador Programs and Grant Opportunities
            - it is not just what we do but how we do it. However, we are a
            foundation, and thus we continue to fund development of many
            significant components of the æternity ecosystem, together with:
          </p>
          <ul>
            <li>
              Building æternity blockchain ecosystems through global, open
              source collaboration
            </li>
            <li>
              Taking care of the core blockchain development, security, and
              advancement
            </li>
            <li>
              Foster the development and adoption of cross-industry platforms
              powered by distributed ledgers
            </li>
            <li>Educate the public</li>
            <li>
              Empower, support and promote open source blockchain community to
              continuously develop ecosystem and technology
            </li>
          </ul>
          <p>
            <strong>
              The Foundation is dedicated to driving Web 3.0 - a decentralized
              and fair internet where users control their own data, identity and
              destiny.
            </strong>
          </p>
          <p>
            Potential partners and grantees are welcome to contact the
            Foundation for proposals to take æternity leaps ahead.
          </p>
          <h4>Let’s build æternity together!</h4>
        </>
      </SimpleContainer>
    </>
  );
}

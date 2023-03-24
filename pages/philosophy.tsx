import { updateTitleTag } from "./_app";
import { Person } from "contentlayer/generated";
import { SVGAnimation } from "./index";
import { assetUrl } from "../lib";

export default function Home() {
  return (
    <>
      {updateTitleTag("Our Philosophy")}
      <SVGAnimation
        data={assetUrl("/bg/philosophy.svg")}
        className={
          "svg-animated-bg relative lg:absolute top-0 right-0 overflow-hidden will-change-[transform, opacity, filter] z-0 w-auto lg:w-[30%] m-0 lg:mt-[5%] lg:mr-[4%]"
        }
      />
      <div className="flex mt-[8%] max-w-7xl mx-auto items-center justify-between px-8 ">
        <div className="md:w-4/5 lg:w-3/5 z-0 pb-16">
          <div className="prose text-xl bg-[rgba(255,255,255,0.9)]">
            <h1 className="text-5xl font-normal">Our Philosophy</h1>
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
                We are one of many organizations that cares deeply about
                æternity technology — its innovations, values &amp; scalability.
              </strong>
            </p>
            <p>
              Research, development, innovations, community learning &amp;
              building opportunities, Ambassador Programs and Grant
              Opportunities - it is not just what we do but how we do it.
              However, we are a foundation, and thus we continue to fund
              development of many significant components of the æternity
              ecosystem, together with:
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
                Foundation is dedicated to driving Web 3.0; a decentralized and
                fair internet where users control their own data, identity and
                destiny.
              </strong>
            </p>
            <p>
              Potential partners and grantees are welcome to contact the
              Foundation for proposals to take æternity leaps ahead.
            </p>
            <h2 className="text-3xl font-normal">
              Core and Essentials Development Domains
            </h2>
            <p>
              The 7 domains below are current areas of focus for the core open
              source development effort, listed in order of approximate funding
              priority. The order may be adjusted as development progresses and
              priorities evolve.
            </p>
            <h4>Let’s build æternity together!</h4>
          </div>
        </div>
      </div>
    </>
  );
}

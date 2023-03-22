import { updateTitleTag } from "./_app";
import { assetUrl } from "../lib";
import { BlogPost } from "contentlayer/generated";
import { SVGAnimation } from "./index";

export default function Home() {
  return (
    <>
      {updateTitleTag("Ecosystem Grant Program")}
      <SVGAnimation
        data={assetUrl("/bg/3shapes.svg")}
        className={
          "svg-animated-bg relative lg:absolute top-0 right-0 overflow-hidden will-change-[transform, opacity, filter] z-0 w-auto lg:w-[40%] m-0 lg:mt-[8%]"
        }
      />
      <div className="flex mt-[8%] max-w-7xl mx-auto items-center justify-between px-8 ">
        <div className="md:w-4/5 lg:w-3/5 z-0 pb-16">
          <div className="prose font-medium bg-[rgba(255,255,255,0.9)]">
            <h1>Ecosystem Grant Program</h1>
            <p>
              To succeed long term, the æternity Foundation is dedicated to
              enable community-driven innovation to benefit people around the
              world, and sustaining open source blockchain technology and its
              development.
            </p>
            <p>
              <strong>
                The Foundation invites individuals, teams and non-commercial
                projects to apply for a grant or donation.
              </strong>
            </p>
            <h2>Funding Categories</h2>
            <p>
              The main focus of support is{" "}
              <strong>technical advancement</strong> of the æternity open-source
              blockchain protocol.
            </p>
            <p>Additionally, Foundation supports:</p>
            <ul>
              <li>Open Source Development</li>
              <li>Research and Education Activities</li>
              <li>Community Growth oriented activities</li>
              <li>Culture and Art</li>
              <li>Governance, DAO</li>
              <li>NFT</li>
            </ul>
            <h2>Call for Proposals</h2>
            <h4>Who can apply?</h4>
            <p>Individuals, teams and non-commercial projects</p>
            <h4>When the call is open?</h4>
            <p>Always!</p>
            <h4>How to apply?</h4>
            <p>
              To apply, please create an account on the official æternity{" "}
              <a href="https://forum.aeternity.com">Forum</a>
            </p>
            <p>
              Please, prepare your submission according to these required
              application guidelines. Additional resources are available{" "}
              <a href="https://forum.aeternity.com/c/li-foundation/grant/81">
                HERE
              </a>
            </p>
            <p>
              For any question - feel free to contact us on{" "}
              <a href="mailto:hello@aeternity-foundation.org">
                hello@aeternity-foundation.org
              </a>
            </p>
          </div>
        </div>
      </div>
      <div />
    </>
  );
}

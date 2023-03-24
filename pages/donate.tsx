import { updateTitleTag } from "./_app";
import { SVGAnimation } from "./index";
import { assetUrl } from "../lib";

export default function Home() {
  return (
    <>
      {updateTitleTag("Donations")}
      <SVGAnimation
        data={assetUrl("/bg/donate.svg")}
        className={
          "svg-animated-bg relative lg:absolute top-0 right-0 overflow-hidden will-change-[transform, opacity, filter] z-0 w-auto lg:w-[30%] mt-[-20px]  lg:mr-[4%]"
        }
      />
      <div className="flex mt-[8%] max-w-7xl mx-auto items-center justify-between px-8 ">
        <div className="md:w-4/5 lg:w-3/5 z-0 pb-16">
          <div className="prose text-xl bg-[rgba(255,255,255,0.9)]">
            <h1 className="text-5xl font-normal">Donations</h1>
            <p>
              Thank you for considering making a donation to the foundation. We
              greatly appreciate your support and generosity.
            </p>
            <p>
              Unfortunately, due to the laws of the Principality of
              Liechtenstein, we are unable to accept anonymous donations. In
              order to comply with local regulations, we require all donors to
              provide their name and contact information.
            </p>
            <p>
              We apologize for any inconvenience this may cause. Thank you for
              your understanding and support. Your donation will make a real
              difference and will help us to continue our work. Your information
              will be kept confidential and will only be used for the purposes
              of processing your donation and issuing a tax receipt, if
              applicable.
            </p>
            <p>
              We accept donations from organizations or individuals. If you wish
              to donate, please email us at:{" "}
              <a
                className="link text-primary"
                href="mailto:hello@aeternity-foundation.org"
              >
                hello@aeternity-foundation.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

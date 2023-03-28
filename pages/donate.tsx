import { updateTitleTag } from "./_app";
import { assetUrl } from "../lib";
import React from "react";
import { SVGAnimation } from "../components/SVGAnimation";
import { SimpleContainer } from "../components/SimpleContainer";

export default function Home() {
  return (
    <>
      {updateTitleTag("Donations")}
      <SVGAnimation
        data={assetUrl("/bg/donate.svg")}
        className="lg:w-[30%] mt-[-20px] lg:mr-[4%]"
      />
      <SimpleContainer>
        <>
          <h1 className="text-5xl font-normal">Donations</h1>
          <p>
            Thank you for considering making a donation to the foundation. We
            greatly appreciate your support and generosity.
          </p>
          <p>
            Unfortunately, due to the laws of the Principality of Liechtenstein,
            we are unable to accept anonymous donations. In order to comply with
            local regulations, we require all donors to provide their name and
            contact information.
          </p>
          <p>
            We apologize for any inconvenience this may cause. Thank you for
            your understanding and support. Your donation will make a real
            difference and will help us to continue our work. Your information
            will be kept confidential and will only be used for the purposes of
            processing your donation and issuing a tax receipt, if applicable.
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
        </>
      </SimpleContainer>
    </>
  );
}

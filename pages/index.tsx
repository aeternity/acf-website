import { assetUrl } from "../lib";
import Link from "next/link";
import React from "react";
import { SVGAnimation } from "../components/SVGAnimation";
import { SimpleContainer } from "../components/SimpleContainer";

export default function Home() {
  return (
    <>
      <SVGAnimation data={assetUrl("/bg/hexagon.svg")} className="lg:w-[35%]" />
      <SimpleContainer>
        <>
          <h1 className="text-5xl text-primary font-bold mb-5 ">
            Æternity
            <div className="font-normal text-xl sm:text-4xl leading-8">
              Crypto Foundation
            </div>
          </h1>
          <div className="font-[500] mb-6 text-xl">
            <p className="mb-2">
              The Æternity Crypto Foundation brings together all the necessary
              resources, expertise and infrastructure to ensure a stable
              environment and thriving open source ecosystem around the æternity
              blockchain.
            </p>
            <p className="mb-2">
              Æternity is a scalable, decentralized platform that enables
              efficient and secure communication and value transfer between
              participants.
            </p>
            <p>
              We believe that æternity has the potential to revolutionize the
              way we interact and do business.
            </p>
          </div>
          <Link href="/about">
            <span className="btn btn-primary rounded-full drop-shadow-[-2px_6px_8px_rgba(201,204,209,1)] hover:scale-105 font-bold py-3 px-6 mb-6">
              See More
            </span>
          </Link>
        </>
      </SimpleContainer>
    </>
  );
}

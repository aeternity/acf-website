import { BlogPost } from "contentlayer/generated";
import { assetUrl } from "../lib";
import Link from "next/link";

export const SVGAnimation = ({
  data,
  className,
}: {
  data: string;
  className?: string;
}) => (
  <div className="relative">
    <object className={className} type="image/svg+xml" data={data}></object>
  </div>
);

export default function Home({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <SVGAnimation
        data={assetUrl("/bg/hexagon.svg")}
        className="svg-animated-bg relative lg:absolute top-0 right-0 overflow-hidden will-change-[transform, opacity, filter] z-0 backface bg-contain bg-right-top w-auto lg:w-[35%]"
      />
      <div>
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-full">
            <div className="max-w-7xl mt-[15%]">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-4/5 lg:w-3/5 p-8 z-10 relative bg-[rgba(255,255,255,0.9)]">
                  <h2 className="text-5xl text-primary font-bold mb-5">
                    Æternity
                    <div className="font-normal text-xl sm:text-4xl leading-8">
                      Crypto Foundation
                    </div>
                  </h2>
                  <div className="font-[500] font-sans opacity-70 mb-6 text-xl">
                    <p className="mb-2">
                      The Æternity Crypto Foundation brings together all the
                      necessary resources, expertise and infrastructure to
                      ensure a stable environment and thriving open source
                      ecosystem around the æternity blockchain.
                    </p>
                    <p className="mb-2">
                      Æternity is a scalable, decentralized platform that
                      enables efficient and secure communication and value
                      transfer between participants.
                    </p>
                    <p>
                      We believe that æternity has the potential to
                      revolutionize the way we interact and do business.
                    </p>
                  </div>
                  <Link href="/about">
                    <span className="btn btn-primary rounded-full drop-shadow-[-2px_6px_8px_rgba(201,204,209,1)] hover:scale-105 font-bold py-3 px-6 mb-6">
                      See More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

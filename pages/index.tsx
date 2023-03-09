import Link from "next/link";
import { Constellation } from "../components/constellation";

export default function Home() {
  return (
    <>
      <div className="absolute w-[100%] h-[100%] main-bg-img" />
      <div className="relative h-[100vh] sm:h-[70vh]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-center items-center h-full">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-3/5 home-left-container z-10 relative">
                  <h2 className="text-4xl text-[#37C4D5] font-bold mb-5">
                    Æternity
                    <div className="font-normal text-xl sm:text-2xl leading-8">
                      Crypto Foundation
                    </div>
                  </h2>
                  <p className="text-white mb-2 text-lg">
                    The Æternity Crypto Foundation brings together all the
                    necessary resources, expertise and infrastructure to ensure
                    a stable environment and thriving open source ecosystem
                    around the æternity blockchain.
                  </p>
                  <p className="text-white text-lg mb-2">
                    Æternity is a scalable, decentralized platform that enables
                    efficient and secure communication and value transfer
                    between participants.
                  </p>
                  <p className="text-white text-lg mb-6">
                    We believe that æternity has the potential to revolutionize
                    the way we interact and do business.
                  </p>
                  <Link href="/about">
                    <span
                      className="link btn-outline btn-ghost rounded-full
                    hover:opacity-80 text-[#37C4D5] font-bold py-3 px-6 mb-6"
                    >
                      See More
                    </span>
                  </Link>
                </div>
                <div className="md:w-2/5 ml-10 flex justify-center" />
              </div>
            </div>
          </div>
        </div>
        <Constellation />
      </div>
    </>
  );
}

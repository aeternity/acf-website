import { allPeople, Person, Markdown } from "contentlayer/generated";
import { PersonCard } from "../components/PersonCard";
import { updateTitleTag } from "./_app";
import { useState } from "react";
import Link from "next/link";
import { assetUrl } from "../lib";
import Image from "next/image";

export async function getStaticProps() {
  const persons = allPeople.sort((a, b) => a.index - b.index);
  return { props: { persons } };
}

export default function Home({ persons }: { persons: Person[] }) {
  const [info, setInfo] = useState<Markdown | null>(null);
  const listStyles = {
    li: "flex items-center m-4",
    text: "ml-4 text-xl",
  };

  return (
    <>
      {updateTitleTag("Who We Are")}
      <div className="who-we-are flex relative justify-center items-center p-2 sm:p-5">
        <div className="max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="clear-both">
            <h1 className="text-7xl font-bold text-center text-primary mt-8 mb-8">
              Who We Are
            </h1>
            <div className="bg-[rgba(255,255,255,0.9)] p-4">
              <div className="text-xl">
                <p>
                  The Æternity Crypto Foundation is a non-profit organization
                  established in the Principality of Liechtenstein. The
                  Foundation brings together all the necessary resources and
                  infrastructure to ensure a stable environment and thriving
                  open source ecosystem around the æternity blockchain.
                </p>
                <p>
                  The organization is committed to promoting technical
                  excellence and user-friendly applications as well as
                  supporting projects built on the æternity blockchain.
                </p>
                <h2 className="pt-4 pb-1 text-2xl">
                  Core and Essentials Development Domains
                </h2>
                <p>
                  The 7 domains below are current areas of focus for the core
                  open source development effort, listed in order of approximate
                  funding priority. The order may be adjusted as development
                  progresses and priorities evolve.
                </p>
                <ul className="option-list list-disc list-inside mt-3">
                  <li className={listStyles.li}>
                    <Image
                      className=""
                      src={assetUrl("icons/protocol-svgrepo-com.svg")}
                      width={40}
                      height={40}
                    />
                    <span className={listStyles.text}>
                      Protocol Maintenance
                    </span>
                  </li>
                  <li className={listStyles.li}>
                    <Image
                      className="text-primary"
                      src={assetUrl(
                        "icons/maintenance-documents-svgrepo-com.svg"
                      )}
                      width={40}
                      height={40}
                    />
                    <span className={listStyles.text}>
                      Protocol Development
                    </span>
                  </li>
                  <li className={listStyles.li}>
                    <Image
                      className="text-primary"
                      src={assetUrl("icons/api-svgrepo-com.svg")}
                      width={40}
                      height={40}
                    />
                    <span className={listStyles.text}>SDKs</span>
                  </li>
                  <li className={listStyles.li}>
                    <Image
                      className="text-primary"
                      src={assetUrl("icons/wallet-svgrepo-com.svg")}
                      width={40}
                      height={40}
                    />
                    <span className={listStyles.text}>
                      {" "}
                      Wallets and Interfaces
                    </span>
                  </li>
                  <li className={listStyles.li}>
                    <Image
                      className="text-primary"
                      src={assetUrl("icons/app-update-svgrepo-com.svg")}
                      width={40}
                      height={40}
                    />
                    <span className={listStyles.text}>
                      Æpps and Integrations
                    </span>
                  </li>
                  <li className={listStyles.li}>
                    <Image
                      className="text-primary"
                      src={assetUrl("icons/api-settings-svgrepo-com.svg")}
                      width={40}
                      height={40}
                    />
                    <span className={listStyles.text}>
                      Middleware Backend APIBackend API - Dev-Tools
                    </span>
                  </li>
                  <li className={listStyles.li}>
                    <Image
                      className="text-primary"
                      src={assetUrl("icons/window-dev-tools-svgrepo-com.svg")}
                      width={40}
                      height={40}
                    />
                    <span className={listStyles.text}>Dev-Tools</span>
                  </li>
                </ul>
                <p className="pt-2 text-xl">
                  Read more about{" "}
                  <Link href="/philosophy">
                    <a className="link text-primary">our philosophy</a>
                  </Link>{" "}
                  and the{" "}
                  <Link href="/grants">
                    <a className="link text-primary">grants program</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="clear-both">
              <div className="about relative">
                <div className="mt-10 m-0">
                  <div className="text-center">
                    <h3 className="text-6xl font-bold text-primary">People</h3>
                    <div className="container min-h-[50vh]">
                      {persons.map((person, idx) => (
                        <PersonCard
                          key={idx}
                          person={person}
                          onClick={(info) => setInfo(info)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Put this part before </body> tag */}
        {info && (
          <>
            <input type="checkbox" id="modal-about" className="modal-toggle" />
            <label htmlFor="modal-about" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <label
                  htmlFor="modal-about"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  x
                </label>
                <p className="py-4">
                  <div
                    className="cl-post-body"
                    dangerouslySetInnerHTML={{ __html: info.html }}
                  />
                </p>
              </label>
            </label>
          </>
        )}
      </div>
    </>
  );
}

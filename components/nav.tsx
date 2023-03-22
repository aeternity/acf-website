import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assetUrl } from "../lib";
import { NAVBAR_LINKS_DATA } from "./NavBarLink";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white p-2">
          <Link href="/">
            <Image
              src={assetUrl("/logoAE.svg")}
              height={70}
              width={150}
              alt="Aeternity Crypto Foundation Logo"
              priority={true}
              className="cursor-pointer"
            />
          </Link>
          <button
            className="text-gray hover:text-gray-200 focus:text-gray-200 lg:hidden pr-2"
            type="button"
            onClick={() => setOpen(true)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-7v2h16V6H4z"
              />
            </svg>
          </button>
          {open && (
            <div>
              <div
                className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm"
                aria-hidden="true"
                onClick={() => setOpen(false)}
              />
              <div
                className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 opacity-100 scale-100"
                tabIndex={-1}
              >
                <div className="flex flex-row-reverse items-center justify-between">
                  <button
                    aria-label="Close menu"
                    className="-m-1 p-1"
                    type="button"
                    tabIndex={0}
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 text-zinc-500"
                    >
                      <path
                        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <h2 className="text-sm font-medium text-zinc-600">
                    Navigation
                  </h2>
                </div>
                <nav className="mt-6">
                  <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                    {NAVBAR_LINKS_DATA.map((link) => (
                      <li key={link.href} onClick={() => setOpen(false)}>
                        <Link href={link.href}>
                          <span className="block cursor-pointer py-4 pl-4 w-[100%] h-[100%] hover:bg-accent/30">
                            {link.text}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
          <nav className="hidden lg:flex">
            {NAVBAR_LINKS_DATA.map((link) => (
              <Link href={link.href} key={link.href}>
                <a className="text-gray hover:text-secondary px-3 py-2 rounded font-semibold">
                  {link.text}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

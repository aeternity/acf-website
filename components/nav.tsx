import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assetUrl } from "../lib";
import { NAVBAR_LINKS_DATA } from "./NavBarLink";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-20 py-2 px-2 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <a href="#">
              <Image
                src={assetUrl("/ACF-logo-white.svg")}
                height={50}
                width={150}
                alt={"Aeternity Crypto Foundation Logo"}
                priority={true}
              />
            </a>
          </Link>
          <button
            className="text-gray hover:text-gray-200 focus:text-gray-200 lg:hidden"
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
                className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm 0"
                aria-hidden="true"
                onClick={() => setOpen(false)}
              ></div>
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
                      ></path>
                    </svg>
                  </button>
                  <h2 className="text-sm font-medium text-zinc-600">
                    Navigation
                  </h2>
                </div>
                <nav className="mt-6">
                  <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                    {NAVBAR_LINKS_DATA.map((link) => (
                      <li key={link.href}>
                        <a className="block py-2" href={link.href}>
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
          <nav className="hidden lg:flex">
            {NAVBAR_LINKS_DATA.map((link) => (
              <a
                key={link.href}
                className="text-gray hover:text-secondary px-3 py-2 rounded"
                href={link.href}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </header>
      {/*<div className="fixed w-full top-0 z-30 h-16 pt-6 bg-white">*/}
      {/*  <div className="sm:px-8 top-[20,theme(spacing.6))] w-full">*/}
      {/*    <div className="mx-auto max-w-7xl lg:px-8">*/}
      {/*      <div className="relative px-4 sm:px-8 lg:px-12">*/}
      {/*        <div className="mx-auto">*/}
      {/*          <div className="relative flex gap-4">*/}
      {/*            <div className="flex flex-1">*/}
      {/*              <Link href={"/"}>*/}
      {/*                <a>*/}
      {/*                  <Image*/}
      {/*                    src={assetUrl("/ACF-logo-white.svg")}*/}
      {/*                    height={42}*/}
      {/*                    width={150}*/}
      {/*                    alt={"Aeternity Crypto Foundation Logo"}*/}
      {/*                    priority={true}*/}
      {/*                  />*/}
      {/*                </a>*/}
      {/*              </Link>*/}
      {/*            </div>*/}
      {/*            <div className="flex justify-center">*/}
      {/*              <nav className="pointer-events-auto hidden md:block">*/}
      {/*                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">*/}
      {/*                  {NAVBAR_LINKS_DATA.map((link) => (*/}
      {/*                    <li key={link.href}>*/}
      {/*                      <a*/}
      {/*                        className="relative block px-3 py-2 transition hover:text-secondary"*/}
      {/*                        href={link.href}*/}
      {/*                      >*/}
      {/*                        {link.text}*/}
      {/*                      </a>*/}
      {/*                    </li>*/}
      {/*                  ))}*/}
      {/*                </ul>*/}
      {/*              </nav>*/}
      {/*            </div>*/}
      {/*            <div className="flex flex-1 justify-end">*/}
      {/*              <div className="pointer-events-auto md:hidden">*/}
      {/*                <button*/}
      {/*                  className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur"*/}
      {/*                  type="button"*/}
      {/*                  onClick={() => setOpen(true)}*/}
      {/*                >*/}
      {/*                  Menu*/}
      {/*                  <svg*/}
      {/*                    viewBox="0 0 8 6"*/}
      {/*                    aria-hidden="true"*/}
      {/*                    className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700"*/}
      {/*                  >*/}
      {/*                    <path*/}
      {/*                      d="M1.75 1.75 4 4.25l2.25-2.5"*/}
      {/*                      fill="none"*/}
      {/*                      strokeWidth="1.5"*/}
      {/*                      strokeLinecap="round"*/}
      {/*                      strokeLinejoin="round"*/}
      {/*                    ></path>*/}
      {/*                  </svg>*/}
      {/*                </button>*/}
      {/*                {open && (*/}
      {/*                  <div>*/}
      {/*                    <div*/}
      {/*                      className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm 0"*/}
      {/*                      aria-hidden="true"*/}
      {/*                      onClick={() => setOpen(false)}*/}
      {/*                    ></div>*/}
      {/*                    <div*/}
      {/*                      className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 opacity-100 scale-100"*/}
      {/*                      tabIndex={-1}*/}
      {/*                    >*/}
      {/*                      <div className="flex flex-row-reverse items-center justify-between">*/}
      {/*                        <button*/}
      {/*                          aria-label="Close menu"*/}
      {/*                          className="-m-1 p-1"*/}
      {/*                          type="button"*/}
      {/*                          tabIndex={0}*/}
      {/*                          onClick={() => setOpen(false)}*/}
      {/*                        >*/}
      {/*                          <svg*/}
      {/*                            viewBox="0 0 24 24"*/}
      {/*                            aria-hidden="true"*/}
      {/*                            className="h-6 w-6 text-zinc-500"*/}
      {/*                          >*/}
      {/*                            <path*/}
      {/*                              d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"*/}
      {/*                              fill="none"*/}
      {/*                              stroke="currentColor"*/}
      {/*                              strokeWidth="1.5"*/}
      {/*                              strokeLinecap="round"*/}
      {/*                              strokeLinejoin="round"*/}
      {/*                            ></path>*/}
      {/*                          </svg>*/}
      {/*                        </button>*/}
      {/*                        <h2 className="text-sm font-medium text-zinc-600">*/}
      {/*                          Navigation*/}
      {/*                        </h2>*/}
      {/*                      </div>*/}
      {/*                      <nav className="mt-6">*/}
      {/*                        <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">*/}
      {/*                          {NAVBAR_LINKS_DATA.map((link) => (*/}
      {/*                            <li key={link.href}>*/}
      {/*                              <a*/}
      {/*                                className="block py-2"*/}
      {/*                                data-headlessui-state="open"*/}
      {/*                                href={link.href}*/}
      {/*                              >*/}
      {/*                                {link.text}*/}
      {/*                              </a>*/}
      {/*                            </li>*/}
      {/*                          ))}*/}
      {/*                        </ul>*/}
      {/*                      </nav>*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                )}*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

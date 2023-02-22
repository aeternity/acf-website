import { ReactElement, useState } from "react";
import Link from "next/link";
import { NavBarLinks } from "./NavBarLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import Image from "next/image";
import { assetUrl } from "../lib";
import { Footer } from "./footer";
import { Constellation } from "./constellation";
import { Nav } from "./nav";

/*export default function Layout({ children }: { children: ReactElement }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="bg-white">
      <input
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={() => setDrawerOpen(true)}
      />
      <div className="drawer-content">
        <div className="navbar bg-accent shadow shadow-sm border-b border-secondary/20 fixed top-0 z-50 w-full ">
          <div className="navbar-start">
            <label
              className="btn btn-ghost drawer-button md:hidden text-2xl"
              onClick={() => setDrawerOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} width={32} height={32} />
            </label>
            <Link href={"/"}>
              <a className="btn btn-ghost p-0 pl-10 bg-accent hover:bg-accent">
                <Image
                  src={assetUrl("/ACF-logo-white.svg")}
                  height={48}
                  width={150}
                  alt={"Aeternity Crypto Foundation Logo"}
                  priority={true}
                />
              </a>
            </Link>
          </div>
          <div className="hidden md:inline-flex ">
            <ul className="menu menu-horizontal space-x-1 p-0">
              <NavBarLinks />
            </ul>
          </div>
        </div>
        <Constellation />
        <main className="min-h-[60vh] my-24 px-2 sm:px-4 lg:mx-8 2xl:mx-12">
          {children}
        </main>
        <Footer />
      </div>

      <div className="drawer-side" onClick={() => setDrawerOpen(false)}>
        <label
          className="drawer-overlay bg-secondary-content"
          onClick={() => setDrawerOpen(false)}
        />
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content p-2 bg-base-100 w-52"
        >
          <ul>
            <Link href={"/"}>
              <a className="btn btn-ghost normal-case text-xl hover:bg-base-100">
                Home
              </a>
            </Link>
          </ul>
          <div className={`text-left align-left`}>
            <NavBarLinks />
          </div>
        </ul>
      </div>
    </div>
  );
}
*/
export default function Layout({ children }: { children: ReactElement }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="bg-white flex flex-col min-h-[100vh]">
      <Constellation />
      <Nav />
      <main className="flex-1 z-10 p-6 my-24 px-2 mx-auto bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}

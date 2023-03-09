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

export default function Layout({ children }: { children: ReactElement }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-[100vh] bg-[#f7f9fa]">
      <Nav />
      <main className="relative flex-1 mt-[65px]">{children}</main>
      <Footer />
    </div>
  );
}

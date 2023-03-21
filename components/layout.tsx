import { ReactElement } from "react";
import { Footer } from "./footer";
import { Nav } from "./nav";
import { assetUrl } from "../lib";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Nav />
      <main
        className={"main relative flex-1 mt-[65px] bg-cover bg-no-repeat"}
        style={{
          background: "url(" + assetUrl("/bg/dot-net.png") + ")",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

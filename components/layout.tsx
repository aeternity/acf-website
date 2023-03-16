import { ReactElement } from "react";
import { Footer } from "./footer";
import { Nav } from "./nav";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Nav />
      <main className="relative flex-1 mt-[65px]">{children}</main>
      <Footer />
    </div>
  );
}

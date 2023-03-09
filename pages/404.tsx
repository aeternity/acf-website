import { updateTitleTag } from "./_app";
import Link from "next/link";
import { Constellation } from "../components/constellation";

export default function FourOhFour() {
  return (
    <>
      {updateTitleTag("Page not found")}

      <div className="text-center pt-12 text-2xl">
        <h2>404 - Page Not Found</h2>
        <p>¯\_(ツ)_/¯</p>
        <p>
          Check that you typed the address correctly or go back to the{" "}
          <Link href="/">home page</Link>
        </p>
      </div>
      <Constellation />
    </>
  );
}

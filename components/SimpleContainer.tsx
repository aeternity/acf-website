import { ReactElement } from "react";

export function SimpleContainer({
  children,
  config,
}: {
  children: ReactElement;
  config?: { bg?: string };
}) {
  return (
    <div className="flex mt-[8%] max-w-7xl mx-auto items-center justify-between px-8 ">
      <div className="md:w-4/5 lg:w-3/5 z-0 pb-16">
        <div className="prose text-xl bg-[rgba(255,255,255,0.9)]">
          <div className="clear-both">{children}</div>
        </div>
      </div>
    </div>
  );
}

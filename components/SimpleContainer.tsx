import { ReactElement } from "react";

export function SimpleContainer({ children }: { children: ReactElement }) {
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center p-2 sm:p-5 relative z-10">
        <div className="max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-white">
          <div className="clear-both">{children}</div>
        </div>
      </div>
    </div>
  );
}

export const SVGAnimation = ({
  data,
  className,
}: {
  data: string;
  className?: string;
}) => (
  <div className="relative">
    <object
      className={
        "svg-animated-bg relative lg:absolute top-0 right-0 overflow-hidden will-change-[transform, opacity, filter] z-0 backface bg-contain bg-right-top w-auto " +
        className
      }
      type="image/svg+xml"
      data={data}
    />
  </div>
);

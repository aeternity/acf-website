export const SVGAnimation = ({
  data,
  className,
}: {
  data: string;
  className?: string;
}) => (
  <div className="relative left-8 lg:left-0">
    <object
      className={`svg-animated-bg relative lg:absolute
      max-h-[200px] md:max-h-[300px] lg:max-h-max
      top-0 right-0 
      overflow-hidden will-change-[transform, opacity, filter] z-0 
      backface bg-contain bg-right-top w-auto ${className}`}
      type="image/svg+xml"
      data={data}
    />
  </div>
);

export const SVGAnimation = ({
  data,
  className,
}: {
  data: string;
  className?: string;
}) => (
  <div className="relative">
    <object className={className} type="image/svg+xml" data={data}></object>
  </div>
);

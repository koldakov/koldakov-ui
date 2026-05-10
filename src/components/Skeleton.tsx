import "./Skeleton.css";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  inline?: boolean;
}

export const Skeleton = ({
  width = "100%",
  height = "1em",
  className = "",
  inline = false,
}: SkeletonProps) => (
  <span
    className={`skeleton${inline ? " skeleton--inline" : ""}${className ? " " + className : ""}`}
    style={{ width, height }}
  />
);

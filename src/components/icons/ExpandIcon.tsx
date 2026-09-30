import { IconProps } from ".";

export const ExpandIcon = ({
  size = 22,
  height,
  className,
  pointerEvents,
  color = "black",
}: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      fill={color}
      width={size}
      height={height ? height : size}
      className={className}
      pointerEvents={pointerEvents}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zM4 14h2v4h4v2H4v-6zm14 0h2v6h-6v-2h4v-4z"/>
    </svg>
  );
};

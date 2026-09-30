import { IconProps } from ".";

export const ExternalLinkIcon = ({
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
      <path d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42L17.59 5H14V3zM5 5h5v2H6v11h11v-4h2v6H4V5h1z"/>
    </svg>
  );
};

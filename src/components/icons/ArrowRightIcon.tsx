import { IconProps } from ".";

export const ArrowRightIcon = ({
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
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={height ? height : size}
      className={className}
      pointerEvents={pointerEvents}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 12h16" /><path d="M14 6l6 6-6 6" />
    </svg>
  );
};

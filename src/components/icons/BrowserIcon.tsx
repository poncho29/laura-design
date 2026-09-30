import { IconProps } from ".";

export const BrowserIcon = ({
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={height ? height : size}
      className={className}
      pointerEvents={pointerEvents}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18" /><circle cx="6.5" cy="6.5" r=".6" fill="currentColor" /><circle cx="9" cy="6.5" r=".6" fill="currentColor" /><path d="M8 14h4M8 17h8" />
    </svg>
  );
};

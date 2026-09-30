import { IconProps } from ".";

export const DownloadIcon = ({
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
      <path d="M12 3v12" /><path d="M7 10.5l5 5 5-5" /><path d="M4 20h16" />
    </svg>
  );
};

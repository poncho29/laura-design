import { IconProps } from ".";

export const InstragramIcon = ({
  size = 22,
  className,
  pointerEvents,
  color = "black",
  onPress = () => {},
}: IconProps) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      className={className}
      pointerEvents={pointerEvents}
      onClick={onPress}
      viewBox="0 0 21 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.0045 4.87225C7.16613 4.87225 4.87672 7.16166 4.87672 10C4.87672 12.8383 7.16613 15.1277 10.0045 15.1277C12.8428 15.1277 15.1322 12.8383 15.1322 10C15.1322 7.16166 12.8428 4.87225 10.0045 4.87225ZM10.0045 13.3337C8.17026 13.3337 6.67076 11.8387 6.67076 10C6.67076 8.16133 8.16579 6.6663 10.0045 6.6663C11.8431 6.6663 13.3382 8.16133 13.3382 10C13.3382 11.8387 11.8387 13.3337 10.0045 13.3337ZM16.538 4.6625C16.538 5.32746 16.0025 5.85853 15.342 5.85853C14.677 5.85853 14.1459 5.32299 14.1459 4.6625C14.1459 4.00201 14.6815 3.46647 15.342 3.46647C16.0025 3.46647 16.538 4.00201 16.538 4.6625ZM19.9342 5.87638C19.8583 4.27424 19.4924 2.85507 18.3186 1.68582C17.1494 0.516568 15.7302 0.150619 14.1281 0.070289C12.4769 -0.0234297 7.52761 -0.0234297 5.87638 0.070289C4.2787 0.146156 2.85953 0.512105 1.68582 1.68136C0.512105 2.85061 0.150619 4.26978 0.070289 5.87192C-0.0234297 7.52315 -0.0234297 12.4724 0.070289 14.1236C0.146156 15.7258 0.512105 17.1449 1.68582 18.3142C2.85953 19.4834 4.27424 19.8494 5.87638 19.9297C7.52761 20.0234 12.4769 20.0234 14.1281 19.9297C15.7302 19.8538 17.1494 19.4879 18.3186 18.3142C19.4879 17.1449 19.8538 15.7258 19.9342 14.1236C20.0279 12.4724 20.0279 7.52761 19.9342 5.87638ZM17.801 15.8953C17.4529 16.7701 16.779 17.4439 15.8998 17.7965C14.5833 18.3186 11.4593 18.1981 10.0045 18.1981C8.54959 18.1981 5.42118 18.3142 4.10912 17.7965C3.23441 17.4484 2.56053 16.7745 2.20797 15.8953C1.68582 14.5788 1.80632 11.4549 1.80632 10C1.80632 8.54513 1.69028 5.41671 2.20797 4.10465C2.55606 3.22995 3.22995 2.55606 4.10912 2.2035C5.42564 1.68136 8.54959 1.80185 10.0045 1.80185C11.4593 1.80185 14.5878 1.68582 15.8998 2.2035C16.7745 2.5516 17.4484 3.22548 17.801 4.10465C18.3231 5.42118 18.2026 8.54513 18.2026 10C18.2026 11.4549 18.3231 14.5833 17.801 15.8953Z" fill="#0D0D0D"/>
    </svg>
  );
};
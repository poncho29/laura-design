import { IconProps } from ".";

export const LocationIcon = ({
  size = 22,
  height,
  className,
  pointerEvents,
  color = "black",
  onPress = () => {},
}: IconProps) => {
  return (
    <svg
      fill={color}
      width={size}
      height={height ? height : size}
      className={className}
      pointerEvents={pointerEvents}
      onClick={onPress}
      viewBox="0 0 18 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M8.60656 25C8.60656 25 17.2131 13.3598 17.2131 8.60656C17.2131 3.85329 13.3598 0 8.60656 0C3.85329 0 0 3.85329 0 8.60656C0 13.3598 8.60656 25 8.60656 25ZM8.60657 12.2951C10.6437 12.2951 12.2951 10.6437 12.2951 8.60658C12.2951 6.56947 10.6437 4.91806 8.60657 4.91806C6.56945 4.91806 4.91804 6.56947 4.91804 8.60658C4.91804 10.6437 6.56945 12.2951 8.60657 12.2951Z" fill="black"/>
    </svg>
  );
};
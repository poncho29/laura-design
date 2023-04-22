import { IconProps } from ".";

export const MailIcon = ({
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
      viewBox="0 0 24 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.7273 0H3.27273C1.46536 0 0 1.46536 0 3.27273V16.3636C0 18.171 1.46536 19.6364 3.27273 19.6364H20.7273C22.5346 19.6364 24 18.171 24 16.3636V3.27273C24 1.46536 22.5346 0 20.7273 0ZM20.7273 2.18182C20.8533 2.18182 20.9744 2.20309 21.0867 2.24264L12 9.51218L2.91327 2.24264C3.02564 2.20309 3.14673 2.18182 3.27273 2.18182H20.7273ZM20.7273 17.4545H3.27273C2.67027 17.4545 2.18182 16.9661 2.18182 16.3636V4.45145L11.3185 11.7608C11.5175 11.9204 11.7586 12 12 12C12.2414 12 12.4825 11.9204 12.6815 11.7608L21.8182 4.45145V16.3636C21.8182 16.9661 21.3297 17.4545 20.7273 17.4545Z" fill="#0D0D0D"/>
    </svg>
  );
};
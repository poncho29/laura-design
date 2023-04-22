import { MenuIcon } from "./MenuIcon";
import { LogoIcon } from "./LogoIcon";
import { MailIcon } from "./MailIcon";
import { BehindIncon } from "./BehindIncon";
import { WhatsappIcon } from "./WhatsappIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { InstragramIcon } from "./InstragramIcon";

const IconComponents = {
  MenuIcon,
  LogoIcon,
  MailIcon,
  BehindIncon,
  WhatsappIcon,
  LinkedinIcon,
  InstragramIcon,
};

type IconsComponentsType = typeof IconComponents;

export type IconList = keyof IconsComponentsType;

export interface IconProps {
  size?: number;
  color?: string;
  height?: number;
  className?: string;
  iconName?: IconList;
  pointerEvents?: string;
  onPress?: () => void;
}

export const Icon = ({
  className,
  size = 22,
  height= 22,
  pointerEvents,
  color = "black",
  iconName = "MenuIcon",
  onPress = () => {},
}: IconProps) => {
  const IconComponent = IconComponents[iconName];
  return (
    <IconComponent
      size={size}
      color={color}
      height={height}
      className={className}
      pointerEvents={pointerEvents}
      onPress={onPress}
    />
  );
}
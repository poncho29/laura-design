import { IconProps } from ".";

export const BehindIncon = ({
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
      viewBox="0 0 33 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0V20H9.66216C10.5574 20 16.723 19.8184 16.723 14.1892C16.723 10.6715 14.3032 9.47635 13.0743 9.12162C13.978 8.6951 15.777 7.68159 15.777 4.96622C15.777 3.45439 15.5617 0 9.39189 0H0ZM22.027 1.85811V3.68243H29.4932V1.85811H22.027ZM4.39189 3.41216H8.51351C8.90203 3.41216 11.5203 3.20524 11.5203 5.70946C11.5203 7.85051 9.62838 8.07432 8.85135 8.07432H4.39189V3.41216ZM25.9459 5.33784C20.2998 5.33784 19.1216 10.2407 19.1216 12.3649C19.1216 18.6698 24.2905 19.3919 25.9459 19.3919C30.4096 19.3919 31.6765 16.5034 32.1959 14.8986H28.9527C28.826 15.3125 27.8801 16.6554 26.0811 16.6554C23.0659 16.6554 22.8041 14.299 22.8041 13.2432H32.3987C32.5929 9.59459 30.9966 5.33784 25.9459 5.33784ZM25.8446 8.07432C26.7441 8.07432 27.4704 8.33615 27.9054 8.81757C28.3404 9.30321 28.6613 10.0127 28.75 10.9459H22.8041C22.8209 10.6883 22.8801 10.3927 22.973 10.0676C23.0659 9.73395 23.2095 9.41723 23.4459 9.12162C23.6824 8.83024 24.0118 8.57686 24.3919 8.37838C24.7804 8.17568 25.2618 8.07432 25.8446 8.07432ZM4.39189 11.0811H9.15541C10.1014 11.0811 12.3311 11.2289 12.3311 13.9527C12.3311 16.5921 9.5228 16.5878 9.08784 16.5878H4.39189V11.0811Z" fill="black"/>
    </svg>
  );
};
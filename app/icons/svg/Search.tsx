import { IDefaultIconsProps } from "../interface/IDefaultIconProps";
const Search = (props: IDefaultIconsProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
  >
    <path
      stroke={props.color || "#ffff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.828 20.589-4.132-4.14m2.29-5.531a7.829 7.829 0 1 1-15.658 0 7.829 7.829 0 0 1 15.658 0Z"
    />
  </svg>
);
export default Search;

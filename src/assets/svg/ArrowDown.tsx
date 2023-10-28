import { ComponentProps } from "react";

const ArrowDown = (props?: ComponentProps<"svg">) => {
  return (
    <svg {...props} width="15" height="9" viewBox="0 0 15 9" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.29832 8.29832C8.08736 8.50923 7.80126 8.62771 7.50295 8.62771C7.20464 8.62771 6.91854 8.50923 6.70757 8.29832L0.343449 1.9342C0.236 1.83042 0.150295 1.70628 0.0913352 1.56903C0.0323751 1.43178 0.00134052 1.28415 4.24759e-05 1.13478C-0.00125557 0.985399 0.0272091 0.83726 0.0837751 0.699001C0.140341 0.560743 0.223876 0.435134 0.329505 0.329505C0.435134 0.223875 0.560742 0.140341 0.699001 0.0837746C0.837259 0.0272086 0.985399 -0.00125557 1.13478 4.24767e-05C1.28415 0.00134052 1.43177 0.0323751 1.56903 0.0913352C1.70628 0.150295 1.83042 0.236 1.9342 0.343449L7.50295 5.9122L13.0717 0.343449C13.2839 0.138521 13.5681 0.0251275 13.863 0.0276907C14.158 0.0302539 14.4402 0.148569 14.6487 0.357153C14.8573 0.565737 14.9756 0.847901 14.9782 1.14287C14.9808 1.43784 14.8674 1.72202 14.6624 1.9342L8.29832 8.29832Z"
      />
    </svg>
  );
};

export default ArrowDown;

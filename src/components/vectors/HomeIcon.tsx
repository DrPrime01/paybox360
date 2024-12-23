function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.825 18.9583H5.17502C2.89169 18.9583 1.04169 17.1 1.04169 14.8167V8.64166C1.04169 7.50833 1.74169 6.08333 2.64169 5.38333L7.13335 1.88333C8.48335 0.833332 10.6417 0.783332 12.0417 1.76667L17.1917 5.375C18.1834 6.06666 18.9584 7.55 18.9584 8.75833V14.825C18.9584 17.1 17.1084 18.9583 14.825 18.9583ZM7.90002 2.86667L3.40835 6.36666C2.81669 6.83333 2.29169 7.89166 2.29169 8.64166V14.8167C2.29169 16.4083 3.58335 17.7083 5.17502 17.7083H14.825C16.4167 17.7083 17.7084 16.4167 17.7084 14.825V8.75833C17.7084 7.95833 17.1334 6.85 16.475 6.4L11.325 2.79167C10.375 2.125 8.80835 2.15833 7.90002 2.86667Z"
        fill="white"
      />
      <path
        d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V12.5C9.375 12.1583 9.65833 11.875 10 11.875C10.3417 11.875 10.625 12.1583 10.625 12.5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
        fill="white"
      />
    </svg>
  );
}

export default HomeIcon;

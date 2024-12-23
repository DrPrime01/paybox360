function PersonalIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.50002 18.3338H12.5C16.6667 18.3338 18.3334 16.6671 18.3334 12.5005V7.50048C18.3334 3.33381 16.6667 1.66714 12.5 1.66714H7.50002C3.33335 1.66714 1.66669 3.33381 1.66669 7.50048V12.5005C1.66669 16.6671 3.33335 18.3338 7.50002 18.3338Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9593 9.09226C11.8759 9.68392 11.5259 10.1839 11.0426 10.4839V12.1339C11.0426 12.7089 10.5759 13.1756 10.0009 13.1756C9.42592 13.1756 8.95925 12.7089 8.95925 12.1339V10.4839C8.47592 10.1839 8.12591 9.68392 8.04258 9.09226C8.02591 9.00059 8.01758 8.90059 8.01758 8.80059C8.01758 7.53392 9.21759 6.55059 10.5343 6.90059C11.2009 7.07559 11.7426 7.61726 11.9176 8.28392C11.9926 8.55892 12.0009 8.83392 11.9593 9.09226Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M18.3347 9.09229H11.9597"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M8.04168 9.09216H1.66669"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export default PersonalIcon;

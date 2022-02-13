export const Star = (height, width) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60.7987 0L112.367 17.3864L165.313 29.9689L164.713 84.3859L169.107 138.629L117.168 154.874L66.9383 175.815L35.4382 131.438L0 90.1378L32.4709 46.4662L60.7987 0Z"
        fill="#FDECCF"
      />
      <path
        d="M82.1102 20.9759L107.571 37.5407L137.921 38.8026L140.844 69.0369L158.78 93.5517L136.965 114.688L128.982 143.996L98.8547 140.119L70.9635 152.15L55.211 126.178L28.4148 111.873L38.8987 83.3645L33.3756 53.4955L62.2013 43.9171L82.1102 20.9759Z"
        fill="#FBE2B6"
      />
      <path
        d="M81.796 49.349L95.1021 56.9549L109.527 51.7751L114.831 66.1546L129.21 71.4587L124.031 85.8834L131.637 99.1895L118.397 106.91L115.67 121.992L100.565 119.396L88.7818 129.197L78.8795 117.499L63.5531 117.432L63.487 102.106L51.7888 92.2037L61.5897 80.4205L58.9935 65.3155L74.0755 62.5889L81.796 49.349Z"
        fill="#FAD89E"
      />
    </svg>
  );
};

export const Scale = (height, width) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.20711 164C0.761653 164 0.538571 163.461 0.853554 163.146L163.146 0.853565C163.461 0.538583 164 0.761662 164 1.20711L164 163.5C164 163.776 163.776 164 163.5 164L1.20711 164Z"
        fill="#FDECCF"
      />
      <path
        d="M54.1201 109.88L108.24 55.76V164H54.1201V109.88Z"
        fill="#FBE2B6"
      />
      <path
        d="M108.24 55.76L163.146 0.853555C163.461 0.538573 164 0.761654 164 1.20711V163.5C164 163.776 163.776 164 163.5 164H108.24V55.76Z"
        fill="#FAD89E"
      />
    </svg>
  );
};

export const Circular = (height, width) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="80"
        cy="80.5"
        r="74"
        stroke="url(#paint0_angular_109_190)"
        stroke-width="12"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="26 26"
      />
      <defs>
        <radialGradient
          id="paint0_angular_109_190"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(80 80.5) rotate(112.479) scale(74.1213)"
        >
          <stop stop-color="#FAD89E" />
          <stop offset="1" stop-color="#FDECCF" />
        </radialGradient>
      </defs>
    </svg>
  );
};

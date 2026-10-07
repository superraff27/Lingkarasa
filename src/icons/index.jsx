const svgProps = {
  viewBox: "0 0 64 64", fill: "none", stroke: "currentColor",
  strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
};

export const ICONS = {
  donut: (
    <svg {...svgProps}>
      <circle cx="32" cy="32" r="28" /><circle cx="32" cy="32" r="9" />
      <path d="M17 24l5 2M40 12l-3 6M48 25l-5 3M19 42l5-2M45 44l-5-3M31 50v-5M14 33h5M33 17l3 4" />
    </svg>
  ),
  cup: (
    <svg {...svgProps}>
      <rect x="15" y="8" width="34" height="8" rx="3" />
      <path d="M18 16l4 40h20l4-40M20 30h24M21 42h22" />
    </svg>
  ),
  heart: (
    <svg {...svgProps}>
      <path d="M32 55C9 39 5 27 9 19c4-8 16-9 23 2 7-11 19-10 23-2 4 8 0 20-23 36z" />
    </svg>
  ),
  smile: (
    <svg {...svgProps}>
      <circle cx="32" cy="32" r="28" />
      <path d="M19 26q3.5-5 7 0M38 26q3.5-5 7 0M17 36h30c0 9-6 15-15 15s-15-6-15-15z" />
    </svg>
  ),
};

const infoSvg = { viewBox: "0 0 48 48", width: 34, height: 34, style: { color: "#5ab4e5" }, "aria-hidden": true };

export const INFO_ICONS = {
  pin: (
    <svg {...infoSvg} fill="currentColor">
      <path d="M24 4C15.7 4 9 10.5 9 18.6 9 29.5 24 44 24 44s15-14.500 15-25.400C39 10.500 32.300 4 24 4zm0 21a6.500 6.500 0 1 1 0-13 6.500 6.500 0 0 1 0 13z" />
    </svg>
  ),
  clock: (
    <svg {...infoSvg} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="19" /><circle cx="24" cy="24" r="14.500" strokeWidth="1.500" />
      <path d="M24 12v12l-7 5M24 8v2M24 38v2M8 24h2M38 24h2" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="34" height="34" style={{ color: "#5ab4e5" }} fill="currentColor" aria-hidden="true">
      <path d="M6.620 10.790c1.440 2.830 3.760 5.140 6.590 6.590l2.200-2.200c.270-.270.670-.360 1.020-.240 1.120.370 2.330.570 3.570.570.550 0 1 .450 1 1V20c0 .550-.450 1-1 1-9.390 0-17-7.610-17-17 0-.550.450-1 1-1h3.500c.550 0 1 .450 1 1 0 1.250.200 2.450.570 3.570.110.350.030.740-.250 1.020l-2.200 2.200z" />
    </svg>
  ),
  wa: (
    <svg viewBox="0 0 24 24" width="18" height="18" style={{ color: "#3a9bd0" }} fill="none" stroke="currentColor" strokeWidth="1.800" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.700-5A9 9 0 1 1 8 19.300L3 21z" />
      <path d="M9 8.500c0 3.500 3 6.500 6.500 6.500l1-1.500-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1-1-2L9 8.500z" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export const CupIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0a86c8" strokeWidth="1.2" aria-hidden="true">
    <path d="M5 11h12v4a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-4zM17 12h1.5a2.5 2.5 0 0 1 0 5H17M9 3c-1 1 1 2 0 3M13 3c-1 1 1 2 0 3M4 21h15" />
  </svg>
);

export const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" aria-hidden="true">
    <path d="M12 2C8.100 2 5 5.100 5 9c0 5.200 7 13 7 13s7-7.800 7-13c0-3.900-3.100-7-7-7zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5z" />
  </svg>
);

export const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5.500" /><circle cx="12" cy="12" r="4.200" />
    <circle cx="17.300" cy="6.700" r="1.100" fill="#fff" stroke="none" />
  </svg>
);

export const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="38" height="38" fill="#fff" aria-hidden="true">
    <path d="M19.590 6.690a4.830 4.830 0 0 1-3.770-4.250V2h-3.450v13.670a2.890 2.890 0 0 1-5.200 1.740 2.890 2.890 0 0 1 2.310-4.640 2.930 2.930 0 0 1 .880.130V9.400a6.840 6.840 0 0 0-1-.050A6.330 6.330 0 0 0 5 20.100a6.340 6.340 0 0 0 10.860-4.430v-7a8.160 8.160 0 0 0 4.770 1.520v-3.400a4.850 4.850 0 0 1-1-.100z" />
  </svg>
);
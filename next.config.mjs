// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "www.harshuglobal.in",
//       },
//       {
//         protocol: "https",
//         hostname: "www.businessneedsinc.com",
//       },
//       {
//         protocol: "https",
//         hostname: "www.onpointwares.com",
//       },
//       {
//         protocol: "https",
//         hostname: "riyuglobal.com",
//       },
//     ],
//   },
// };



// export default nextConfig;  2
// /** @type {import('next').NextConfig} */
// const securityHeaders = [
//   {
//     key: "X-Content-Type-Options",
//     value: "nosniff",
//   },
//   {
//     key: "Referrer-Policy",
//     value: "strict-origin-when-cross-origin",
//   },
//   {
//     key: "X-Frame-Options",
//     value: "SAMEORIGIN",
//   },
//   {
//     key: "Permissions-Policy",
//     value: "camera=(), microphone=(), geolocation=()",
//   },
//   {
//     key: "Strict-Transport-Security",
//     value: "max-age=31536000; includeSubDomains; preload",
//   },
//   {
//     key: "Content-Security-Policy",
//     value: [
//       "default-src 'self'",
//       "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
//       "style-src 'self' 'unsafe-inline'",
//       "img-src 'self' data: blob: https:",
//       "font-src 'self' data: https:",
//       "connect-src 'self' https://d0yhlgi6h5.execute-api.ap-south-1.amazonaws.com",
//       "frame-ancestors 'self'",
//       "base-uri 'self'",
//       "form-action 'self'",
//     ].join("; "),
//   },
// ];

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "www.harshuglobal.in",
//       },
//       {
//         protocol: "https",
//         hostname: "www.businessneedsinc.com",
//       },
//       {
//         protocol: "https",
//         hostname: "www.onpointwares.com",
//       },
//       {
//         protocol: "https",
//         hostname: "riyuglobal.com",
//       },
//     ],
//   },

//   async headers() {
//     return [
//       {
//         source: "/:path*",
//         headers: securityHeaders,
//       },
//     ];
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";

const securityHeaders = [
  
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        : "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https:",
      "connect-src 'self' https:",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.harshuglobal.in" },
      { protocol: "https", hostname: "www.businessneedsinc.com" },
      { protocol: "https", hostname: "www.onpointwares.com" },
      { protocol: "https", hostname: "www.riyuglobal.com" },
      { protocol: "https", hostname: "www.rrindustriesus.com" },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
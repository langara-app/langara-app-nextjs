const withImages = require("next-images");
/** @type {import('next').NextConfig} */
const nextConfig = withImages({
  images: {
    domains: ["api.langara-app.ca"],
    // handle image imports in variables
    disableStaticImages: true,
  },
  compiler: {
    // https://stackoverflow.com/questions/51791163/warning-prop-classname-did-not-match-when-using-styled-components-with-seman
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  reactStrictMode: true,
});

module.exports = nextConfig

// Previous custom babel configs
// {
//   "presets": ["next/babel"],
//   "plugins": [
//     [
//       "styled-components",
//       {
//         "ssr": true,
//         "displayName": true,
//         "preprocess": false
//       }
//     ]
//   ]
// }

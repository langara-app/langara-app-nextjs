// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

//

import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
// https://mui.com/material-ui/migration/v5-style-changes/#%E2%9C%85-update-serverstylesheets-import
// import { ServerStyleSheets } from '@mui/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    // const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {/* <Head>
              <link
                href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;600;700&display=swap"
                rel="stylesheet"
              />
            </Head> */}
            {initialProps.styles}
            {sheet.getStyleElement()}
            {/* {materialSheets.getStyleElement()} */}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

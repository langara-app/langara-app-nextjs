import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
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
            {materialSheets.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

// import Document, { Head, Main, NextScript } from "next/document";
// // Import styled components ServerStyleSheet
// import { ServerStyleSheet } from "styled-components";

// export default class MyDocument extends Document {
//   //   static getInitialProps({ renderPage }) {
//   //     // Step 1: Create an instance of ServerStyleSheet
//   //     const sheet = new ServerStyleSheet();

//   //     // Step 2: Retrieve styles from components in the page
//   //     const page = renderPage((App) => (props) =>
//   //       sheet.collectStyles(<App {...props} />)
//   //     );

//   //     // Step 3: Extract the styles as <style> tags
//   //     const styleTags = sheet.getStyleElement();

//   //     // Step 4: Pass styleTags as a prop
//   //     return { ...page, styleTags };
//   //   }

//   //   render() {
//   //     return (
//   //       <html>
//   //         <Head>
//   //           <title>My page</title>
//   //           {/* Step 5: Output the styles in the head  */}
//   //           {this.props.styleTags}
//   //         </Head>
//   //         <body>
//   //           <Main />
//   //           <NextScript />
//   //         </body>
//   //       </html>
//   //     );
//   //   }
//   static async getInitialProps(ctx) {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(<App {...props} />),
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         ),
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
// }

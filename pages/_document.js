import Document, { Html, Head, Main, NextScript } from 'next/document';
import { summary } from '../lib/copy';

class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        className="bg-light font-sans [-webkit-tap-highlight-color:transparent]"
      >
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="title" content="NXT INDX: Find work that matters" />
          <meta name="description" content={summary} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.nxtindx.com/" />
          <meta
            property="og:title"
            content="NXT INDX: Find work that matters"
          />
          <meta property="og:description" content={summary} />
          <meta property="og:image" content="https://nxtindx.com/social.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.nxtindx.com/" />
          <meta
            property="twitter:title"
            content="NXT INDX: Find work that matters"
          />
          <meta property="twitter:description" content={summary} />
          <meta
            property="twitter:image"
            content="https://nxtindx.com/social.png"
          ></meta>
        </Head>
        <body className="bg-light">
          <Main />
          <NextScript />
          <script
            async
            defer
            src="https://scripts.withcabin.com/hello.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

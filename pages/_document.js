import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        className="bg-light [-webkit-tap-highlight-color:transparent]"
      >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;600;700;900&display=swap"
            rel="stylesheet"
          />
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
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="title"
            content="NXT INDX: Impact Jobs Feed for the Next Generation"
          />
          <meta
            name="description"
            content="A curated job platform for meaningful work, that put people in a position to have positive impact on communities, society and the planet."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.nxtindx.com/" />
          <meta
            property="og:title"
            content="NXT INDX: Impact Jobs Feed for the Next Generation"
          />
          <meta
            property="og:description"
            content="A curated job platform for meaningful work, that put people in a position to have positive impact on communities, society and the planet."
          />
          <meta property="og:image" content="/social.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.nxtindx.com/" />
          <meta
            property="twitter:title"
            content="NXT INDX: Impact Jobs Feed for the Next Generation"
          />
          <meta
            property="twitter:description"
            content="A curated job platform for meaningful work, that put people in a position to have positive impact on communities, society and the planet."
          />
          <meta property="twitter:image" content="/social.png"></meta>
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

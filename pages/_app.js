import '../styles/globals.css';
import localFont from '@next/font/local';
const switzer = localFont({
  src: '/Switzer-Variable.woff2',
  variable: '--font-switzer',
  weight: '300 700',
});
const clashDisplay = localFont({
  src: '/ClashDisplay-Variable.woff2',
  weight: '300 900',
  variable: '--font-clash',
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${switzer.variable} ${clashDisplay.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

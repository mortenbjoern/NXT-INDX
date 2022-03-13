import '../styles/globals.css';
import OverlayContainer from '../components/overlayContainer';
import useOverlay from '../components/useOverlay';

function MyApp({ Component, pageProps }) {
  const { visible, toggle } = useOverlay();
  return (
    <>
      <Component toggle={toggle} visible={visible} {...pageProps} />
      <OverlayContainer toggle={toggle} visible={visible} />
    </>
  );
}

export default MyApp;

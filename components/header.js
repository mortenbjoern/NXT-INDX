import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Close } from 'react-feather';

// Import openSubmitOverlay from Context

const DesktopHeader = () => {
  return (
    <nav className="flex gap-5 text-label-16 text-dark">
      <Link href="/about">
        <button className="">About</button>
      </Link>
      <a href="mailto:morten@nxtindx.com" className="block">
        Get in touch
      </a>
      <button onClick={() => openSubmitOverlay} className="text-accent">
        Submit position +
      </button>
    </nav>
  );
};

const MobileHeader = (menuShow) => {
  return (
    <nav className="flex text-label-16 text-dark">
      {menuShow ? (
        <div className="flex gap-1.5">
          <button onClick={() => setMenuShow(false)} className="text-accent">
            Close
          </button>
          <Close color="dark" size={8} />
        </div>
      ) : (
        <>
          <button onClick={() => setMenuShow(true)} className="text-accent">
            Menu
          </button>
        </>
      )}
    </nav>
  );
};

const MobileMenu = () => {
  return <></>;
};

export default function Header() {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <h1 className="font-black text-label-20 md:text-label-24 text-dark uppercase">
              nxt indx
            </h1>
          </Link>
        </div>
        <DesktopHeader />
        {/* If bigger than 816 px, mdHeader; else Header */}
      </div>
      {menuShow && <MobileMenu />}
    </header>
  );
}

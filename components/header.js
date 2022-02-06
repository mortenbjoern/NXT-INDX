import Link from 'next/link';
import { useState } from 'react';
import { X } from 'react-feather';
import { useWindowSize } from '../lib/useWindowSize';

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

const MobileHeader = ({ menuShow, setMenuShow }) => {
  return (
    <nav className="flex text-label-14 text-dark">
      {menuShow ? (
        <div
          onClick={() => setMenuShow(false)}
          className="flex items-center gap-1"
        >
          <button className="text-dark">Close</button>
          <X className={'dark'} size={14} />
        </div>
      ) : (
        <>
          <button onClick={() => setMenuShow(true)} className="text-dark">
            Menu
          </button>
        </>
      )}
    </nav>
  );
};

const MobileMenu = () => {
  return (
    <nav className="flex w-full justify-between mt-4">
      <div className="flex gap-3">
        <Link href="/about">
          <button className="text-label-14">About</button>
        </Link>
        <a href="mailto:morten@nxtindx.com" className="block text-label-14">
          Get in touch
        </a>
      </div>
      <button
        onClick={() => openSubmitOverlay}
        className="text-accent text-label-14"
      >
        Submit position +
      </button>
    </nav>
  );
};

export default function Header() {
  const [menuShow, setMenuShow] = useState(false);
  const size = useWindowSize();

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
        {/* Number needs to match 'md' breakpoint in tailwind theme */}
        {size.width >= 816 ? (
          <DesktopHeader />
        ) : (
          <MobileHeader menuShow={menuShow} setMenuShow={setMenuShow} />
        )}
      </div>
      {menuShow && <MobileMenu />}
    </header>
  );
}

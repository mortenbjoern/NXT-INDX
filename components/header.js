import Link from 'next/link';
import { Logo, MobileLogo } from './logo';
import { useState } from 'react';
import { X } from 'react-feather';
import { useWindowSize } from '../lib/useWindowSize';

const DesktopHeader = ({ toggle }) => {
  return (
    <nav className="flex gap-2 text-label-14 text-dark">
      <Link className="block" href="/about">
        <button className="border block p-1 hover:bg-solar-tint">About</button>
      </Link>
      <a
        href="mailto:morten@nxtindx.com"
        className="block border hover:bg-solar-tint p-1"
      >
        Get in touch
      </a>
      <button
        onClick={() => toggle()}
        className="text-accent border-accent hover:bg-accent hover:text-light hover:border-accent border p-1"
      >
        Submit position +
      </button>
    </nav>
  );
};

const MobileHeader = ({ menuShow, setMenuShow }) => {
  return (
    <nav className="flex text-label-14 text-dark">
      {menuShow ? (
        <div onClick={() => setMenuShow(false)} className="">
          <div className="flex items-center gap-1">
            <button className="text-dark">Close</button>
            <X className={'dark'} size={14} />
          </div>
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

const MobileMenu = ({ toggle }) => {
  return (
    <nav className="flex w-full justify-between mt-4">
      <div className="flex gap-1">
        <Link href="/about">
          <button className="text-label-14 border border-dark p-1">
            About
          </button>
        </Link>
        <a
          href="mailto:morten@nxtindx.com"
          className="block text-label-14 border border-dark p-1"
        >
          Get in touch
        </a>
      </div>
      <button
        onClick={() => toggle()}
        className="text-accent border-accent border p-1 text-label-14"
      >
        Submit position +
      </button>
    </nav>
  );
};

export default function Header({ toggle }) {
  const [menuShow, setMenuShow] = useState(false);
  const size = useWindowSize();

  return (
    <>
      <header className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer">
            <Link href="/">
              {size.width >= 821 ? <Logo /> : <MobileLogo />}
            </Link>
          </div>
          {/* Number needs to match 'md' breakpoint in tailwind theme */}
          {size.width >= 821 ? (
            <DesktopHeader toggle={toggle} />
          ) : (
            <MobileHeader menuShow={menuShow} setMenuShow={setMenuShow} />
          )}
        </div>
        {menuShow && <MobileMenu toggle={toggle} />}
      </header>
    </>
  );
}

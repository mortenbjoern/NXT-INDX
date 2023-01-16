import Link from 'next/link';
import { Logo, MobileLogo } from './logo';
import { useState } from 'react';
import { X } from 'react-feather';
import { useWindowSize } from '../lib/useWindowSize';

const DesktopHeader = () => {
  return (
    <nav className="flex gap-2 text-label-14 text-dark">
      <Link className="block" href="/about">
        <button className="block p-1 hover:bg-solar-tint transition-colors duration-150">
          About
        </button>
      </Link>
      <a
        href="mailto:morten@nxtindx.com"
        className="block hover:bg-solar-tint p-1 transition-colors duration-150"
      >
        Get in touch
      </a>
      <Link
        href="/submit"
        className="text-accent hover:bg-accent hover:text-light p-1 transition-colors duration-150"
      >
        Submit position +
      </Link>
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
      <Link
        href={'/submit'}
        className="text-accent border-accent border p-1 text-label-14"
      >
        Submit position +
      </Link>
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

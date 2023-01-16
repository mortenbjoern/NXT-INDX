import { summary } from '../lib/copy';
import Link from 'next/link';
import Carbon from './carbon';
import { LogoOnly } from './logo';

export default function Footer({ toggle }) {
  return (
    <footer className="flex flex-col md:flex-row md:flex-wrap md:w-full md:justify-between items-start">
      <div className="w-2/3 md:w-50 space-y-2 md:space-y-3">
        <LogoOnly />
        <p className="text-body-14 md:text-body-16">{summary}</p>
      </div>
      <nav className="mt-5 md:mt-0 space-y-3 flex font-display flex-col text-label-24">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <a href="mailto:morten@nxtindx.com">Get in touch</a>
        <Link href="/data-policy">Data policy</Link>
      </nav>
      <div className="mt-5 md:mt-7 text-dark-tint space-y-0.5 text-body-12 md:w-full">
        <p className="">
          Project by{' '}
          <a className="underline" href="https://twitter.com/mortenbjoern">
            Morten Bjørn Hallkvist.
          </a>
        </p>
        <p className="">
          Built by{' '}
          <a
            className="underline"
            href="https://branch.climateaction.tech/issues/issue-1/designing-branch-sustainable-interaction-design-principles/"
          >
            sustainable interaction design principles.
          </a>
        </p>
        <p className="">
          Carbon footprint analysis provided by{' '}
          <a className="underline" href="Website Carbon">
            Website Carbon.
          </a>
        </p>
      </div>
      <div className="mt-2 text-label-12 space-x-1 flex flex-row justify-start">
        <Carbon />
      </div>
    </footer>
  );
}

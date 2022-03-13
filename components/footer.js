import { summary } from '../lib/summary';
import Link from 'next/link';
import Carbonbadge from '../lib/carbonbadge';
import Carbon from './carbon';

export default function Footer({ toggle }) {
  return (
    <footer className="flex flex-col md:flex-row md:flex-wrap md:w-full md:justify-between items-start">
      <div className="w-2/3 md:w-35 space-y-2 md:space-y-3">
        <p className="text-body-12 md:text-body-14">{summary}</p>
        <button
          onClick={() => toggle()}
          className="text-label-12 md:text-label-14 border p-1.25 md:p-1.5"
        >
          Submit position +
        </button>
      </div>
      <nav className="mt-5 md:mt-0 space-y-2 flex flex-col text-label-12">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <a href="mailto:morten@nxtindx.com">Get in touch</a>
        <Link href="/data-policy">Data policy</Link>
      </nav>
      <div className="mt-5 md:mt-7 space-y-0.5 text-body-12 md:w-full">
        <p className="">
          Project by{' '}
          <a className="underline" href="https://twitter.com/mortenbjoern">
            Morten Bjørn
          </a>
        </p>
        <p className="">
          Built by{' '}
          <a
            className="underline"
            href="https://branch.climateaction.tech/issues/issue-1/designing-branch-sustainable-interaction-design-principles/"
          >
            sustainable interaction design principles
          </a>
        </p>
      </div>
      <div className="mt-0.75 text-label-12 space-x-1 flex flex-row justify-start">
        <Carbon />
      </div>
    </footer>
  );
}

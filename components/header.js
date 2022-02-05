import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="font-black text-xl text-dark uppercase">nxt indx</h1>
      </div>
      <nav className="flex text-sm">
        <Link href="/om-projektet">
          <button className="px-3 py-1 hover:bg-gray-100">
            About the platform
          </button>
        </Link>
        <button className="px-3 py-1 hover:bg-gray-100 rounded-md">
          Get in touch
        </button>
        <button className="px-3 py-1 hover:animate-fader hover:bg-green-700 text-green-700 font-medium hover:text-white rounded-md hover:shadow-xl">
          Submit a position +
        </button>
      </nav>
    </header>
  );
}

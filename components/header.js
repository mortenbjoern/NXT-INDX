import Link from 'next/link';

export default function Header() {
  return (
    <header className="pt-12 flex items-center justify-between">
      <div>
        <h3 className="text-4xl font-black text-green-900 uppercase">
          nxt indx
        </h3>
      </div>
      <nav className="flex text-sm h-10 gap-3">
        <Link href="/om-projektet">
          <button className="px-3 py-1 hover:bg-gray-100 rounded-md">
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

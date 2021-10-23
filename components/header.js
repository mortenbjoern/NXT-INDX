import Link from 'next/link';

export default function Header() {
  return (
    <header className="pt-8 flex items-center justify-between">
      <h3 className="text-3xl font-bold text-green-900">KLIMA.WORKS</h3>
      <nav className="flex h-10 gap-3">
        <Link href="/om-projektet">
          <button className="px-3 py-1 hover:shadow-sm hover:bg-gray-100 border text-sm">
            Om projektet
          </button>
        </Link>
        <button className="px-3 py-1 hover:border-gray-300 border-opacity-0 hover:shadow-sm hover:border-opacity-100 border text-sm rounded-md">
          Kontakt
        </button>
        <button className="px-3 py-1 hover:animate-fader bg-green-900 text-white text-sm shadow">
          Tilføj stilling
        </button>
      </nav>
    </header>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full z-50 top-0 left-0 font-[Poppins] text-xl shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        <Link href="/" className="font-bold text-heading">
          CV. Gilang Kencana
        </Link>

        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" className="hover:text-fg-brand">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-fg-brand">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-fg-brand">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="hover:text-fg-brand">
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

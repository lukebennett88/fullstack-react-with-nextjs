import Link from 'next/link';

const Nav = () => (
  <nav className="bg-yellow-500 px-6 py-4">
    <div className="flex font-black items-center justify-between max-w-6xl mx-auto w-full">
      <h1 className="text-4xl">Level Up Your Life</h1>
      <ul className="flex">
        <li>
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;

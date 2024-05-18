import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font border-2px-solid-red sticky top-0 w-full bg-white z-10">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">caravindra@outlook.com</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="ml-5 hover:text-gray-900" href="/">
            HOME
          </Link>
          <Link className="ml-5 hover:text-gray-900" href="/services">
            SERVICES
          </Link>
          <Link className="ml-5 hover:text-gray-900" href="/infozone/Blogs">
            BLOGS
          </Link>
          <Link className="ml-5 hover:text-gray-900" href="/works">
            WORKS
          </Link>
          <Link className="ml-5 hover:text-gray-900" href="/infozone/Gallary">
            GALLER
          </Link>
          <Link className="ml-5 hover:text-gray-900" href="/team">
            TEAM
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

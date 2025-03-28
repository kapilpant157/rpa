import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font border-2px-solid-red sticky top-0 w-full bg-white z-10">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
          {/* <span className="ml-3 text-xl">caravindra@outlook.com</span> */}
          <Image
                className="w-48 h-16  flex-shrink-0 object-cover object-center "
                src="/logo.jpg"
                width={720}
                height={600}
                alt="logo"
              />
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
            GALLERY
          </Link>
          <Link className="ml-5 hover:text-gray-900" href="/team">
            TEAM
          </Link>
          <div className="fixed bottom-20 right-3">
            <a
              href="https://wa.me/9779843626545?text=Hello, I got your contact through website."
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center "
                src="/whatsapp.png"
                width={720}
                height={600}
                alt="whatsapp icon"
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

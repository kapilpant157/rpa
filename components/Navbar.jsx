import React from 'react'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font border-2px-solid-red">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="ml-3 text-xl">caravindra@outlook.com</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a href='#' className="mr-5 hover:text-gray-900">Home</a>
                <a href='#' className="mr-5 hover:text-gray-900">Services</a>
                <a href='#' className="mr-5 hover:text-gray-900">Our Works</a>
                <a href='#' className="mr-5 hover:text-gray-900">Blogs</a>
                <a href='#' className="mr-5 hover:text-gray-900">Our Team</a>
                <a href='#' className="mr-5 hover:text-gray-900">Contact Us</a>
            </nav>

        </div>
    </header>
  )
}

export default Navbar
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center "
              src="/ca.jpeg"
              width={720}
              height={600}
              alt="Picture of the author"
            />
            <span className="ml-3 text-xl">RPA Nepal</span>
          </a>
          <hr className="mt-5" />
          <span className="text-sm text-gray-500">
            Firm Registration: 521 (B.S. 2071)
          </span>
          <hr className="mt-3" />
          <span className="text-sm text-gray-500">
            VAT Registration: 106158212
          </span>
          <hr className="mt-3" />
          <span>
            <a
              className="text-gray-600 hover:text-gray-800 mb-4"
              href="https://maps.app.goo.gl/vfjVVJp9Mo971zQc7"
              rel="noopener noreferrer"
              target="_blank"
            >
              Bheemdatt-18, Kanchanpur, Nepal
            </a>
          </span>
          <hr className="mt-3" />
          <span>
            <a
              className="text-gray-600 hover:text-gray-800 mb-3"
              href="https://maps.app.goo.gl/nub5rV66ULRbxzjL6"
              rel="noopener noreferrer"
              target="_blank"
            >
              Bijuli Bazar, Kathmandu, Nepal
            </a>
          </span>
        </div>

        {/* policies */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              POLICIES
            </h2>
            <hr className="mt-5" />
            <nav className="list-none py-2 mb-10">
              <li>
                <a
                  className="text-gray-600 mt-2 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Company Policy
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Copyright Policy
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Cancellation and Refund Policy
                </a>
              </li>
            </nav>
          </div>

          {/* about us */}

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ABOUT US
            </h2>
            <hr className="mt-5" />
            <nav className="list-none py-2 mb-10">
              <li>
                <a
                  className="text-gray-600 mt-2 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  What we do
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Our Team
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Company Mission
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Copyright Policy
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Career
                </a>
              </li>
            </nav>
          </div>

          {/* services */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SERVICES
            </h2>
            <hr className="mt-5" />
            <nav className="list-none py-2 mb-10">
              <li>
                <a
                  className="text-gray-600 mt-2 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Company Registration
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Bussiness & Start-Ups
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Auditing & Assurance
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Accounting
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  TAX | VAT | Excise
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Financial Sercices
                </a>
              </li>
            </nav>
          </div>

          {/* useful links */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              LINKS
            </h2>
            <hr className="mt-5" />
            <nav className="list-none py-2 mb-10">
              <li>
                <a
                  className="text-gray-600 mt-2 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Income Tax Department
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Company registration office
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Ministry of Current affairs
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  Central board
                </a>
              </li>
              <hr className="mt-3" />
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="#"
                  rel="noopener noreferrer"
                >
                  GST portal
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div className="foot">
        <p>
          {" "}
          © 2024 rpaassociates —
          <a
            href="https://facebook.com/kapilpant157"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
          >
            Nepal
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" legacyBehavior>
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="/"
              >
                <img
                  alt="..."
                  className="rounded-lg shadow-lg"
                  src="/img/logo.png"
                  width={200}
                />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

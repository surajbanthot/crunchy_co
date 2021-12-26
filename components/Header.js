import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <nav className="bg-white px-1">
      <ul className="flex justify-between">
        <div className="flex py-4 px-1">
          {!session && (
            <li className="p-1">
              <Link href="/api/auth/signin">
                <a
                  className="py-4 px-2 hover:text-green-400 transition duration-300 text-gray-500 font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("github");
                  }}
                >
                  SignIn | Github
                </a>
              </Link>
            </li>
          )}
          {session && (
            <li className="p-1">
              <Link href="/api/auth/signout">
                <a
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-400 transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign Out
                </a>
              </Link>
            </li>
          )}
          <li className="p-1 text-gray-500 font-semibold hover:text-green-400 transition duration-300">
            <div className="">SignUp</div>
          </li>
          {/* <li>
          <Link href="/"></Link>
          <a>Crunchy_Co</a>
        </li> */}
        </div>
        <div className="flex p-2 space-x-1 py-4 px-2 text-gray-500 font-semibold ">
          <li className="p-1 mx-1 hover:text-green-400 transition duration-300">
            Plans
          </li>
          <li className="p-1 mx-1 hover:text-green-400 transition duration-300">
            Pricing
          </li>
          <li className="p-1 mx-1 hover:text-green-400 transition duration-300">
            About Us
          </li>
          <li className="p-1 mx-1 hover:text-green-400 transition duration-300">
            Reviews
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Header;

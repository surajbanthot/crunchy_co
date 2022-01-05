import React from "react";
import Image from "next/image";
import { Link } from "next/link";
const Footer = () => {
  return (
    <div className="w-full h-20 static bottom-0">
      <footer className="">
        <div className="grid grid-cols-3 text-gray-500 font-semibold p-5">
          <div>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Return and Refund Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li>FAQ</li>
              <li>Locations</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="grid grid-cols-4 p-1 mx-2 opacity-15 pt-5 pr-5">
            <img src="/instagram.png" alt="instagram" className="h-10 w-10" width="10" height="10"></img>
            <img src="/facebook.png" alt="facebook" className="h-10 w-10" layout="fill"></img>
            <img src="/twitter.png" alt="twitter" className="h-10 w-10" layout="fill"></img>
            <img src="/youtube.png" alt="youtube" className="h-10 w-10" layout="fill"></img>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

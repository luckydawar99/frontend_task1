import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer  footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="col-span-full">
            <hr className="h-px my-4 bg-gray-400 border-0" />
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <p>About</p>
            <p>FAQ</p>
          </div>
          <div className="footer-col">
            <h4>Terms</h4>
            <p>Data Privacy</p>
            <p>Terms</p>
            <p>Accessibility</p>
          </div>
          <div className="footer-col">
            <h4>Related</h4>
            <p>Find Buyer</p>
            <p>Feedback</p>
          </div>
          <div>
            <h4 className="text-[20px]">Follow us</h4>
            <div className="social-link flex space-x-4  text-white text-[30px]">
              <a className="hover:text-lime-600" href="#">
                <TiSocialLinkedinCircular />
              </a>
              <a className="hover:text-yellow-400" href="#">
                <AiFillTwitterCircle />
              </a>
              <a className="hover:text-cyan-500" href="#">
                <FaFacebook />
              </a>
              <a className="hover:text-red-500" href="#">
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <div className="col-span-full">
            <hr className="h-px my-4 bg-gray-400 border-0" />
          </div>
          <aside className="col-span-full">
            <p>Company Service © 2024 - All rights reserved by HealTether Healthcare Services Private Limited.</p>
          </aside>
        </div>
      </footer>
    </>
  );
};

export default Footer;


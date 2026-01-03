import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f5e7a1] to-[#b8962e]" />
              <span className="text-sm tracking-widest">ATA Electronics</span>
            </div>
            <p className="text-sm text-gray-400">
              Smart energy and lighting solutions built with precision and performance.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a className="w-9 h-9 rounded-full border border-[#d4af37]/40 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition" href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a className="w-9 h-9 rounded-full border border-[#d4af37]/40 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition" href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a className="w-9 h-9 rounded-full border border-[#d4af37]/40 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition" href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a className="w-9 h-9 rounded-full border border-[#d4af37]/40 flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition" href="#" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a className="hover:text-[#d4af37] transition" href="#">Residential Lighting</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Commercial Lighting</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Batteries & Storage</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Solar Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a className="hover:text-[#d4af37] transition" href="#">About</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Projects</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Contact</a></li>
              <li><a className="hover:text-[#d4af37] transition" href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-4">Subscribe</h4>
            <p className="text-sm text-gray-400 mb-4">Get updates on new products and lighting tips.</p>
            <form className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-black border border-[#d4af37]/40 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-[#d4af37] text-black text-sm font-medium hover:bg-[#e6c65c] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-[#d4af37]/20 pt-6">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} ATA Electronics. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a className="hover:text-[#d4af37] transition" href="#">Privacy</a>
            <a className="hover:text-[#d4af37] transition" href="#">Terms</a>
            <a className="hover:text-[#d4af37] transition" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

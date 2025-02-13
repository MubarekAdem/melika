"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-[#2d2d2d]">
            Melika
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#2d2d2d] hover:text-[#9c8554]">
              Home
            </Link>
            <Link href="/about" className="text-[#2d2d2d] hover:text-[#9c8554]">
              About Us
            </Link>
            <Link
              href="/services"
              className="text-[#2d2d2d] hover:text-[#9c8554]"
            >
              Services
            </Link>
            <Link
              href="#involved"
              className="text-[#2d2d2d] hover:text-[#9c8554]"
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="text-[#2d2d2d] hover:text-[#9c8554]"
            >
              Contact
            </Link>
            <Button className="bg-[#9c8554] hover:bg-[#7a683f] text-white">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-[#2d2d2d] hover:text-[#9c8554]">
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#2d2d2d] hover:text-[#9c8554]"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-[#2d2d2d] hover:text-[#9c8554]"
              >
                Services
              </Link>
              <Link
                href="#involved"
                className="text-[#2d2d2d] hover:text-[#9c8554]"
              >
                Get Involved
              </Link>
              <Link
                href="#contact"
                className="text-[#2d2d2d] hover:text-[#9c8554]"
              >
                Contact
              </Link>
              <Button className="bg-[#9c8554] hover:bg-[#7a683f] text-white w-full">
                Donate Now
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

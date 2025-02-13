"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-[#faf6f1]">
      {/* Hero Section */}
      <section className="pt-20 relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/image.png"
            alt="Islamic charity background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-3xl text-white space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to Melika Islamic Organization
            </h1>
            <p className="text-xl md:text-2xl">
              Empowering communities through charity, education, and support
            </p>
            <Button
              size="lg"
              className="bg-[#9c8554] hover:bg-[#7a683f] text-white"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">
              Our Services
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Committed to making a positive impact in our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#faf6f1] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#2d2d2d]">
                  {service.title}
                </h3>
                <p className="text-[#666]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="involved" className="py-20 bg-[#faf6f1]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d]">
                Join Us
              </h2>
              <p className="text-[#666]">
                We invite you to be a part of our transformative journey.
                Together, we can make a difference in the lives of those who
                need it most. Your support and involvement are crucial.
              </p>
              <Button
                size="lg"
                className="bg-[#9c8554] hover:bg-[#7a683f] text-white"
              >
                Get Involved
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/image.png"
                alt="Community gathering"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Charity Initiatives",
    description:
      "We organize various charity initiatives aimed at providing essential resources to those in need, including food drives, clothing distribution, and financial assistance programs.",
    image: "/images/image.png",
  },
  {
    title: "Fundraising Events",
    description:
      "Our fundraising events are designed to engage the community and raise vital funds that support our charitable activities. Join us in making a difference through participation and donations.",
    image: "/images/image.png",
  },
  {
    title: "Educational Programs",
    description:
      "We offer a range of educational courses, particularly for women, to empower them with knowledge and skills that can lead to personal and professional growth.",
    image: "/images/image.png",
  },
];

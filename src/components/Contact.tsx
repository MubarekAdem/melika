"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Clock, MapPin, Car } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-[#faf6f1]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/image.png"
            alt="Contact us background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 relative text-white text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Get in Touch with Us
            </h1>
            <p className="text-xl md:text-2xl">
              We are here to assist you with any inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">
              Our Location
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              We welcome you to visit us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {locationInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={info.image || "/placeholder.svg"}
                    alt={info.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  {info.icon}
                  <h3 className="text-xl font-semibold text-[#2d2d2d]">
                    {info.title}
                  </h3>
                </div>
                <p className="text-[#666] mb-4">{info.description}</p>
                <Button className="bg-[#9c8554] hover:bg-[#7a683f] text-white w-full">
                  Read More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">
              Contact Us Directly
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Your questions and feedback are important to us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-[#faf6f1] border-none"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-[#faf6f1] border-none"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-[#faf6f1] border-none min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#9c8554] hover:bg-[#7a683f] text-white"
              >
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const locationInfo = [
  {
    title: "Address Details",
    description:
      "Melika Islamic Organization is located at 123 Charity Lane, Cityville, State, 12345. Our facility is accessible and designed to provide a welcoming atmosphere for all visitors.",
    image: "/images/image.png",
    icon: <MapPin className="h-5 w-5 text-[#9c8554]" />,
  },
  {
    title: "Business Hours",
    description:
      "We are open Monday through Friday from 9 AM to 5 PM. Our team is dedicated to serving the community, and we encourage you to drop by during these hours.",
    image: "/images/image.png",
    icon: <Clock className="h-5 w-5 text-[#9c8554]" />,
  },
  {
    title: "Parking Information",
    description:
      "We offer convenient parking for our visitors. Our parking lot is located adjacent to the building and provides ample space for both cars and bicycles.",
    image: "/images/image.png",
    icon: <Car className="h-5 w-5 text-[#9c8554]" />,
  },
];

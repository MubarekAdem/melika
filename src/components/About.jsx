"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-[#faf6f1] pt-20">
      {/* Journey Section */}
      <section className="py-20 bg-[#2d2d2d] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h1>
            <p className="text-xl text-gray-300">A Commitment to Service</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {journeyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#1d1d1d] rounded-lg p-6"
              >
                <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black"
                >
                  Read More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Dedicated Team
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Passionate Individuals Committed to Service
            </p>
          </motion.div>

          <div className="space-y-20">
            {teamSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#2d2d2d]">
                    {section.title}
                  </h3>
                  <p className="text-[#666]">{section.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
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
              Our Impactful Initiatives
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Transforming Lives Through Charity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#faf6f1] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#2d2d2d]">
                  {initiative.title}
                </h3>
                <p className="text-[#666] mb-4">{initiative.description}</p>
                <Button className="bg-[#9c8554] hover:bg-[#7a683f] text-white">
                  Read More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const journeyItems = [
  {
    title: "Foundation and Vision",
    description:
      "Melika Islamic Organization was established with a vision to uplift communities by promoting Islamic values through charitable acts. Our founders envisioned an organization that advocated practices that would facilitate brotherhood and support for those in need.",
    image: "/public/images/image.png",
  },
  {
    title: "Milestones in Our History",
    description:
      "Since our inception, we have achieved significant milestones that reflect our commitment to making a difference. From our first charity drive to our current expanded support to local families, each milestone represents our success, each project a step toward greater positive impact.",
    image: "/images/images.png",
  },
  {
    title: "Future Aspirations",
    description:
      "Looking forward, we aim to expand our outreach and increase the scope of our projects. With planned expansions in our charitable and educational programs, we envision initiatives that address the evolving needs of our community.",
    image: "/images/images.png",
  },
];

const teamSections = [
  {
    title: "Leadership",
    description:
      "Our leadership team comprises individuals with diverse backgrounds and a shared commitment to our mission. They lead our organization with integrity and vision, ensuring that we stay true to our core values while navigating the challenges of charitable work.",
    image: "/images/images.png",
  },
  {
    title: "Program Coordinators",
    description:
      "Our program coordinators play a crucial role in the execution of our projects. They are responsible for planning, implementing, and evaluating initiatives, ensuring that each project is effectively implemented to benefit those we serve.",
    image: "/images/images.png",
  },
  {
    title: "Volunteers",
    description:
      "Our volunteers are the heart of Melika Islamic Organization. Their dedication and enthusiasm bring our projects to life, and their unwavering commitment helps to support our mission. We are grateful for their hard work and commitment to making a difference in the community.",
    image: "/images/images.png",
  },
];

const initiatives = [
  {
    title: "Food Distribution Program",
    description:
      "Our Food Distribution Program has been crucial in alleviating food insecurity within our community. Through this initiative, we have provided thousands of meals to families in need, making a significant impact on hunger prevention.",
    image: "/images/images.png",
  },
  {
    title: "Educational Workshops for Women",
    description:
      "We have successfully conducted numerous educational workshops targeting essential skills development for women in our community. These workshops cover various topics, providing them with valuable knowledge and opportunities for growth.",
    image: "/images/images.png",
  },
  {
    title: "Health Awareness Campaigns",
    description:
      "Our Health Awareness Campaigns have focused on educating the community about critical health issues. Through informative talks and free screening events, we help community members stay informed and healthy.",
    image: "/images/images.png",
  },
];

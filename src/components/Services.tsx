"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
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
            alt="People reading Quran"
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
              Our Comprehensive Services
            </h1>
            <p className="text-xl md:text-2xl">
              Empowering the Community Through Charity, Fundraising, and
              Education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compassionate Initiatives */}
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
              Compassionate Initiatives
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Supporting Those in Need with Care and Commitment
            </p>
          </motion.div>

          <div className="space-y-20">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#2d2d2d]">
                    {initiative.title}
                  </h3>
                  <p className="text-[#666]">{initiative.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundraising Section */}
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
              Join Our Fundraising Efforts
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Together We Can Make a Difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {fundraising.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#faf6f1] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#2d2d2d]">
                  {item.title}
                </h3>
                <p className="text-[#666] mb-4">{item.description}</p>
                <Button className="bg-[#9c8554] hover:bg-[#7a683f] text-white">
                  Read More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-[#2d2d2d] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering Education
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Fostering Knowledge and Skills for Women and the Community
            </p>
          </motion.div>

          <div className="space-y-20">
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const initiatives = [
  {
    title: "Food Distribution",
    description:
      "Our food distribution program provides essential meals to families in need, ensuring that no one goes hungry. We partner with local suppliers to deliver fresh and nutritious food to those who require assistance.",
    image: "/images/image.png",
  },
  {
    title: "Clothing Drives",
    description:
      "We organize clothing drives throughout the year, collecting gently used garments to distribute to individuals and families facing hardship. This initiative not only meets immediate clothing needs but also promotes sustainability.",
    image: "/images/image.png",
  },
  {
    title: "Healthcare Assistance",
    description:
      "Through our healthcare assistance program, we provide financial support for medical expenses to underserved community members, ensuring that everyone has access to necessary health services and treatments.",
    image: "/images/image.png",
  },
];

const fundraising = [
  {
    title: "Annual Charity Gala",
    description:
      "Our Annual Charity Gala brings together community members and supporters for a night of giving and celebration. With featured speakers, entertainment, and a silent auction, this event raises vital funds to support our ongoing programs and initiatives.",
    image: "/images/image.png",
  },
  {
    title: "Online Crowdfunding Campaigns",
    description:
      "We leverage online crowdfunding platforms to reach a larger audience and gather support for specific causes. These digital campaigns allow individuals to contribute easily and share our mission with their networks, amplifying our impact.",
    image: "/images/image.png",
  },
  {
    title: "Corporate Sponsorships",
    description:
      "We actively work partnerships with businesses that share our values. Corporate sponsorships not only provide essential funding but also create opportunities for businesses to engage with the community while fulfilling their corporate social responsibility.",
    image: "/images/image.png",
  },
];

const education = [
  {
    title: "Islamic Studies for Women",
    description:
      "Islamic Studies courses are designed specifically for women, covering topics such as Quranic studies, Hadith, and Islamic jurisprudence. These classes aim to deepen understanding and strengthen the faith of participants.",
    image: "/images/image.png",
  },
  {
    title: "Life Skills Workshops",
    description:
      "We offer a variety of workshops focused on essential life skills, including financial literacy, health and wellness, and personal development. These workshops empower participants to navigate everyday challenges with confidence.",
    image: "/images/image.png",
  },
  {
    title: "Youth Mentorship Programs",
    description:
      "Our youth mentorship programs connect young individuals with experienced mentors who provide guidance and support. These programs are designed to inspire the next generation and help them realize their potential.",
    image: "/images/image.png",
  },
];

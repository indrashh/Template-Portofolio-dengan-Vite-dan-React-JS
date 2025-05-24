import React from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import DataInput from "../assets/images/data_input.svg";
import OrganizeData from "../assets/images/organizing_data.svg";
import Services from "./Services";
import Project from "../components/Project";
import Contact from "./Contact";

// Shared variants for consistency
const sectionVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function HeroSection() {
  return (
    <motion.section
      id="homepage"
      className="hero pt-24 md:pt-0 relative overflow-hidden grid md:grid-cols-2 grid-cols-1 items-center gap-20 px-6 bg-gradient-to-br from-white to-violet-50 min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={sectionVariants}
    >
      {/* Background Shapes */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-violet-200 opacity-40 rounded-full" />
      <div className="absolute top-1/2 -right-20 w-56 h-56 bg-violet-300 opacity-30 rounded-full transform translate-y-1/2" />
      <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-violet-200 opacity-30 rounded-full" />

      {/* Text */}
      <motion.div
        className="flex flex-col justify-center z-10 px-4"
        variants={sectionVariants}
      >
        <h1 className="text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
          Reliable{" "}
          <span className="text-violet-600 font-bold">Virtual Assistant</span>{" "}
          for Precise <br />
          Data Entry & Python Web Scraping
        </h1>
        <p className="text-lg text-gray-700 mb-8 ">
          I streamline your workflow with accuracy and efficiency—so you can
          focus on what matters most.
        </p>

        <motion.a
          href="#about"
          className="self-start inline-flex items-center bg-violet-600 hover:bg-purple-800 transition transform px-6 py-3 rounded-full text-white font-medium shadow-md"
          variants={sectionVariants}
          whileHover={{ scale: 1.05 }}
        >
          About Me <Eye className="ms-2 w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Image */}
      <motion.div className="z-10" variants={sectionVariants}>
        <img
          src={DataInput}
          alt="Data entry illustration"
          className="md:w-[550px] w-[450px] mx-auto"
        />
      </motion.div>
    </motion.section>
  );
}

function AboutSection() {
  return (
    <motion.section
      id="about"
      className="about grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:gap-20 py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.div className="flex justify-center" variants={sectionVariants}>
        <img
          src={OrganizeData}
          alt="Organizing data illustration"
          className="md:w-[500px] w-[400px]"
        />
      </motion.div>
      <motion.div className="space-y-6 px-4" variants={sectionVariants}>
        <h2 className="text-4xl font-semibold">
          <span className="text-violet-600">About Me</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello! I’m Indra—an entry-level Virtual Assistant and Data Specialist
          with a 4th-semester Computer Science background and web development
          experience. I handle precise data entry, Python-based web scraping,
          and a full range of administrative support—from organizing large
          datasets to managing your calendar and emails. Detail-oriented and
          tech-savvy, I adapt quickly to new tools and processes, ensuring
          accurate, organized results that help your business run smoothly.
          Let’s collaborate and streamline your workflow!
        </p>
      </motion.div>
    </motion.section>
  );
}

export default function HomePage() {
  return (
    <div className="homepage bg-violet-50">
      <HeroSection />
      <AboutSection />
      <Services />
      <Project />
      <Contact />
    </div>
  );
}

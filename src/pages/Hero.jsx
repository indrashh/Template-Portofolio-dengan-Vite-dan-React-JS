import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Proyek1 from "../assets/images/proyek-1.webp";
import Proyek2 from "../assets/images/proyek-2.webp";
import Proyek3 from "../assets/images/proyek-3.webp";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Project() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      image: Proyek1,
      title: "Data Entry & Spreadsheet Management",
      desc: "Automated data input app with spreadsheet features and AI assistance.",
    },
    {
      image: Proyek2,
      title: "Admin Support Dashboard",
      desc: "Interactive dashboard for managing tasks, scheduling, and emails efficiently.",
    },
    {
      image: Proyek3,
      title: "Research & Analytics Tool",
      desc: "Web-based research tool with data visualization and insights generation.",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <motion.section
          className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32 px-6 pb-16 bg-gradient-to-br from-white to-violet-50 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {/* Decorative Blobs */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-violet-200 opacity-20 rounded-full filter blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-violet-200 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

          <div className="box relative z-10">
            <h1 className="text-3xl lg:text-5xl leading-tight font-medium mb-7">
              Reliable{" "}
              <span className="text-violet-500 font-bold">
                Virtual Assistant
              </span>{" "}
              Specializing in Accurate & Efficient Data Entry
            </h1>
            <p className="text-base leading-8 mb-7 text-gray-700">
              As your dedicated Virtual Assistant, I ensure precision in every
              keystroke and efficiency in every task.
            </p>
            <motion.a
              href="#about"
              className="inline-flex items-center bg-violet-500 hover:bg-purple-800 transition-all py-3 px-6 text-white shadow-lg rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              About Me <Eye className="ms-2 w-5 h-5" />
            </motion.a>
          </div>
          <motion.div
            className="box relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              src={DataInput}
              alt="Hero Illustration"
              className="md:w-[500px] w-[400px] mx-auto md:m-0"
            />
          </motion.div>
        </motion.section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Proyek1 from "../assets/images/proyek-1.webp";
import Proyek2 from "../assets/images/proyek-2.webp";
import Proyek3 from "../assets/images/proyek-3.webp";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
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
    <section id="proyek" className="relative py-32 px-4 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-violet-200 opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-violet-200 opacity-20 rounded-full filter blur-2xl"></div>

      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl lg:text-6xl font-bold text-violet-600 mb-4">
          My Projects
        </h2>
        <p className="text-gray-700 text-lg">
          A showcase of projects that demonstrate my skills in data entry,
          administration, and research.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {projects.map((proyek, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // ← supaya animasi bisa ulang
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 25px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={proyek.image}
              alt={proyek.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {proyek.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {proyek.desc}
              </p>
              <button
                onClick={() => openModal(proyek.image)}
                className="inline-flex items-center text-violet-600 font-medium hover:underline"
              >
                View Demo <ArrowRight className="w-5 h-5 ms-2" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1, transition: { duration: 0.2 } }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
              >
                <X className="w-5 h-5 text-gray-800" />
              </button>
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Download } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" },
  }),
};

export default function Project() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pdfUrlOne = "/pdf/country-data-scraping.pdf";
  const pdfMedical = "/pdf/medic-invoice.pdf";

  const dataEntryProjects = [
    {
      title: "PDF to Spreadsheet Conversion – Medical Data",
      desc: "Converted a complex pharmaceutical purchase record from PDF to a clean, organized Excel spreadsheet. The document included multiple medications with product codes, quantities, unit prices, and total costs.",
      image: "./img/dataEntryMedical.svg",
      pdf: pdfMedical,
      tags: ["Data Entry", "PDF Parsing", "Excel"],
    },
  ];

  const scrapingProjects = [
    {
      title: "Data Scraping & CSV-to-Excel Automation with Python",
      desc: "In this project, I scraped country data (name, capital, population) from a public resource using Python, and exported the results into both CSV and Excel formats.",
      image: "./img/data-scrapingg.svg",
      pdf: pdfUrlOne,
      tags: ["Python", "Web Scraping", "Automation"],
    },
    {
      title: "Research & Analytics Tool",
      desc: "Built a web tool to collect and visualize market data, aiding in quick insight generation and decision-making.",
      image: "https://via.placeholder.com/600x400?text=Research+Tool",
      pdf: pdfUrlOne,
      tags: ["Analytics", "Web App", "Data Viz"],
    },
    {
      title: "Web Scraper Utility",
      desc: "Developed a custom scraper that extracts structured data from multi-page sources efficiently.",
      image: "https://via.placeholder.com/600x400?text=Web+Scraper+Utility",
      pdf: pdfUrlOne,
      tags: ["Scraper", "Python", "BeautifulSoup"],
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

  const renderProjectSection = (title, projects) => (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-violet-700 mb-8 text-center">
        {title}
      </h3>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {projects.map((proyek, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            custom={idx}
            initial="hidden"
            whileInView="visible"
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {proyek.title}
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {proyek.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-violet-100 text-violet-800 text-xs font-semibold px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {proyek.desc}
              </p>
              <div className="flex items-center justify-between">
                <a
                  href={proyek.pdf}
                  download
                  className="inline-flex items-center text-gray-700 font-medium hover:underline"
                >
                  <Download className="w-5 h-5 mr-1" /> Download PDF
                </a>
                <button
                  onClick={() => openModal(proyek.image)}
                  className="inline-flex items-center text-violet-600 font-medium hover:underline"
                >
                  View <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="proyek"
      className="relative py-32 px-4 bg-gradient-to-br from-white to-violet-50 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-violet-200 opacity-20 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-violet-200 opacity-20 rounded-full filter blur-2xl" />

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-6xl font-bold text-violet-600 mb-4"
        >
          My Projects Showcase
        </motion.h2>
        <p className="text-gray-700 text-lg">
          Explore my work categorized by specialization to see how I deliver
          results in both manual and automated data handling.
        </p>
      </div>

      {/* Data Entry Section */}
      {renderProjectSection("Data Entry Projects", dataEntryProjects)}

      {/* Scraping Section */}
      {renderProjectSection("Web & Data Scraping Projects", scrapingProjects)}

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="#contact"
          className="bg-violet-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-violet-700 transition"
        >
          Let's Work Together
        </a>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
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

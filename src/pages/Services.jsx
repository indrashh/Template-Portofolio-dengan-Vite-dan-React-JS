import React from "react";
import { motion } from "framer-motion";
import { Database, FileText, Copy, Activity, File, Globe } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
  },
};

const serviceList = [
  {
    id: 1,
    title: "Data Entry & Spreadsheet",
    description:
      "Clean, structure, and manage your data in Excel, Google Sheets, and more—accurately and efficiently.",
    icon: <Database className="w-10 h-10 text-violet-600" />,
    highlight: true,
  },
  {
    id: 2,
    title: "Web Scraping & Automated Data Collection",
    description:
      "Extract and collect structured data from websites and online sources using Python tools—efficiently and accurately.",
    icon: <Globe className="w-10 h-10 text-violet-600" />,
    highlight: true,
  },
  {
    id: 3,
    title: "File Conversion",
    description:
      "Convert documents (PDF, Word, Excel) quickly and accurately to your desired format.",
    icon: <File className="w-10 h-10 text-violet-600" />,
    highlight: true,
  },
  {
    id: 4,
    title: "Web Research",
    description:
      "Reliable internet research with clear documentation and insights tailored to your needs.",
    icon: <FileText className="w-10 h-10 text-violet-600" />,
  },
  {
    id: 5,
    title: "Data Cleaning",
    description:
      "Fix duplicates, errors, and inconsistent formatting—ensuring your data is analysis-ready.",
    icon: <Copy className="w-10 h-10 text-violet-600" />,
  },
  {
    id: 6,
    title: "Virtual Admin Support",
    description:
      "Email handling, scheduling, and other admin tasks to keep your operations running smoothly.",
    icon: <Activity className="w-10 h-10 text-violet-600" />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-6 pt-32 pb-20 bg-gradient-to-br from-white to-violet-50 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-16 -right-10 w-72 h-72 bg-purple-200 opacity-20 rounded-full"></div>
      <div className="absolute -bottom-8 -left-16 w-56 h-56 bg-violet-200 opacity-20 rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 mb-12">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-violet-600 mb-4">
          What I Offer
        </h2>
        <p className="text-lg text-gray-700">
          As a{" "}
          <span className="font-semibold text-violet-600">
            Virtual Assistant Specialist in Data Entry & Web Scraping
          </span>
          , I deliver reliable, efficient, and detail-focused services to help
          you stay organized and boost productivity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {serviceList.map((service, index) => (
          <motion.div
            key={service.id}
            className="relative bg-white rounded-2xl p-6 shadow-lg overflow-visible flex flex-col justify-between"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
            whileHover="hover"
          >
            {service.highlight && (
              <div className="absolute -top-4 -right-4 bg-gradient-to-tr from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md z-10">
                Top Service
              </div>
            )}
            <div>
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-center text-violet-600 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-center mb-6">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center relative z-10">
        <motion.a
          href="#contact"
          className="inline-block px-8 py-4 bg-violet-600 text-white rounded-full text-lg font-semibold hover:bg-violet-700 transition shadow-md"
          whileHover="hover"
        >
          Let’s Organize Your Tasks with the Right Help
        </motion.a>
      </div>
    </section>
  );
}

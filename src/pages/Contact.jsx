import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <motion.section
        id="contact"
        className="relative py-32 px-4 bg-gradient-to-tr from-violet-50 via-white to-violet-50 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        custom={0.4}
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-200 opacity-20 rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-48 h-48 bg-violet-200 opacity-20 rounded-full"></div>

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-violet-600">
            Let’s Connect
          </h2>
          <p className="text-gray-700 mb-8">
            Whether you have a question or want to start a project together, I’m
            here to help. Drop me a line and I’ll get back to you soon.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
              <Mail className="w-6 h-6 text-violet-600" />
              <a
                href="mailto:itsindraagustyawan.com"
                className="text-gray-800 hover:text-violet-600"
              >
                Email Me
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
              <Phone className="w-6 h-6 text-violet-600" />
              <a
                href="tel:+6281226397647"
                className="text-gray-800 hover:text-violet-600"
              >
                Call Me
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
              <MapPin className="w-6 h-6 text-violet-600" />
              <span className="text-gray-800">Semarang, Indonesia</span>
            </div>
          </div>
          <motion.a
            href="mailto:itsindraagustyawan.com"
            className="inline-flex items-center bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Send a Message <Send className="ms-2 w-5 h-5" />
          </motion.a>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";

export default function ATAStorySection() {
  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image Area */}
        <div className="relative w-full h-[500px] flex items-center justify-center">
          
          {/* Left Image */}
          <motion.img
            src="/public/light.jpg"
            alt="ATA Electronics Team"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 w-60 rounded-xl shadow-lg"
          />

          {/* Top Image */}
          <motion.img
            src="/public/download.jfif"
            alt="ATA Electronics Work"
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 w-56 rounded-xl shadow-lg"
          />

          {/* Bottom Image */}
          <motion.img
            src="/public/solar.jpg"
            alt="ATA Electronics Lab"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 w-64 rounded-xl shadow-lg"
          />
        </div>

        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            It’s <span className="text-white">Simple.</span>
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-white">
            Smart Energy & Electronics Solutions
          </h3>

          <p className="text-white/80 leading-relaxed mb-8">
            At <span className="font-semibold text-white">ATA Electronics</span>, we believe
            modern technology powers a smarter future. From advanced batteries and efficient
            lighting to complete solar solutions, we help homes and businesses move towards
            reliable and sustainable energy.
          </p>

          <button className="bg-[#d4af37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e6c65c] transition">
            Read Our Story
          </button>
        </motion.div>

      </div>
    </section>
  );
}
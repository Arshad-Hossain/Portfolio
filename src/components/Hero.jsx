"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const name = "Arshad Hossain";

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-black px-6 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* TEXT */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05 } },
            }}
          >
            <span className="text-white">Hi, I’m </span>

            {name.split("").map((c, i) => (
              <motion.span
                key={i}
                className="text-blue-500 inline-block"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-gray-400 mt-4">Full Stack Web Developer</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              className="bg-gray-800 px-5 py-2 rounded-xl"
              href="https://github.com/Arshad-Hossain"
            >
              GitHub
            </a>

            <a
              className="bg-blue-600 px-5 py-2 rounded-xl"
              href="https://linkedin.com"
            >
              LinkedIn
            </a>

            <a
              className="bg-green-600 px-5 py-2 rounded-xl"
              href="/resume.pdf"
              download
            >
              Resume
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-blue-600 blur-3xl opacity-30 rounded-full" />

          <Image
            src="/profile.png"
            alt="profile"
            width={260}
            height={260}
            className="rounded-2xl border border-gray-700 relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}

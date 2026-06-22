"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Home() {
  return (
    <>
      <motion.main
        className="mx-auto w-full max-w-[565px] py-[100px] px-5 box-content"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.18 }}
      >
        {/* Name */}
        <motion.div
          className="flex items-start justify-between"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-col gap-[4px]">
            <h1 className="text-base leading-6 font-[350]" style={{ color: "var(--text)" }}>
              Evgeny Merzalov
            </h1>
            <p className="text-base leading-6" style={{ color: "var(--text-body)" }}>
              Interface Designer
            </p>
          </div>
          <a
            href="/about"
            className="flex items-center justify-center w-8 h-8 rounded-lg text-sm transition-all duration-200 border hover:bg-[#F5F5F5] hover:scale-105"
            style={{ borderColor: "var(--border)", color: "var(--text-body)" }}
          >
            i
          </a>
        </motion.div>

        {/* Intro */}
        <motion.section
          className="mt-6"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-base leading-6" style={{ color: "var(--text-body)" }}>
            I&apos;m an interface designer working on product and mobile design,
            helping turn complex ideas into simple, usable interfaces.
          </p>
          <p className="text-base leading-6 mt-4" style={{ color: "var(--text-body)" }}>
            For the past year I&apos;ve been designing Ghost&nbsp;VPN&nbsp;— a&nbsp;Telegram
            bot used by over 50,000 people. Now exploring how AI-native tools
            like Claude Code change what&apos;s possible for a single designer.
          </p>
        </motion.section>

        {/* Links */}
        <motion.div
          className="flex items-center gap-4 text-base leading-6 mt-6 mb-12"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a href="mailto:evgeny1merzalov@yandex.ru" className="hover:underline underline-offset-4 decoration-[0.75px]" style={{ color: "var(--text-body)" }}>
            Email
          </a>
          <a href="https://t.me/evg1nn" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-[0.75px]" style={{ color: "var(--text-body)" }}>
            Telegram
          </a>
          <a href="https://drive.google.com/file/d/1xZrzkzluX6KQTwAjJoLr36MSfrVPyxeT/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-[0.75px]" style={{ color: "var(--text-body)" }}>
            CV
          </a>
        </motion.div>

        {/* Ghost VPN */}
        <motion.section
          className="mb-6"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-base leading-6 font-[350]" style={{ color: "var(--text)" }}>
                Ghost VPN
              </h2>
              <p className="text-base leading-6 mt-0" style={{ color: "var(--text-muted)" }}>
                Apr 2025 — Jun 2025
              </p>
            </div>
            <span
              className="flex items-center justify-center px-3 py-1 rounded-lg text-sm border"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            >
              Soon
            </span>
          </div>
          <div className="w-full h-[300px] rounded-2xl overflow-hidden mt-4">
            <img
              src="/images/case-1.png"
              alt="Ghost VPN"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>

        {/* Personal Finance Tracker */}
        <a href="/personal-finance-tracker">
        <motion.section
          className="mb-6"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-base leading-6 font-[350]" style={{ color: "var(--text)" }}>
            Personal Finance Tracker
          </h2>
          <p className="text-base leading-6 mt-0" style={{ color: "var(--text-muted)" }}>
            2025
          </p>
          <div className="w-full h-[300px] rounded-2xl overflow-hidden mt-4">
            <img
              src="/images/case-2.png"
              alt="Personal Finance Tracker"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>
        </a>

        {/* Artist Subscription */}
        <a href="/artist-subscription">
        <motion.section
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-base leading-6 font-[350]" style={{ color: "var(--text)" }}>
            Artist Subscription
          </h2>
          <p className="text-base leading-6 mt-0" style={{ color: "var(--text-muted)" }}>
            2025
          </p>
          <div className="w-full h-[300px] rounded-2xl overflow-hidden mt-4">
            <img
              src="/images/case-3.png"
              alt="Artist Subscription"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>
        </a>
      </motion.main>
    </>
  );
}

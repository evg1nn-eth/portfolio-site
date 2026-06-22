"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function About() {
  const [lightbox, setLightbox] = useState(false);

  return (
    <LayoutGroup>
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-16"
            style={{ background: "var(--bg)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={() => setLightbox(false)}
          >
            <motion.div
              className="max-h-[80vh] rounded-2xl overflow-hidden"
              layoutId="avatar"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img
                src="/images/avatar-new2.png"
                alt="Evgeny"
                className="max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    <motion.main
      className="mx-auto w-full max-w-[565px] py-[100px] px-5 box-content"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.18 }}
    >
      {/* Breadcrumb */}
      <motion.div
        className="flex items-center gap-2 text-base leading-6 mb-8"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link href="/" className="hover:underline underline-offset-4 decoration-[0.75px]" style={{ color: "var(--text-muted)" }}>
          Home
        </Link>
        <span style={{ color: "var(--text-muted)" }}>&gt;</span>
        <span style={{ color: "var(--text)" }}>About</span>
      </motion.div>

      {/* Intro */}
      <motion.section
        className="mb-8"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-base leading-6" style={{ color: "var(--text-body)" }}>
          I&apos;m an interface designer working on product and mobile design,
          helping turn complex ideas into simple, usable interfaces.
        </p>
        <p className="text-base leading-6 mt-4" style={{ color: "var(--text-body)" }}>
          For the past year I&nbsp;worked at the digital agency kringga, where
          I&nbsp;focused on Ghost&nbsp;VPN&nbsp;— a&nbsp;Telegram bot with over
          50,000 users. I&nbsp;designed OS-specific onboarding flows to fit each
          platform&apos;s quirks and built out a referral program from scratch,
          all while making sure everything held up cleanly on desktop too.
        </p>
        <p className="text-base leading-6 mt-4" style={{ color: "var(--text-body)" }}>
          Before that, I&nbsp;worked as a designer for the New People party.
        </p>
      </motion.section>

      {/* Photo */}
      <motion.div
        className="w-full rounded-2xl overflow-hidden mb-8"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={() => setLightbox(true)}
        layoutId="avatar"
      >
        <img
          src="/images/avatar-new2.png"
          alt="Evgeny"
          className="w-full"
        />
      </motion.div>

      {/* Philosophy */}
      <motion.section
        className="mb-8"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Philosophy
        </h2>
        <p className="text-base leading-6" style={{ color: "var(--text-body)" }}>
          I&apos;m especially drawn to the shift happening in design right now:
          tools like Claude&nbsp;Code let me move straight from Figma into working,
          real software, without losing fidelity along the way. I&apos;m&nbsp;looking
          for the next project where I&nbsp;can bring that into the room from day one.
        </p>
      </motion.section>

      {/* Experience */}
      <motion.section
        className="mb-8"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Experience
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-[24px]">
            <span
              className="text-base leading-6 w-[160px] shrink-0"
              style={{ color: "var(--text-muted)" }}
            >
              Apr 2025 - Current
            </span>
            <div>
              <p className="text-base leading-6" style={{ color: "var(--text)" }}>
                Interface Designer
              </p>
              <a href="https://kringga.agency/" target="_blank" rel="noopener noreferrer" className="text-base leading-6 hover:underline underline-offset-4 decoration-[0.75px]" style={{ color: "var(--text-muted)" }}>
                kringga
              </a>
            </div>
          </div>
          <div className="flex gap-[24px]">
            <span
              className="text-base leading-6 w-[160px] shrink-0"
              style={{ color: "var(--text-muted)" }}
            >
              Dec 2025 - Mar 2026
            </span>
            <div>
              <p className="text-base leading-6" style={{ color: "var(--text)" }}>
                Designer
              </p>
              <a href="https://orel.newpeople.ru/" target="_blank" rel="noopener noreferrer" className="text-base leading-6 hover:underline underline-offset-4 decoration-[0.75px]" style={{ color: "var(--text-muted)" }}>
                New People
              </a>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Contact */}
      <motion.section
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Contact
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-[24px]">
            <span
              className="text-base leading-6 w-[160px] shrink-0"
              style={{ color: "var(--text-muted)" }}
            >
              Telegram
            </span>
            <a
              href="https://t.me/evg1nn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base leading-6 hover:underline underline-offset-4 decoration-[0.75px]"
              style={{ color: "var(--text)" }}
            >
              evg1nn
            </a>
          </div>
          <div className="flex gap-[24px]">
            <span
              className="text-base leading-6 w-[160px] shrink-0"
              style={{ color: "var(--text-muted)" }}
            >
              Email
            </span>
            <a
              href="mailto:evgeny1merzalov@yandex.ru"
              className="text-base leading-6 hover:underline underline-offset-4 decoration-[0.75px]"
              style={{ color: "var(--text)" }}
            >
              evgeny1merzalov@yandex.ru
            </a>
          </div>
          <div className="flex gap-[24px]">
            <span
              className="text-base leading-6 w-[160px] shrink-0"
              style={{ color: "var(--text-muted)" }}
            >
              X
            </span>
            <a
              href="https://x.com/evg1nn_eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base leading-6 hover:underline underline-offset-4 decoration-[0.75px]"
              style={{ color: "var(--text)" }}
            >
              evg1nn_eth
            </a>
          </div>
        </div>
      </motion.section>
    </motion.main>
    </LayoutGroup>
  );
}

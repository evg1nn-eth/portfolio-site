"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ImageLightbox } from "@/components/ui/image-lightbox";

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function PersonalFinanceTracker() {
  return (
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
        <span style={{ color: "var(--text)" }}>Personal Finance Tracker</span>
      </motion.div>

      {/* Title */}
      <motion.div
        className="flex items-start justify-between mb-6"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div>
          <h1 className="text-base leading-6" style={{ color: "var(--text)" }}>
            Personal Finance Tracker
          </h1>
          <p className="text-base leading-6" style={{ color: "var(--text-muted)" }}>
            2025
          </p>
        </div>
        <a
          href="https://www.figma.com/design/9FZOIuHHzvMP9IpjJtnJGY/Valto-Finance-Tracker-%E2%80%94-Mobile-App---UI-UX?node-id=0-1&t=R19EF3dmC6iOZJYl-1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 rounded-lg text-sm transition-all duration-200 border hover:bg-[#F5F5F5] hover:scale-105"
          style={{ borderColor: "var(--border)" }}
        >
          <img src="/icons/figma-icon.svg" alt="Figma" className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Intro */}
      <motion.p
        className="text-base leading-6 mb-6"
        style={{ color: "var(--text-body)" }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        In this case, I&nbsp;worked on a concept for a mobile app focused on personal finance
        management. My task was to simplify expense tracking and make the user&apos;s
        financial picture clear and understandable through the interface and user flows.
      </motion.p>

      {/* Image 1 */}
      <motion.div
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ImageLightbox src="/images/tracker-1.png" alt="Onboarding screens" className="w-full rounded-2xl overflow-hidden" layoutId="tracker-1" />
      </motion.div>

      {/* Problem */}
      <motion.section
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Problem
        </h2>
        <p className="text-base leading-6" style={{ color: "var(--text-body)" }}>
          Financial data is often presented in an overly complex way. Users have to spend
          time parsing numbers and tables instead of quickly understanding their situation
          and making a decision.
        </p>
      </motion.section>

      {/* Case Goal */}
      <motion.section
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Case Goal
        </h2>
        <p className="text-base leading-6 mb-3" style={{ color: "var(--text-body)" }}>
          Focus on the basic, most common scenarios users rely on:
        </p>
        <ol className="text-base leading-6 list-decimal pl-5 flex flex-col gap-1" style={{ color: "var(--text-body)" }}>
          <li>Viewing overall balance and current financial status</li>
          <li>Analyzing expenses by category</li>
          <li>Visualizing the financial picture clearly, without overloading the interface</li>
        </ol>
      </motion.section>

      {/* Image 2 */}
      <motion.div
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ImageLightbox src="/images/tracker-2.png" alt="Main screens" className="w-full rounded-2xl overflow-hidden" layoutId="tracker-2" />
      </motion.div>

      {/* Approach */}
      <motion.section
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Approach
        </h2>
        <p className="text-base leading-6" style={{ color: "var(--text-body)" }}>
          This case was created as a concept. I&nbsp;worked on the interface logic and screen
          structure, drawing on existing product patterns and common user scenarios.
        </p>
      </motion.section>

      {/* Image 3 */}
      <motion.div
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ImageLightbox src="/images/tracker-3.png" alt="Analytics screens" className="w-full rounded-2xl overflow-hidden" layoutId="tracker-3" />
      </motion.div>

      {/* Image 4 */}
      <motion.div
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ImageLightbox src="/images/tracker-4.png" alt="Settings screen" className="w-full rounded-2xl overflow-hidden" layoutId="tracker-4" />
      </motion.div>

      {/* Image 5 */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ImageLightbox src="/images/tracker-5.png" alt="Additional screens" className="w-full rounded-2xl overflow-hidden" layoutId="tracker-5" />
      </motion.div>
    </motion.main>
  );
}

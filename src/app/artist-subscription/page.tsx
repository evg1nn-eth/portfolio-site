"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ImageLightbox } from "@/components/ui/image-lightbox";

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function ArtistSubscription() {
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
        <span style={{ color: "var(--text)" }}>Artist Subscription</span>
      </motion.div>

      {/* Title */}
      <motion.div
        className="flex items-start justify-between mb-6"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div>
          <h1 className="text-base leading-6" style={{ color: "var(--text)" }}>
            Artist Subscription
          </h1>
          <p className="text-base leading-6" style={{ color: "var(--text-muted)" }}>
            2025
          </p>
        </div>
        <a
          href="https://www.figma.com/design/ryS3ZtmCeJ6TkoAsktHeH3/Music-App---Product-Concept-Case?node-id=0-1&t=20wy9VoykREA72Lr-1"
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
        className="text-base leading-6 mb-10"
        style={{ color: "var(--text-body)" }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        The artist subscription feature exists, but it doesn&apos;t give users a sense of value and
        isn&apos;t perceived as a reason to come back to the app.
      </motion.p>

      {/* Problem */}
      <motion.section
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Problem
        </h2>
        <p className="text-base leading-6 mb-4" style={{ color: "var(--text-body)" }}>
          Users actively listen to music but rarely subscribe to artists. The subscription feels
          like an optional action and doesn&apos;t create a clear sense of future value.
        </p>
        <p className="text-base leading-6" style={{ color: "var(--text-body)" }}>
          As a result, users often find out about new releases from external sources, and the
          interaction with content inside the product doesn&apos;t develop into a habit of
          returning.
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
          To propose a conceptual product solution that:
        </p>
        <ol className="text-base leading-6 list-decimal pl-5 flex flex-col gap-1" style={{ color: "var(--text-body)" }}>
          <li>Clarifies the value of subscribing to an artist at the moment of interaction</li>
          <li>Makes the subscription&apos;s value clear right when the user engages with content</li>
          <li>Creates a relevant trigger for the user to return to the app when a new release drops</li>
        </ol>
      </motion.section>

      {/* Research */}
      <motion.section
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Research
        </h2>
        <p className="text-base leading-6 mb-4" style={{ color: "var(--text-body)" }}>
          I approached this case as a conceptual problem, so at the research stage I&nbsp;focused
          not on interviews but on analyzing existing product solutions and user scenarios.
        </p>
        <p className="text-base leading-6 mb-4" style={{ color: "var(--text-body)" }}>
          My goal was to understand why subscribing to an artist isn&apos;t perceived as a valuable
          action and at which moments the connection between listening to content and
          returning to the app is lost.
        </p>
        <p className="text-base leading-6 mb-3" style={{ color: "var(--text-body)" }}>
          At this stage I:
        </p>
        <ol className="text-base leading-6 list-decimal pl-5 flex flex-col gap-1" style={{ color: "var(--text-body)" }}>
          <li>Broke down the current artist subscription flow</li>
          <li>Analyzed how music services explain (or fail to explain) the value of subscribing</li>
          <li>Focused on the moments where a user makes a decision and where the
              expectation of a future event needs to be formed</li>
        </ol>
      </motion.section>

      {/* Benchmarking */}
      <motion.section
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Benchmarking
        </h2>
        <p className="text-base leading-6 mb-3" style={{ color: "var(--text-body)" }}>
          Why did I do Benchmarking?
        </p>
        <ol className="text-base leading-6 list-decimal pl-5 flex flex-col gap-1" style={{ color: "var(--text-body)" }}>
          <li>To understand how music services handle the artist subscription scenario and
              use new release notifications to bring users back</li>
          <li>To identify strengths and weaknesses of existing solutions and product
              patterns that create a positive return loop</li>
        </ol>
      </motion.section>

      {/* Image 1 - Research screenshots */}
      <motion.div
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ImageLightbox src="/images/artist-1.png" alt="Research and benchmarking" className="w-full rounded-2xl overflow-hidden" layoutId="artist-1" />
      </motion.div>

      {/* Benchmarking Findings */}
      <motion.section
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Benchmarking Findings
        </h2>
        <ol className="text-base leading-6 list-decimal pl-5 flex flex-col gap-1" style={{ color: "var(--text-body)" }}>
          <li>Artist subscription exists in almost every app, but it&apos;s rarely clear what it gives
              you — many services simply toggle a state without explaining the value</li>
          <li>Where new feedback appears after subscribing, the user feels that their action
              meant something</li>
          <li>The real reason to return is almost always tied to a specific event — a new
              release the product tells the user about</li>
          <li>The ability to subscribe to a specific artist directly from a track isn&apos;t available
              everywhere, which can prevent users from subscribing to the right artist</li>
        </ol>
      </motion.section>

      {/* Hypotheses */}
      <motion.section
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Hypotheses
        </h2>
        <p className="text-base leading-6 mb-2" style={{ color: "var(--text)" }}>
          Null hypothesis:
        </p>
        <p className="text-base leading-6 mb-4" style={{ color: "var(--text-body)" }}>
          If we leave the artist subscription as-is, without explaining its value, users are
          unlikely to start using it as a mechanism to return to new content.
        </p>
        <p className="text-base leading-6 mb-3" style={{ color: "var(--text-body)" }}>
          Other hypotheses:
        </p>
        <ol className="text-base leading-6 list-decimal pl-5 flex flex-col gap-2" style={{ color: "var(--text-body)" }}>
          <li>Value positioning: If we clearly show at the moment of subscribing that the user
              will receive new release notifications, the subscription will stop feeling abstract
              and become a clear reason to return to the app</li>
          <li>Action confirmation: If the user receives clear confirmation that their
              subscription worked (added, notifications active), it will feel like a meaningful
              action rather than just toggling a state</li>
          <li>Event-based notifications: If notifications are tied to a specific event (a new
              track or album release) rather than sent as general content noise, users will
              return to the app more often after receiving them</li>
          <li>Subscription moment with clear value: If the subscription is offered at the
              moment of listening to a track — not as a side action on the artist page — the
              user is more likely to subscribe and look forward to new releases</li>
        </ol>
      </motion.section>

      {/* Hypothesis Filtering */}
      <motion.section
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Hypothesis Filtering
        </h2>
        <p className="text-base leading-6 mb-4" style={{ color: "var(--text-body)" }}>
          I focused on hypotheses that could be tested through a single change in the user
          scenario and that directly affect the user&apos;s return to the app.
        </p>
        <p className="text-base leading-6 mb-3" style={{ color: "var(--text)" }}>
          I chose not to consider hypotheses that:
        </p>
        <ol className="text-base leading-6 list-decimal pl-5 flex flex-col gap-1 mb-4" style={{ color: "var(--text-body)" }}>
          <li>Require a large number of screens and scenarios</li>
          <li>Don&apos;t influence the moment of decision-making</li>
          <li>Go beyond the core return scenario</li>
        </ol>
        <p className="text-base leading-6 mb-3" style={{ color: "var(--text)" }}>
          The following hypotheses were taken into the work:
        </p>
        <ol className="text-base leading-6 list-decimal pl-5 flex flex-col gap-1" style={{ color: "var(--text-body)" }}>
          <li>Value positioning of the subscription</li>
          <li>Event-based release notifications</li>
        </ol>
      </motion.section>

      {/* Solution */}
      <motion.section
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Solution
        </h2>
        <p className="text-base leading-6" style={{ color: "var(--text-body)" }}>
          In the process of working on the case, I broke down existing music app scenarios
          and analyzed how music services explain the value of this action and what
          mechanisms they use to bring users back. It became clear that the moment of
          subscribing and the notification are exactly where the user forms an expectation of
          a future event — and that&apos;s where the product can make the biggest difference.
        </p>
      </motion.section>

      {/* Image 2 - Final designs */}
      <motion.div
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ImageLightbox src="/images/artist-2.png" alt="Final designs" className="w-full rounded-2xl overflow-hidden" layoutId="artist-2" />
      </motion.div>

      {/* Impact */}
      <motion.section
        className="mb-10"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Impact
        </h2>
        <p className="text-base leading-6 mb-4" style={{ color: "var(--text-body)" }}>
          In this case I worked toward a positive metric — bringing the user back to the app
          and giving them a clear reason to return.
        </p>
        <p className="text-base leading-6 mb-4" style={{ color: "var(--text-body)" }}>
          By explaining the value of the subscription, the user understands what will happen
          next. They know they&apos;ll get a notification when a new album drops, and they&apos;re
          more likely to come back to the app because of it.
        </p>
        <p className="text-base leading-6" style={{ color: "var(--text-body)" }}>
          As a result, the subscription stops being a formal action and starts working as part
          of a repeat return scenario.
        </p>
      </motion.section>

      {/* Reflection */}
      <motion.section
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-base leading-6 mb-4" style={{ color: "var(--text)" }}>
          Reflection
        </h2>
        <p className="text-base leading-6 mb-4" style={{ color: "var(--text-body)" }}>
          This case is a concept, so it doesn&apos;t go deep into quantitative research.
        </p>
        <p className="text-base leading-6 mb-4" style={{ color: "var(--text-body)" }}>
          I relied on an analysis of common patterns in music services and my own product
          assumptions. The logical next step would be to put a user into the interaction
          moment and see how intuitive the transition feels.
        </p>
        <p className="text-base leading-6" style={{ color: "var(--text-body)" }}>
          The proposed solution has the potential to reduce friction and increase the overall
          intent to return to the app.
        </p>
      </motion.section>
    </motion.main>
  );
}

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars", // "chars" | "words" | "lines"
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);

  // Helper: Split text into spans
  const getSplitText = () => {
    if (splitType === "words") {
      return text.split(" ").map((word, i) => (
        <span
          key={i}
          className="split-word"
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {word}&nbsp;
        </span>
      ));
    }
    if (splitType === "lines") {
      return text.split("\n").map((line, i) => (
        <span
          key={i}
          className="split-line"
          style={{ display: "block", whiteSpace: "pre" }}
        >
          {line}
        </span>
      ));
    }
    // Default = chars
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="split-char"
        style={{ display: "inline-block", whiteSpace: "pre" }}
      >
        {char}
      </span>
    ));
  };

  useEffect(() => {
    const el = ref.current;
    if (!el || animationCompletedRef.current) return;

    const targets = el.querySelectorAll(
      ".split-char, .split-word, .split-line"
    );

    const startPct = (1 - threshold) * 100;
    const m = /^(-?\d+)px$/.exec(rootMargin);
    const raw = m ? parseInt(m[1], 10) : 0;
    const sign = raw < 0 ? `-=${Math.abs(raw)}px` : `+=${raw}px`;
    const start = `top ${startPct}%${sign}`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
      },
      smoothChildTiming: true,
      onComplete: () => {
        animationCompletedRef.current = true;
        gsap.set(targets, { ...to, clearProps: "all" });
        onLetterAnimationComplete?.();
      },
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(targets);
    };
  }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin]);

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: "hidden",
        display: "inline",
        whiteSpace: "pre-line", // ✅ supports \n line breaks
        wordWrap: "break-word",
        fontFamily: "'Clash Display', sans-serif",
        maxWidth: "100%",
        padding: "0 1rem",
      }}
    >
      {getSplitText()}
    </p>
  );
};

export default SplitText;

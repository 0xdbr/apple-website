import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate an element with GSAP and ScrollTrigger
 * @param {string} target - The target element selector
 * @param {object} animationProps - The animation properties
 * @param {object} scrollProps - The ScrollTrigger properties
 */
export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

/**
 * Animate elements with GSAP and a timeline
 * @param {object} timeline - The GSAP timeline instance
 * @param {object} rotationRef - The ref object containing the rotation value
 * @param {number} rotationState - The rotation state value
 * @param {string} firstTarget - The first target element selector
 * @param {string} secondTarget - The second target element selector
 * @param {object} animationProps - The animation properties
 */
export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
// GSAP SCROLL ANIMATIONS
// To remove: delete this file + the 3 GSAP script tags in v5.html (marked with !! GSAP EXPERIMENT !!)

gsap.registerPlugin(ScrollTrigger);

// ── Experiment 5: Section 2 Roles — mobile fade-in-place, one at a time ──
gsap.matchMedia().add("(max-width: 767px)", () => {
  gsap.utils.toArray(".roles-mobile__item").forEach(item => {
    gsap.fromTo(item,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 82%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
});

// ── Experiment 1: Section 6 Engagement Cards — slide in from sides ──
gsap.from(".engagement__card--cobuild", {
  scrollTrigger: {
    trigger: ".engagement",
    start: "top 75%",
    toggleActions: "play none none reset"
  },
  x: -80,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".engagement__card--fixed", {
  scrollTrigger: {
    trigger: ".engagement",
    start: "top 75%",
    toggleActions: "play none none reset"
  },
  x: 80,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  delay: 0.15
});

// ── Experiment 4: Hero — scrubbed parallax exit sequence ──
// scrub handles its own bidirectional state — no toggleActions needed
const heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  }
});

heroTl
  .to(".hero__headline-line:nth-child(1)", { x: -120, opacity: 0, ease: "none" }, 0)
  .to(".hero__headline-line--italic",      { x: 100, y: -40, opacity: 0, ease: "none" }, 0)
  .to(".hero__headline-line:nth-child(3)", { x: -60, opacity: 0, ease: "none" }, 0)
  .to(".hero__tagline",                    { y: 40, opacity: 0, ease: "none" }, 0)
  .to(".hero__ctas",                       { opacity: 0, duration: 0.4, ease: "none" }, 0)
  .to(".hero__bg",                         { scale: 1.12, ease: "none" }, 0);

// ── Experiment 3: Values Bento Grid — sequential timeline reveal ──
const valuesTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".values__grid",
    start: "top 70%",
    toggleActions: "play none none reset"
  }
});
valuesTl
  .from(".values__card--founding",  { y: 50, opacity: 0, duration: 0.6, ease: "power2.out" })
  .from(".values__card--prompt",    { y: 50, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
  .from(".values__card--orange",    { scale: 0.9, opacity: 0, duration: 0.7, ease: "back.out(1.4)" }, "-=0.3")
  .from(".values__card--motion",    { y: 50, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
  .from(".values__card--business",  { y: 50, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");

// ── Experiment 2: Portfolio Cards — staggered fade up ──
gsap.from(".portfolio__card", {
  scrollTrigger: {
    trigger: ".portfolio__grid",
    start: "top 80%",
    toggleActions: "play none none reset"
  },
  y: 50,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.15
});

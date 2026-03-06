// Shared Motion animation variant presets
// Duration: 300-500ms for transitions, 500-800ms for scroll reveals
// Easing: [0.25, 0.46, 0.45, 0.94] (smooth deceleration)
// Only animate: transform and opacity (hardware-accelerated)
// Stagger children: 150ms delay

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease },
};

export const slideInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease },
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.15 },
  },
  viewport: { once: true, margin: '-50px' },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease },
};

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
};

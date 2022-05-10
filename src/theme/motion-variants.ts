const TWEEN_DURATION = 0.5
const DURATION = 0.25

export const fade = {
  hide: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: TWEEN_DURATION,
    },
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: TWEEN_DURATION,
    },
  },
}

export const fadeUp = {
  hide: {
    opacity: 0,
    translateY: 30,
    transition: {
      type: "tween",
      duration: DURATION,
    },
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      type: "tween",
      duration: DURATION,
    },
  },
}

export const staggerChildren = {
  hide: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.04,
    },
  },
}

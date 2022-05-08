const TWEEN_DURATION = 0.5

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

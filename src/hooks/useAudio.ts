import { useEffect, useState } from "react"

const useAudio = (
    url: any
): {
    toggle: any
    mute: any
} => {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)
    const [muted, setMuted] = useState(false)

    const toggle = () => setPlaying(!playing)
    const mute = () => setMuted(!muted)

    useEffect(() => {
        playing ? audio.play() : audio.pause()
    }, [playing])

    useEffect(() => {
        audio.muted = muted
    }, [muted])

    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false))
        return () => {
            audio.removeEventListener("ended", () => setPlaying(false))
        }
    }, [])

    return { toggle, mute }
}

export default useAudio

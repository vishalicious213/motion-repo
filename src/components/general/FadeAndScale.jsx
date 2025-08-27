import { motion } from "motion/react"

// fade & scale on entry (first time only)
const settings = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: {
        duration: 0.4,
        scale: {
            type: "spring",
            visualDuration: 0.4,
            bounce: 0.5
        }
    }
}

const FadeAndScale = () => {
    return (
        <motion.div
            {...settings}
        >
            Fade & Scale
        </motion.div>
    )
}

export default FadeAndScale
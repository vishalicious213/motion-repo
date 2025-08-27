import { motion } from "motion/react"

// slide up from bottom (first time only)
const settings = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
        type: "spring",
        visualDuration: 0.6,
        bounce: 0.3
    }
}

const SlideUp = () => {
    return (
        <motion.div
            {...settings}
        >
            Slide Up From Bottom
        </motion.div>
    )
}

export default SlideUp
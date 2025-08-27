import { motion } from "motion/react"

// slide in from right & scale (first time only)
const settings = {
    initial: { opacity: 0, x: 100, scale: 0.4 },
    whileInView: { opacity: 1, x: 0, scale: 1 },
    viewport: { once: true },
    transition: {
        type: "spring",
        visualDuration: 1.5,
        bounce: 0.3
    }
}

const SlideInFromRightScale = () => {
    return (
        <motion.div
            {...settings}
        >
            Slide In From Right & Scale
        </motion.div>
    )
}

export default SlideInFromRightScale
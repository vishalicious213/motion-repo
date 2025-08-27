import { motion } from "motion/react"

// slide in from right (first time only)
const settings = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: {
        type: "spring",
        visualDuration: 1.5,
        bounce: 0.3
    }
}

const SlideInFromRight = () => {
    return (
        <motion.div
            {...settings}
        >
            Slide In From Right
        </motion.div>
    )
}

export default SlideInFromRight
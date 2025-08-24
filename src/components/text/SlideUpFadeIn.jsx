import { motion } from "motion/react"

const SlideUpFadeIn = () => {
    return (
        <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: .5,
                ease: "easeInOut"
            }}
        >
            Slide Up, Fade In
        </motion.div>
    )
}

export default SlideUpFadeIn
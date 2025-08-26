import { motion } from "motion/react"

const ColorChangePulse = () => {
    return (
        <motion.div
            className="gradient-text-pulse"
            initial={{ backgroundSize: "100% 100%" }}
            animate={{ backgroundSize: ["100% 100%", "300% 300%", "100% 100%"] }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            Color Change
        </motion.div>
    )
}

export default ColorChangePulse
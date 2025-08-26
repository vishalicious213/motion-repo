import { motion } from "motion/react"

const ColorChangeLTR = () => {
    return (
        <motion.div
            className="gradient-text"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            Color Change using gradient background
        </motion.div>
    )
}

export default ColorChangeLTR
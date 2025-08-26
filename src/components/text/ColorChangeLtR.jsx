import { motion } from "motion/react"

const ColorChange = () => {
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
            Color Change
        </motion.div>
    )
}

export default ColorChange

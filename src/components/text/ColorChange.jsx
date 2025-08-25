import { motion } from "motion/react"

const ColorChange = () => {
    return (
        <motion.div
            initial={{ color: "#333" }}
            animate={{ color: ["#6a9bd1", "#4c6ef5", "#1a3e96", "#ff0000"] }}
            transition={{ 
                duration: 2,
                repeat: Infinity
            }}
        >
            Color Change
        </motion.div>
    )
}

export default ColorChange
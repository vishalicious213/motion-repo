import { motion } from "motion/react"

const Typewriter = () => {
    return (
        <motion.div
            style={{ overflow: "hidden", whiteSpace: "nowrap"}}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
                duration: 2,
                ease: "easeInOut"
            }}
        >
            Typewriter
        </motion.div>
    )
}

export default Typewriter
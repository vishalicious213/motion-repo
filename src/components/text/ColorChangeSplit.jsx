import { motion } from "motion/react"

const text = "Color   Change   splitting   characters".split("")

const ColorChangeSplit = () => {
    return (
        <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
        {text.map((char, i) => (
            <motion.span
                key={i}
                initial={{ color: "#333" }}
                animate={{ color: ["#6a9bd1", "#4c6ef5", "#1a3e96", "#ff0000"] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1, // <- stagger each letter
                }}
            >
                {char}
            </motion.span>
        ))}
        </div>
    )
}

export default ColorChangeSplit
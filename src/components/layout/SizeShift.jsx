import { useState } from "react"
import { motion } from "motion/react"

const SizeShift = () => {
    const [size, setSize] = useState(100)

    const toggleSize = () => {
        setSize(size === 100 ? 150 : 100)
    }

    return (
        <div>
            <button onClick={toggleSize}>Toggle size</button>
            <motion.div
                style={{
                    width: size,
                    height: size,
                    background: "lightblue",
                    margin: "20px"
                }}
            >

            </motion.div>
        </div>
    )
}

export default SizeShift
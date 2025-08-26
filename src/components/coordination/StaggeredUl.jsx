import { motion } from "motion/react"

const container = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const StaggeredUl = () => {
    return (
        <motion.ul 
            variants={container} 
            initial="hidden" 
            animate="visible"
        >
            {[1, 2, 3].map(i => (
                <motion.li key={i} variants={item}>{i}</motion.li>
            ))}
        </motion.ul>
    )
}

export default StaggeredUl
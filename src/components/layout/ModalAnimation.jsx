import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const ModalAnimation = ({ onClose }) => {
    return (
        <motion.div
            className="overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="modal-card"
                onClick={ (e) => e.stopPropagation() }
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                }}
            >

            </motion.div>
        </motion.div>
    )
}

export default ModalAnimation
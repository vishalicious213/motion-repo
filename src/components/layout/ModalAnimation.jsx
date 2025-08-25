import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const Modal = ({ onClose }) => {
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
                <h2>Exclusive Offer Just for You!</h2>
                <p>**Get 20% off your next purchase!</p>
                <p>Use code <strong>SAVE20</strong> at checkout.</p>
                <p>Hurry, this offer is valud until midnight!</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </motion.div>
        </motion.div>
    )
}

const ModalWrapper = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="modal-wrapper">
            <button className="open-button" onClick={() => setIsOpen(true)}>
                Open Modal
            </button>

            <AnimatePresence>
                {isOpen && <Modal onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
        </div>
    )
}

export default ModalWrapper
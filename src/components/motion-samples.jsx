// fade & scale on entry (first time only)
const fadeAndScale = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: {
        duration: 0.4,
        scale: {
            type: "spring",
            visualDuration: 0.4,
            bounce: 0.5
        }
    }
}

// slide up from bottom (first time only)
const slideUp = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
        type: "spring",
        visualDuration: 0.6,
        bounce: 0.3
    }
}

// slide in from left (first time only)
const slideFromLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: {
        type: "spring",
        visualDuration: 1.5,
        bounce: 0.3
    }
}

// slide in from right (first time only)
const slideFromRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: {
        type: "spring",
        visualDuration: 1.5,
        bounce: 0.3
    }
}

// slide in from right & scale (first time only)
const slideFromRightAndScale = {
    initial: { opacity: 0, x: 100, scale: 0.8 },
    whileInView: { opacity: 1, x: 0, scale: 1 },
    viewport: { once: true },
    transition: {
        type: "spring",
        visualDuration: 1.5,
        bounce: 0.3
    }
}
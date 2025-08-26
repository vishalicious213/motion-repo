import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import PTHome from './pages/PTHome.jsx'
import PTAbout from './pages/PTAbout.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<AnimatedRoutes />
		</BrowserRouter>
	</StrictMode>
)

function AnimatedRoutes() {
	const location = useLocation()

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<App />} />
				<Route path="/pthome" element={<PTHome />} />
				<Route path="/ptabout" element={<PTAbout />} />
			</Routes>
		</AnimatePresence>
	)
}


function PageWrapper({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
		>
			{ children }
		</motion.div>
	)
}
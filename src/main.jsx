import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import PTHome from './pages/PTHome.jsx'
import PTAbout from './pages/PTAbout.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/pthome" element={<PTHome />} />
				<Route path="/ptabout" element={<PTAbout />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)

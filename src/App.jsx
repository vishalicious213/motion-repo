import { useState } from 'react'
import { Link } from 'react-router'
import Info from './components/Info'
import ColorChange from './components/text/ColorChange'
import ColorChangeLTR from './components/text/ColorChangeLtR'
import ColorChangePulse from './components/text/ColorChangePulse'
import ColorChangeSplit from './components/text/ColorChangeSplit'
import ModalWrapper from './components/layout/ModalAnimation'
import SizeShift from './components/layout/SizeShift'
import SlideUpFadeIn from './components/text/SlideUpFadeIn'
import Typewriter from './components/text/Typewriter'
import './App.css'

function App() {
	const [Animation, setAnimation] = useState(null)
	const [renderKey, setRenderKey] = useState(0)

	const handleClick = (selection) => {
		setAnimation(() => selection)
		setRenderKey(prev => prev + 1)
	}

	return (
		<>
			<h1>React Motion</h1>

			<ul className='motion-list'>
				<li onClick={() => handleClick(Info)}>Info</li>

				<h2>Text Animations</h2>
				<li onClick={() => handleClick(ColorChange)}>Color Changing Text</li>
				<li onClick={() => handleClick(ColorChangeLTR)}>Color Changing Text LtR using gradient</li>
				<li onClick={() => handleClick(ColorChangePulse)}>Color Changing Text, pulsing</li>
				<li onClick={() => handleClick(ColorChangeSplit)}>Color Changing Text LtR split characters</li>
				<li onClick={() => handleClick(SlideUpFadeIn)}>Slide Up, Fade In</li>
				<li onClick={() => handleClick(Typewriter)}>Typewriter</li>

				<h2>Layout Animations</h2>
				<li onClick={() => handleClick(ModalWrapper)}>Modal Animation</li>
				<li onClick={() => handleClick(SizeShift)}>Size Shift</li>
				<li><Link to="/pthome">Page Transitions (go to page)</Link></li>
			</ul>

			<main>
				{Animation && <Animation key={renderKey} />}
			</main>
		</>
	)
}

export default App
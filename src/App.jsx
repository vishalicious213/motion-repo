import { useState } from 'react'
import { Link } from 'react-router'
import Info from './components/Info'
import ColorChange from './components/text/ColorChange'
import ColorChangeLTR from './components/text/ColorChangeLtR'
import ColorChangePulse from './components/text/ColorChangePulse'
import ColorChangeSplit from './components/text/ColorChangeSplit'
import FadeAndScale from './components/general/FadeAndScale'
import ModalWrapper from './components/layout/ModalAnimation'
import SizeShift from './components/layout/SizeShift'
import SlideInFromLeft from './components/general/SlideInFromLeft'
import SlideUpFadeIn from './components/text/SlideUpFadeIn'
import SlideUp from './components/general/SlideUp'
import StaggeredUl from './components/coordination/StaggeredUl'
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

			<main>
				{Animation && <Animation key={renderKey} />}
			</main>

			<ul className='motion-list'>
				<li onClick={() => handleClick(Info)}>Info</li>

				<h2>Text</h2>
				<li onClick={() => handleClick(SlideUpFadeIn)}>Slide Up, Fade In</li>
				<li onClick={() => handleClick(Typewriter)}>Typewriter</li>

				<h3>▸ Color Changing</h3>
				<li onClick={() => handleClick(ColorChange)}>Color Changing Text</li>
				<li onClick={() => handleClick(ColorChangeLTR)}>LtR using gradient</li>
				<li onClick={() => handleClick(ColorChangeSplit)}>LtR split characters</li>
				<li onClick={() => handleClick(ColorChangePulse)}>Pulsing</li>

				<h2>Layout</h2>
				<li onClick={() => handleClick(ModalWrapper)}>Modal Animation</li>
				<li onClick={() => handleClick(SizeShift)}>Size Shift</li>
				<li><Link to="/pthome">Page Transitions (go to page)</Link></li>

				<h2>Coordination</h2>
				<li onClick={() => handleClick(StaggeredUl)}>Staggered List</li>

				<h2>General Element</h2>
				<li onClick={() => handleClick(FadeAndScale)}>Fade & Scale</li>
				<li onClick={() => handleClick(SlideUp)}>Slide Up From Bottom</li>
				<li onClick={() => handleClick(SlideInFromLeft)}>Slide In From Left</li>
			</ul>
		</>
	)
}

export default App
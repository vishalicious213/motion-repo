import { useState } from 'react'
import Info from './components/Info'
import ColorChange from './components/text/ColorChange'
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
			<h1>Motion animations</h1>

			<ul>
				<li onClick={() => handleClick(Info)}>Info</li>

				<h2>Text Animations</h2>
				<li onClick={() => handleClick(ColorChange)}>Color Changing Text</li>
				<li onClick={() => handleClick(SlideUpFadeIn)}>Slide Up, Fade In</li>
				<li onClick={() => handleClick(Typewriter)}>Typewriter</li>

				<h2>Layout Animations</h2>
				<li onClick={() => handleClick(ModalWrapper)}>Modal Animation</li>
				<li onClick={() => handleClick(SizeShift)}>Size Shift</li>
			</ul>

			<main>
				{Animation && <Animation key={renderKey} />}
			</main>
		</>
	)
}

export default App
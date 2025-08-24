import { useState } from 'react'
import Info from './components/text/Info'
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
				<li onClick={() => handleClick(SlideUpFadeIn)}>Slide Up, Fade In</li>
				<li onClick={() => handleClick(Typewriter)}>Typewriter</li>
			</ul>

			<main>
				{Animation && <Animation key={renderKey} />}
			</main>
		</>
	)
}

export default App
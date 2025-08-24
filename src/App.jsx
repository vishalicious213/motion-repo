import { useState } from 'react'
import Info from './components/text/Info'
import SlideUpFadeIn from './components/text/SlideUpFadeIn'
import './App.css'

function App() {
	const [animation, setAnimation] = useState()

	return (
		<>
			<h1>Motion animations</h1>

			<ul>
				<li onClick={() => setAnimation(Info)}>Info</li>
				
				<h2>Text Animations</h2>
				<li onClick={() => setAnimation(SlideUpFadeIn)}>Slide Up, Fade In</li>
			</ul>

			<main>
				{animation}
			</main>
		</>
	)
}

export default App
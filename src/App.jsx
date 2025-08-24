import { useState } from 'react'
import SlideUpFadeIn from './components/text/SlideUpFadeIn'
import './App.css'

function App() {
	const [animation, setAnimation] = useState()

	return (
		<>
			<h1>Motion animations</h1>

			<h2>Text animations</h2>
			<ul className='selection'>
				<li onClick={() => setAnimation(SlideUpFadeIn)}>Slide Up Fade In</li>
			</ul>

			<main>
				{animation}
			</main>
		</>
	)
}

export default App
import { useState } from 'react'
import SlideUpFadeIn from './components/text/SlideUpFadeIn'
import './App.css'

function App() {
	const [animation, setAnimation] = useState()

	return (
		<>
			<h1>Motion animations</h1>

			<p>Install Motion in React with <code>npm install motion</code>.</p>
			<p>Import it with <code>import { `motion` } from 'motion/react'</code>.</p>
			<p>"motion" is the main component from the library that transforms HTML/JSX & SVG elements into animatable elements.</p>

			<h2>Text animations</h2>
			<ul className='selection'>
				<li onClick={() => setAnimation(SlideUpFadeIn)}>Slide Up, Fade In</li>
			</ul>

			<main>
				{animation}
			</main>
		</>
	)
}

export default App
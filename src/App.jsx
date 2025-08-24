import { useState } from 'react'
import SlideUpFadeIn from './components/text/SlideUpFadeIn'
import './App.css'

function App() {
	const [animation, setAnimation] = useState()

	return (
		<>
			<h1>Motion animations</h1>

			<main>
				{animation}
			</main>
		</>
	)
}

export default App
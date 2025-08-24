const Info = () => {
    return (
        <section>
			<p>"motion" is the main component from the library that transforms HTML/JSX & SVG elements into animatable elements.</p>
			<p>Install Motion in React with <code>npm install motion</code>.</p>
			<p>Import it with <code>import { `motion` } from 'motion/react'</code>.</p>
			<p>Prepend elements with <code>motion</code> to add animation props to them, like <code>motion.div</code> or <code>motion.h1</code>.</p>
			<p>The three main props (meat & potatoes) are <code>initial</code>, <code>animate</code> & <code>transition</code>.</p>
			<p>Motion provides a .3 second duration time for animations, which can be modified with transition.</p>

			<h2>Text animations</h2>
			<ul className='selection'>
				<li onClick={() => setAnimation(SlideUpFadeIn)}>Slide Up, Fade In</li>
			</ul>
        </section>
    )
}

export default Info
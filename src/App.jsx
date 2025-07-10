import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
gsap.registerPlugin(ScrollTrigger, SplitText)
// splittext break text into multiple lines
// splittext is a plugin that allows you to split text into multiple lines, words, or characters
const App = () => {
  return (
    <main>
        <Navbar />
        <Hero/>
        <Cocktails/>
    </main>
  )
}

export default App
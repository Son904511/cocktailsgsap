import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText)
// splittext break text into multiple lines
// splittext is a plugin that allows you to split text into multiple lines, words, or characters
const App = () => {
  return (
    <div>App</div>
  )
}

export default App
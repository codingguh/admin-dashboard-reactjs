import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard'
import { motion } from "framer-motion"

function App() {
  const [count, setCount] = useState(0)
  const [isEntered, setIsEntered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const variants = {
    hidden: {
      x: 16, // Initial position off-screen


    },
    visible: {
      x: 0, // Sliding into view

    },
    transition: { duration: 2 }
  };


  return (
    <div className={`w-full flex ${isEntered && !isExpanded ? 'relative' : ''}`}>
      {/* Navigation Bar */}
      <div className={`${isEntered && !isExpanded ? 'absolute' : ''}`}>
        <NavigationBar isEntered={isEntered} setIsEntered={setIsEntered} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      </div>

      {/* main component */}
      <motion.main className={'block pl-16'} variants={variants} animate={!isExpanded && isEntered ? 'visible' : 'hidden'} >
        <Dashboard isEntered={isEntered} isExpanded={isExpanded} />
      </motion.main>
    </div >
  )
}

export default App

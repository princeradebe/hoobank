// This code imports the React library, the react logo, the Navbar component, and the App.css file. It also exports the App component, which wraps the Navbar component in a div with a class of max-h-full and bg-dimBlue.

import React from 'react' // Import React library
import reactLogo from './assets/react.svg' // Import react logo
import Navbar from './components/Navbar' // Import Navbar component
import './App.css' // Import App.css file

function App() {
  return (
    <div className="max-h-full bg-dimBlue"> // Wraps Navbar component
      <Navbar />
    </div>
  )
}

export default App

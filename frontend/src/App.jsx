import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Analytics />
    </>
  )
}

export default App

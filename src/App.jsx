import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Marquee from './components/ui/Marquee'
import Collection from './components/Collection/Collection'
import Lookbook from './components/Lookbook/Lookbook'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import CursorGlow from './components/ui/CursorGlow'

export default function App() {
  return (
    <>
      <CursorGlow />
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Marquee />
        <Collection />
        <Lookbook />
        <About />
        <Footer />
      </main>
    </>
  )
}

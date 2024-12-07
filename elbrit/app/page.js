import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import IngredientsSection from './components/IngredientsSection'
import LatestNewsSection from './components/LatestNewsSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <IngredientsSection />
        <LatestNewsSection />
      </main>
      <Footer />
    </div>
  )
}
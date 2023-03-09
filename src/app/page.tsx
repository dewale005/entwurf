"use client";

import Navbar from './component/Navbar/Navbar';
import Landing from './component/Landing/Landing';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
import About from './component/About/About';



export default function Home() {
  return (
    <div className="isolate bg-white">
      <Navbar />
      <main>
        <Landing />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

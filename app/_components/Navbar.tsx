// import React, { useEffect, useState } from "react"
import Image from "next/image"
import darkMenu from "../../public/menu-dark.png"
// import lightMenu from "../../public/menu-light.png"

function Navbar() {
  //   const [isDarkMode, setIsDarkMode] = useState(false)

  //   useEffect(() => {
  //     // Verifica a classe do tema no carregamento inicial
  //     const isDark = document.documentElement.classList.contains("dark")
  //     setIsDarkMode(isDark)
  //   }, [])

  //   const menu = isDarkMode ? darkMenu : lightMenu
  return (
    <nav className="flex justify-between">
      <div>
        <h1 className="text-3xl font-normal">Portifólio</h1>
      </div>
      <div>
        <Image src={darkMenu} alt="Menu" width={32} />
      </div>
      <div className="absolute right-5 top-5 bg-white text-right text-black">
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li>Download CV</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

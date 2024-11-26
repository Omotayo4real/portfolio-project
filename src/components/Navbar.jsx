import { X, Menu } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
        <div className="container mx-auto py-2 flex lg:flex items-center justify-between">
           <div className="text-2xl font-bold">Omotayo</div>
           <ul className="hidden lg:flex space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-gray-400">{item.label}</a>
                </li>
              ))}
            </ul>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden
              lg:inline transfrom transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Connect Me</button>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
            </div>
        </div>
  
        {mobileDrawerOpen && (
          <div className='sticky right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div>
                 <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white
                   md:inline transfrom transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mt-4">Connect Me</button>
            </div>
          </div>
        )}
    </nav>
  )
}

export default Navbar

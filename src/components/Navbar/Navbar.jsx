import React,{useState} from 'react'
import "./Navbar.scss"
import {images} from "../../constants"
import {HiMenuAlt4,HiX} from "react-icons/hi"

import {motion} from "framer-motion"

export const Navbar = () => {


  const [toggle,setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/* <img src={images.logo} alt="logo"/> */}
        <h1>Portfo<span>lio.</span></h1>
      </div>
      <ul className='app__navbar-links'>
        {['home','about','contact','skills'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>
          {
            toggle && (
              <motion.div
                whileInView={{x :[200,0]}}
                transition={{duration:1,ease:'easeOut'}}
              >
                <HiX onClick={() => setToggle(false)}/>
                 <ul> {['home','about','contact','skills'].map((item) => (
                  <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
            ))}</ul>
               
              </motion.div>
            )
          }
      </div>
    </nav>
  )
}

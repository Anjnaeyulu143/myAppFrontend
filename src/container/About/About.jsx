import React, {useState,useEffect} from 'react'
import {motion} from "framer-motion"
import {images} from "../../constants"
import {urlFor,client} from "../../client"
import AppWrap from '../../wrapper/AppWrap'
import "./About.scss"

// const abouts = [
//   {title: 'Web Development',
// description: 'I am a good web developer.',
// imageUrl: images.about01},
// {title: 'Frontend Develoment',
// description: 'I am a frontend developer with a passion for building beautiful and functional websites .',
// imageUrl:images.about03},
// {title: 'Backend Development',
// description: 'Now, I am learning Backend Technologies.',
// imageUrl:images.about04},
// {title: 'MERN Stack',
// description: 'Now, I am learning MERN Stack Technologies.',
// imageUrl:images.about02}
// ]

const About = () => {

  const [abouts,setAbouts] = useState([])

  useEffect( () => {
    const query = '*[_type == "abouts"]';

    // const response = await client.fetch(query)
    // console.log(response.body);

    client.fetch(query)
    .then((data) => {
      setAbouts(data)
    })
  
  },[])


  console.log(abouts)

  return (
    <>
    <h2 className='head-text'> I know That <span>Good Development</span> <br/> means <span> Good Business</span></h2>
      <div className='app__profiles'>
          {
            abouts.map((about,index) => (
              <motion.div
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
              transition={{duration:0.5,type:'tween'}}
              className="app__profile-item"
              key={about.title + index}>
                  <img src={urlFor(about.imgUrl)} alt={about.title}/>
                  <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
                  <p className='p-text' style={{marginTop:10}}>{about.description}</p>
              </motion.div>
            ))
          }
      </div>

      </>
  )
}


export default AppWrap(About,'about')
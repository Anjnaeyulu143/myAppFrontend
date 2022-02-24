import React,{useState,useEffect} from 'react'
import {motion} from "framer-motion"
import GitHubIcon from '@mui/icons-material/GitHub';

import LinearWithValueLabel from './LableBuffer'
import {Divider,Container,Button, Typography} from "@mui/material"
import Appwrap from "../../wrapper/AppWrap"

import {urlFor,client} from "../../client"
import "./Work.scss"



const Work = () => {

  const [activeFilter,setActiveFilter] = useState('All')
  
  const [works,setWorks] = useState([])
  const [filterWork,setFilterWork] = useState([]);
  const [worksSm,setWorksSm] = useState([])
  const [filterWorkSm,setFilterWorkSm] = useState([])


  const handleWorkFilter = (item) => {

  }

   useEffect( () => {
    const query = '*[_type == "works"]';
    const querySmall = '*[_type == "worksSm"]';

    // const response = await client.fetch(query)
    // console.log(response.body);

    client.fetch(query)
    .then((data) => {
      setWorks(data)
      setFilterWork(data)
    })

    client.fetch(querySmall)
    .then((data) => {
      setWorksSm(data)
      setFilterWorkSm(data)
    })

  
  },[])

  console.log(works);
  console.log(worksSm);

  

  return (
    <>
    <h2 className='head-text text-dark'> My Creative <span>Portfolio</span> Section </h2>
    <div className='app__work-filter'>
        {["Static Web", "Responsive Web", "Dynamic Web", "React Js","Redux","SQlite","Scss","React-Bootstrap","Mui"].map((item,index) => (
          <div key = {index}
          onClick={() => handleWorkFilter(item)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active':''}`}>
              {item}
          </div>
        ))}
    </div>

          <div className="mb-4 d-flex justify-content-center align-items-center">
             <Typography className="m-3">
        <a href="https://github.com/Anjnaeyulu143" target="_blank" rel="noreferrer"><Button variant="contained" startIcon={<GitHubIcon/>}>Github</Button></a>
      </Typography>
       <Typography className="m-3">
        <a href="https://learning.ccbp.in/" target="_blank" rel="noreferrer"><Button variant="contained">CCBP 4.0</Button></a>
      </Typography>
          </div>

    <Container >
        <Divider/>
    </Container>
    
    <motion.div
    transition={{duration:0.5,delayChildren:0.5}}
    className="app__work-portfolio">
      <h3 className='head-title' data-aos="fade-down">I enrolled <span>CCBP 4.0 Acadamy</span> Course, this is my progress <span> From last 8 months </span> </h3>
        {
          filterWork.map((work,index) => (
            <motion.div
             whileHover={{scale:[1,0.9]}}
            transition={{duration:1}}>
            <div className='app__work-item app__flex'  key ={index}>
              <div className='app__work-img app__flex' data-aos="fade-down">
                <img src={urlFor(work.imgUrl)} alt={work.name}/>
                <LinearWithValueLabel value={work.progress}/>
              </div>
            </div>
            </motion.div>
            
          ))
        }
    </motion.div>
    <motion.div
    transition={{duration:0.5,delayChildren:0.5}}
    className="app__work-small-portfolio ">
      <h3 className='head-title' data-aos="fade-down">I enrolled <span>CCBP 4.0 Acadamy</span> Course, this is my progress <span> From last 8 months </span> </h3>
        {
          filterWorkSm.map((work,index) => (
            <motion.div 
            whileHover={{scale:[0.9,1]}}
            transition={{duration:1}}>
              <div className='app__work-item app__flex ' key ={index}>
              <div className='app__work-img app__flex' data-aos="fade-down">
                <img src={urlFor(work.imgUrl)} alt={work.name} className="sm-Img"/>
                <LinearWithValueLabel value={work.progress}/>
              </div>
            </div>
            </motion.div>
            
          ))
        }
    </motion.div>
    </>
  )
}

export default Appwrap(Work,'skills');

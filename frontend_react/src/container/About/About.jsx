import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

import { images } from '../../contsants';
import './About.scss';

const abouts = [
  { title: 'Backend Development', description: 'I am a good backend developer.', imgUrl: images.about01 },
  { title: 'Frontend Development', description: 'I am a good frontend developer.', imgUrl: images.about02 },
  { title: 'SRE ', description: 'Working on becoming a sre engineer.', imgUrl: images.about03 }
];

const About = () => {
  return (
    <>
    <h2 className='head-text'>
      I Know that <span>Good Development </span> <br />Means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) =>(
          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
          key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>

          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
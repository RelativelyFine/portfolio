import { useEffect, useState } from 'react'
import {
  faDiscord,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            AI geek. Creative problem solver. Curious Student. 
            With a knowledge-hungry mindset and university-driven club and research experience in the AI and SWE space, 
              I understand the importance of applying and delivering my knowledge to new fields and understanding the technical 
              and qualitative connections between them.
          </p>
          <p align="LEFT">
            My realm: analytical, curious, adaptable, proactive, knowledge-driven, musically inclined (I play piano, saxophone, and flute!)
          </p>
          <p>
            I am fascinated about anything data and AI-related, whether I’m solving important economic or social problems, 
              research and technical exploration, or doing fun and whacky things! 
              I excel in dynamic and fast-paced environments that promote agility, 
                innovation, and a focus on applying data to novel environments.
          </p>
          <p>
            If you’re interested in collaborating or connecting, I'm always down for side projects and hackathons, 
so please reach out to me if you would like to team up! If you know of any opportunity, would like to give advice, 
  or just want to connect and chat, please reach out!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faDiscord} color="#5662f6" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

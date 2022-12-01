import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Popup, Circle } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const fillBlueOptions = { fillColor: 'blue' }
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_bs3jeni',
        'template_8mp8ork',
        form.current,
        'S2nfvu-4865AH_bPF'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone-2">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in internship or project opportunities - especially
            those that promote experience and growth. If you have a request or
            question, or if you go to Queen's U, don't hesitate to contact me
            using the below form!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="map-wrap">
          <div className="info-map">
            David Courtis
            <br />
            <br />
            ~Queen&lsquo;s University
            <br />
            Kingston, ON,
            <br />
            Canada
            <br />
            <br />
            <span>20dhc@queensu.ca</span>
            <br />
            <span>+1 (647) 561-1668</span>
          </div>
          <MapContainer center={[44.23506, -76.51832]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Circle
              center={[44.23506, -76.51832]}
              pathOptions={fillBlueOptions}
              radius={5000}
            >
              <Popup>Close Enough</Popup>
            </Circle>
          </MapContainer>
        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Contact

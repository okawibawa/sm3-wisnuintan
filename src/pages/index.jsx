import * as React from "react"
import sal from "sal.js"
import Modal from "react-modal"
import ReactPlayer from "react-player"
import ModalImage from "react-modal-image"
import "./index.css"
import "../../node_modules/sal.js/dist/sal.css"

import audio from "../mp3/soundtrack.mp3"

import Layout from "../components/layout"
import { Helmet } from "react-helmet"

// Images
import whatsapp from "../images/whatsapp.svg"
import instagram from "../images/instagram.svg"
import weddingCouple from "../images/wedding-couple.svg"
import calendar from "../images/calendar.svg"
import person from "../images/person.svg"
import gate from "../images/gate.svg"
import volume from "../images/volume.svg"
import mute from "../images/muted.svg"
import covid from "../images/cov.png"

// 1 2 3 4 7 10 11 12 13 14 16 18
import imgOne from "../images/1.jpg"
import imgTwo from "../images/2.jpg"
import imgThree from "../images/3.jpg"
import imgFour from "../images/4.jpg"
import imgFive from "../images/5.jpg"
import imgSix from "../images/6.jpg"
import imgSeven from "../images/7.jpg"
import imgEight from "../images/8.jpg"
import imgNine from "../images/9.jpg"
import imgTen from "../images/10.jpg"

const IMAGES = [
  imgTen,
  imgNine,
  imgSeven,
  imgFive,
  imgSix,
  imgOne,
  imgFour,
  imgTwo,
  imgThree,
  imgEight,
]

const IndexPage = () => {
  const [isShow, setIsShow] = React.useState(true)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false)

  const [name, setName] = React.useState("")
  const [hour, setHour] = React.useState("11")
  const [minutes, setMinutes] = React.useState("00")
  const [hourEnd, setHourEnd] = React.useState("12")
  const [minutesEnd, setMinutesEnd] = React.useState("00")

  const [secondOne, setSecondOne] = React.useState(0)
  const [minuteOne, setMinuteOne] = React.useState(0)
  const [hourOne, setHourOne] = React.useState(0)
  const [dayOne, setDayOne] = React.useState(0)

  const [secondTwo, setSecondTwo] = React.useState(0)
  const [minuteTwo, setMinuteTwo] = React.useState(0)
  const [hourTwo, setHourTwo] = React.useState(0)
  const [dayTwo, setDayTwo] = React.useState(0)

  sal()

  // Nama Tamu
  React.useEffect(() => {
    const pathName =
      typeof window !== "undefined" ? window.location.pathname : ""

    const pathNameSplit = pathName.split("/")
    console.log(pathNameSplit)
    const name =
      pathNameSplit[1] !== undefined
        ? pathNameSplit[1].replace("%20", " ")
        : undefined

    if (pathNameSplit[2].length > 0) {
      const newTime = pathNameSplit[2].split("-")

      setHour(newTime[0].slice(0, 2))
      setMinutes(newTime[0].slice(2))
      setHourEnd(newTime[1].slice(0, 2))
      setMinutesEnd(newTime[1].slice(2))
    }

    let str = ""

    if (name) {
      str = name.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())
    }

    setName(str)
  }, [])

  //   // Count time 1

  //   let countDownDate = new Date(
  //     `June 16, 2021 ${hour}:${minutes}:00`
  //   ).getTime()

  //   const updateCountDownDate = setInterval(function () {
  //     let newDate = new Date().getTime()

  //     let distance = countDownDate - newDate

  //     var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  //     var hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     )
  //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  //     var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  //     if (distance < 0) {
  //       return
  //     } else {
  //       setDayOne(days)
  //       setHourOne(hours)
  //       setMinuteOne(minutes)
  //       setSecondOne(seconds)
  //     }
  //   })

  // Count time 2

  let countDownDate2 = new Date(
    `April 18, 2022 ${hour}:${minutes}:00`
  ).getTime()

  const updateCountDownDate2 = setInterval(function () {
    let newDate2 = new Date().getTime()

    let distance2 = countDownDate2 - newDate2

    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24))
    var hours2 = Math.floor(
      (distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60))
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000)

    if (distance2 < 0) {
      return
    } else {
      setDayTwo(days2)
      setHourTwo(hours2)
      setMinuteTwo(minutes2)
      setSecondTwo(seconds2)
    }
  }, 1000)

  const handleCloseModal = () => {
    setIsShow(false)
    setIsPlaying(true)
    // sound.play()
    // setIsPlaying(true)
  }

  const playAudio = () => {
    setIsPlaying(!isPlaying)
    setIsVideoPlaying(false)
  }

  const handlePlayVideo = () => {
    if (isPlaying) {
      setIsPlaying(false)
      setIsVideoPlaying(true)
    }
  }

  const shoDisplay = isShow ? 0 : 1

  return (
    <Layout>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Pernikahan Wisnu & Intan | Segera Menikah</title>
        <meta
          name="title"
          content="Pernikahan Wisnu & Intan | Segera Menikah"
        />
        <meta
          name="description"
          content="Pernikahan Wisnu & Intan, 17 Desember 2021."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wisnu.intan.segeramenikah.com"
        />
        <meta
          property="og:title"
          content="Pernikahan Wisnu & Intan | Segera Menikah"
        />
        <meta
          property="og:description"
          content="Pernikahan Wisnu & Intan, 17 Desember 2021."
        />
        <meta property="og:image" content={imgOne} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://wisnu.intan.segeramenikah.com"
        />
        <meta
          property="twitter:title"
          content="Pernikahan Wisnu & Intan | Segera Menikah"
        />
        <meta
          property="twitter:description"
          content="Pernikahan Wisnu & Intan, 17 Desember 2021."
        />
        <meta property="twitter:image" content={imgOne} />
      </Helmet>

      <Modal
        isOpen={isShow}
        contentLabel="Minimal Modal Example"
        htmlOpenClassName="modal-open"
        className="modal"
        overlayClassName="modal-overlay open close"
        closeTimeoutMS={1000}
      >
        <div className="main">
          <div className="modal-container gradient">
            <div className="modal-titles">
              <h1 className="modal-title shadow">Pernikahan</h1>
              <h2 className="modal-names shadow">Wisnu & Intan</h2>

              {/* <div style={{ marginTop: "40px" }}>
                <h1 className="modal-title shadow">Mepandes</h1>
                <h2 className="modal-names shadow">
                  Ni Komang Indah Noviyanti
                </h2>
              </div> */}
            </div>

            <div className="modal-details">
              <div className="modal-card date">
                <div className="modal-icon">
                  <img src={calendar} alt="Calendar" />
                </div>
                <div className="modal-info">
                  <p>Senin,</p>
                  <b>18/04/2022</b>
                </div>
              </div>

              {name && (
                <div className="modal-card person">
                  <div className="modal-icon">
                    <img src={person} alt="Person" />
                  </div>
                  <div className="modal-info">
                    <p>Kepada Yth.</p>
                    <b>{name}</b>
                  </div>
                </div>
              )}

              <div className="modal-cta-container">
                <button
                  id="btnCta"
                  className="modal-btn-invite"
                  onClick={() => handleCloseModal()}
                >
                  Open Invitation
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <main style={{ opacity: shoDisplay }}>
        <ReactPlayer
          style={{ display: "none" }}
          playing={isPlaying}
          loop={true}
          // url="https://soundcloud.com/carlomedinaii/angels-brought-me-here"
          url={audio}
        />

        <div
          className="volume-ic-container"
          id="audio-container"
          onClick={playAudio}
        >
          <img src={isPlaying ? volume : mute} alt="Volume" />
        </div>

        {/* First Section */}
        <section id="main-section">
          <div className="main-gradient">
            <div className="titles">
              <h1
                className="main-title shadow"
                data-sal="slide-up"
                data-sal-duration="1250"
                data-sal-easing="ease"
              >
                Pernikahan
              </h1>
              <h2
                className="names shadow"
                data-sal="slide-up"
                data-sal-duration="1250"
                data-sal-easing="ease"
              >
                Wisnu & Intan
              </h2>
            </div>
          </div>
        </section>

        {/* Veda */}
        <div className="sm-card veda">
          <p
            data-sal="slide-up"
            data-sal-duration="1250"
            data-sal-easing="ease"
          >
            "Ya Tuhanku Yang Maha Pengasih, anugrahkanlah kepada pasangan ini
            senantiasa kebahagiaan, kesehatan, tetap bersatu dan tidak pernah
            terpisahkan, panjang umur dan tinggal di rumah yang penuh
            kegembiraan bersama seluruh keturunannya."
          </p>

          <div className="arts">
            <h6
              data-sal="slide-up"
              data-sal-duration="1250"
              data-sal-easing="ease"
            >
              Rg. Veda X.85.42.
            </h6>
          </div>
        </div>

        {/* Second Section */}
        <section id="second-section">
          <div
            className="second-container"
            data-sal="slide-up"
            data-sal-duration="1250"
            data-sal-easing="ease"
          >
            <h1 className="ss-main-title">Sang Mempelai</h1>

            <div className="cards-container">
              <div
                className="card"
                data-sal="slide-up"
                data-sal-duration="1250"
                data-sal-easing="ease"
              >
                <h1>Kadek Wisnu Bhuana</h1>
                <p>
                  Putra kedua dari pasangan<br></br> Ketut T. Prawira & Ni Putu
                  Ariartini
                </p>
                <p>
                  Bintara Jaya Permai Blok C 121, RT 007 / RW 011, Bintara Jaya,
                  Bekasi Barat 17136
                </p>
              </div>

              <div
                className="card"
                data-sal="slide-up"
                data-sal-duration="1250"
                data-sal-easing="ease"
              >
                <h1>I Gusti Ayu Intan Fridayanti</h1>
                <p>
                  Putri ketiga dari pasangan<br></br> I Gusti Ngurah Alit & I
                  Gusti Ayu Ngurah
                </p>
                <p>Taman Kebalen Indah Blok J1 no. 49</p>
              </div>
            </div>
          </div>
        </section>

        {/* Opening Swastiastu */}
        {/* <div className="sm-card opening">
            <div
              className="title"
              data-sal="slide-up"
              data-sal-duration="1250"
              data-sal-easing="ease"
            >
              <h6>Om Swastiastu</h6>
            </div>

            <p
              data-sal="slide-up"
              data-sal-duration="1250"
              data-sal-easing="ease"
            >
              Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
              Maha Esa, kami bermaksud mengundang Bapak/Ibu/Saudara/i, pada
              Acara Akad Nikah dan Resepsi putra & putri kami, yang akan
              dilaksanakan pada :
            </p>
          </div> */}

        {/* Third Section */}
        {/* <section id="third-section">
            <div className="third-container">
              <div
                className="th-title"
                data-sal="slide-up"
                data-sal-duration="1250"
                data-sal-easing="ease"
              >
                <h1>
                  Akad <br />
                  Nikah
                </h1>
                <img src={weddingCouple} alt="Wedding Couple" />
              </div>

              <div
                className="details"
                data-sal="slide-up"
                data-sal-duration="1250"
                data-sal-easing="ease"
              >
                <div className="card-container">
                  <div className="card-ts date">
                    <div className="icon">
                      <img src={calendar} alt="Calendar" />
                    </div>
                    <div className="info">
                      <p>Senin,</p>
                      <b className="info-date">27/5/2021</b>
                    </div>
                  </div>
                </div>

                <div className="card-container">
                  <div className="card-ts time">
                    <div className="icon">
                      <img src={person} alt="Person" />
                    </div>
                    <div className="info">
                      <p>11.00 WITA</p>
                      <b>s/d selesai</b>
                    </div>
                  </div>
                </div>

                <div className="card-container">
                  <a
                    href="https://goo.gl/maps/QYdsjM2eCdYZeoTt9"
                    className="wrapper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-ts location">
                      <div className="icon">
                        <img src={calendar} alt="Calendar" />
                      </div>
                      <div className="info">
                        <b>Alamat Acara</b>
                        <p>Jalan Sandat No.6 Biaung, Kesiman, Kertelangu</p>
                      </div>
                    </div>
                    <p className="view-location">VIEW LOCATION</p>
                  </a>
                </div>

                <div className="card-container">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NDRwM2trdjZ1M3B1bnBuN2U1dGFqZnMxZWsgc2VnZXJhbWVuaWthaDRAbQ&tmsrc=segeramenikah4%40gmail.com"
                    className="wrapper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card-ts save-date">
                      <div className="info">
                        <b>Disimpan ya!</b>
                        <p className="infoSmDesc">Klik untuk menyimpan acara</p>
                      </div>

                      <div className="detail-times">
                        <div>
                          <p id="days">{dayOne}</p>
                          <p>Hari</p>
                        </div>

                        <div>
                          <p id="hours">{hourOne}</p>
                          <p>Jam</p>
                        </div>

                        <div>
                          <p id="minutes">{minuteOne}</p>
                          <p>Menit</p>
                        </div>

                        <div>
                          <p id="seconds">{secondOne}</p>
                          <p>Detik</p>
                        </div>
                      </div>
                    </div>
                    <p className="save-the-date">SAVE THE DATE</p>
                  </a>
                </div>
              </div>
            </div>
          </section> */}

        {/* Fourth Section */}
        <section id="fourth-section">
          {/* <div className="title-gradient"></div> */}
          <div className="fourth-container">
            <div
              className="th-title"
              data-sal="slide-up"
              data-sal-duration="1250"
              data-sal-easing="ease"
            >
              {/* <h1 style={{ zIndex: 9999 }}>Resepsi</h1> */}
              <img src={gate} alt="Wedding Gate" style={{ zIndex: 9999 }} />
            </div>

            <div
              className="details"
              data-sal="slide-up"
              data-sal-duration="1250"
              data-sal-easing="ease"
            >
              <div className="card-container">
                <div className="card-ts date">
                  <div className="icon">
                    <img src={calendar} alt="Calendar" />
                  </div>
                  <div className="info">
                    <p>Senin,</p>
                    <b className="info-date">18/04/2022</b>
                  </div>
                </div>
              </div>

              <div className="card-container">
                <div className="card-ts time">
                  <div className="icon">
                    <img src={person} alt="Person" />
                  </div>
                  <div className="info">
                    <p>
                      {hour}.{minutes} WITA
                    </p>
                    <b>
                      s/d {hourEnd}.{minutesEnd}
                    </b>
                  </div>
                </div>
              </div>

              <div className="card-container">
                <a
                  href="https://goo.gl/maps/V6wVTcBQs9vbm7a98"
                  className="wrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-ts location">
                    <div className="icon">
                      <img src={calendar} alt="Calendar" />
                    </div>
                    <div className="info">
                      <b style={{ marginBottom: "6px" }}>Alamat Acara</b>
                      <p>
                        Bintara Jaya Permai Blok C 121 RT 007/ RW 011, Bintara
                        Jaya, Bekasi Barat 17136
                      </p>
                    </div>
                  </div>
                  <p className="view-location">VIEW LOCATION</p>
                </a>
              </div>

              <div className="card-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MXBxbmZlY2E1N2NmZXU5YjY5Z3UxZ24wbGogc2VnZXJhbWVuaWthaDRAbQ&tmsrc=segeramenikah4%40gmail.com"
                  className="wrapper"
                >
                  <div className="card-ts save-date">
                    <div className="info">
                      <b style={{ marginBottom: "6px" }}>Disimpan ya!</b>
                      <p className="infoSmDesc">Klik untuk menyimpan acara</p>
                    </div>

                    <div className="detail-times">
                      <div>
                        <p id="days2">{dayTwo}</p>
                        <p>Hari</p>
                      </div>

                      <div>
                        <p id="hours2">{hourTwo}</p>
                        <p>Jam</p>
                      </div>

                      <div>
                        <p id="minutes2">{minuteTwo}</p>
                        <p>Menit</p>
                      </div>

                      <div>
                        <p id="seconds2">{secondTwo}</p>
                        <p>Detik</p>
                      </div>
                    </div>
                  </div>
                  <p className="save-the-date">SAVE THE DATE</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Santhi */}
        <div className="sm-card closing">
          <div className="arts-container">
            <p
              data-sal="slide-up"
              data-sal-duration="1250"
              data-sal-easing="ease"
            >
              Kami memohon maaf dan permaklumannya karena upacara ini hanya
              dihadiri oleh keluarga dan kerabat dekat sehubungan dengan adanya
              pandemi COVID-19 yang tidak memungkin mengadakan kegiatan yang
              mengumpulkan orang banyak. Suatu kebahagian bagi kami apabila
              Bapak/ Ibu/Saudara/i berkenan memberikan doa restu untuk kami.
              <br />
              <br />
              Atas doa restunya, kami ucapkan terimakasih.
            </p>

            <div
              className="title"
              data-sal="slide-up"
              data-sal-duration="1250"
              data-sal-easing="ease"
            >
              <h6>Om Shanti Shanti Shanti Om</h6>
              <br />
              <div style={{ width: "100%" }}>
                <img className="covid" src={covid} alt="Covid" />
              </div>
            </div>
          </div>
        </div>

        {/* Images Gallery */}
        <div className="gallery-container">
          {IMAGES.map((img, index) => (
            <div
              key={index}
              data-sal="slide-up"
              data-sal-duration="900"
              className="img-container"
            >
              <ModalImage small={img} large={img} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Video */}
        {/* <div id="video-container" className="video-wrapper">
            <ReactPlayer
              playing={isVideoPlaying}
              onPlay={() => handlePlayVideo()}
              url="https://www.youtube.com/embed/RuBs1fyj4wo"
            />
          </div> */}

        {/* Footer */}
        <div className="sm-card footer">
          <div className="footer-text">
            <p>Terima Kasih</p>
            <h6>Wisnu & Intan</h6>
          </div>

          <div className="credits">
            <div className="cr-text">
              <a
                href="https://segeramenikah.com/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#9400; Copyright | Segera Menikah
              </a>
            </div>

            <div className="contacts">
              <a href="https://wa.me/626285157722353?text=Halo%20Segera%20Menikah.">
                <img src={whatsapp} alt="Whatsapp" />
              </a>

              <a href="https://www.instagram.com/segera_menikah/">
                <img src={instagram} alt="Instagram" />
              </a>

              <a className="ic-last" href="#">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../../components/layout'
import"../../components/page.module.css"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  contentLinkText,
  navstyle,
  allpage,
  relaxfont,
  handwrite,
  centerbox
} from '../../components/page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Akademik">
      <h2 className={relaxfont}>Download Kalender Akademik 2021-2022</h2>
        <Link to="https://drive.google.com/uc?export=download&id=1q8cmQsuYzfXl7BeWPXxt23zG3l0wOsta">
          <div className="textbluebox">
            Download Kalender
          </div>
        </Link>
      <div className={centerbox}>
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/kalender_Page_1.jpg"
      />
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/kalender_Page_2.jpg"
      />
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/kalender_Page_3.jpg"
      />
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/kalender_Page_4.jpg"
      />
      <StaticImage
        alt="Daftar"
        src="../../images/akademik/kalender_Page_5.jpg"
      />
      
      </div>
    </Layout>
  )
}

export default IndexPage
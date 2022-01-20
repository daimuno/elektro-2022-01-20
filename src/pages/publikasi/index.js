import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import "./color.css"
import {
  grid3col,
  contentLinkText,
  navstyle,
  allpage,
  relaxfont,
  handwrite,
  textaboveimage,
} from '../../components/page.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Publikasi">
      <div className={grid3col}>
        
        <div>
          <Link to="./pendaftaran">
            <StaticImage
              alt="Daftar"
              src="../../images/admisi/daftar.png"
            />
          </Link>
          <div className="c1">International Journal (SCI)</div>
        
        </div>

        <div>
          <Link to="./beasiswa">
            <StaticImage
              alt="Beasiswa"
              src="../../images/admisi/beasiswa.png"
            />
          </Link>
          <div className="c2">Book</div>
        
        </div>

        <div>
          <Link to="../contact-us">
            <StaticImage
              alt="Beasiswa"
              src="../../images/admisi/kontak.png"
            />
          </Link>
          <div className="c3">Patent</div>
        
        </div>

      </div>

    </Layout>
  )
}

export default IndexPage
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
    <Layout pageTitle="Penerimaan Mahasiswa Baru Program Sarjana (S-1)">
        <h2 className={relaxfont}>Beasiswa Calon Mahasiswa</h2>
        
        <Tabs>
          <TabList>
            <Tab>Beasiswa Prestasi Program Studi</Tab>
            <Tab>Beasiswa Keuskupan</Tab>
            <Tab>Beasiswa Bidik Misi</Tab>
            <Tab>Beasiswa Lustrum XII</Tab>
          </TabList>

          <TabPanel>
            <h2>Beasiswa Prestasi Program Studi</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
    </Layout>
  )
}

export default IndexPage
import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import"../../components/page.module.css"
const IndexPage = () => {
  return (
    <Layout pageTitle="Penerimaan Mahasiswa Baru Program Sarjana (S-1)">
        <div className="homeinfo">
        <Tabs>
          <TabList>
            <Tab>Syarat Pendaftaran</Tab>
            <Tab>Biaya Kuliah</Tab>
            <Tab>Alur Pendaftaran</Tab>
          </TabList>

          <TabPanel>
            <h2>Syarat Pendaftaran</h2>
            
                <ol>
                  <li>Warga Negara Indonesia atau Warga Negara Asing yang memperoleh ijin belajar dari
                    Kementerian Pendidikan dan Kebudayaan Republik Indonesia.</li>
                  <li>Siswa kelas 12 atau sudah lulus SMA/SMK</li>
                  <li>Bebas narkoba, bebas psikotropika, serta sehat jasmani dan rohani</li>
                  <li>Pendaftaran yang telah dilakukan tidak dapat dipindah tangankan kepada orang lain</li>
                  <li>Penerimaan mahasiswa ditetapkan atas dasar:</li>
                </ol>

                <h2>Penerimaan mahasiswa ditetapkan atas dasar:</h2>
                <ol>
                  <li>Kelengkapan semua persyaratan administrasi;</li>
                  <li>Pemenuhan semua persyaratan akademik;</li>
                  <li>Pemenuhan semua persyaratan lainnya sesuai karakteristik Fakultas/Jurusan/Program Studi</li>
                  <li>Jumlah tempat yang tersedia pada pilihan Fakultas/Jurusan/Program Studi​</li>
                </ol>

                <h2>Kelengkapan administrasi:</h2>
                <ol>
                  <li>Formulir pendaftaran</li>
                  <li>Rapor kelas X dan XI</li>
                  <li>Sertifikat prestasi (jika ada)</li>
                </ol>
            
          </TabPanel>
          <TabPanel>
            <h2>Tahun Akademik 2021-2022</h2>
          </TabPanel>
          <TabPanel>
          <div className="center">
            <StaticImage
                alt="Daftar"
                src="../../images/admisi/alur pendaftaran.png"
              />
              <br></br>
              <Link to="https://drive.google.com/uc?export=download&id=1f-KIK918A7AYgAi6E0kKJo2cc9THl1yT">
              <div className="textbluebox">
                Download Formulir
              </div>
            </Link>
          </div>
            
          </TabPanel>
        </Tabs>
        </div>
    </Layout>
  )
}

export default IndexPage
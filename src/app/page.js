import Clients from '@/components/Clients'
import Experience from '@/components/Experiences'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Quote from '@/components/Quote'
import Services from '@/components/Services'
import Team from '@/components/Team'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <Main/>
    <Services/>
    <Experience/>
    <Quote/>
    <Team/>
    <Clients/>
    <Footer />
    </>
  )
}

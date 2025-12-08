import MainNavigation from '../../layout/MainNavigation.js'
import Footer from '../../layout/Footer.js'
import Slider from './Slider.js'
import ContactForm from './ContactForm.js'
import Process from './Process.js'
import CandidateSection from './CandidateSection.js'
import CardSection from './card/CardSection.js'
import InfoBar from '../../layout/InforBar.js'

function Home() {
    return (
        <div className=" h-screen w-screen overflow-x-hidden">
            <InfoBar/>
            <MainNavigation />            
            <CandidateSection />
            <Slider />
            <Process />            
            {/* <CardSection /> */}
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home
import MainNavigation from '../../layout/MainNavigation.js'
import Footer from '../../layout/Footer.js'
import Slider from './Slider.js'
import ContactForm from './ContactForm.js'
import Process from './Process.js'
import FeatureSection from './FeatureSection.js'
import InfoBar from '../../layout/InforBar.js'

function Home() {
    return (
        <div className=" h-screen w-screen overflow-x-hidden">            
            <MainNavigation />
            <FeatureSection />
            <Slider />
            <Process />
            {/* <CardSection /> */}
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home
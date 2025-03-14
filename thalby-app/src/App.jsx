import Header from './components/header/Header';
import MainBanner from './components/main-banner/MainBanner';
import Cards from './components/cards/Cards';
import Description from './components/description/Description';
import DescriptionReverse from './components/description-reverse/DescriptionReverse';
import Circles from './components/circles/Circles';
import Portrets from './components/portrets/Portrets';
import Registration from './components/registration/Registration';
import Footer from './components/footer/Footer';
import './App.css'
import './media.css'


function App() {
 

  return (
    <>
    <Header/>

    <main>
        <MainBanner/>
        <Cards/>
        <Description/>
        <DescriptionReverse/>
        <Description/>
        <Circles/>
        <Portrets/>
        <Registration/>
    </main>

    <Footer/>
      
    </>
  )
}

export default App ;

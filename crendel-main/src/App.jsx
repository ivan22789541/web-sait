import './App.css'
import Footer from './Footer/Footer'
import Header from './Header/Header.jsx'
import Map from './Map/Map.jsx'
import Slider from './Slider/Slider.jsx'
import Container from './container/Container.jsx'

function App() {

  return (
    <>
      <Header />
      <Slider />
      <div className="container">
        <Container />
      </div>
      <Map />
      <Footer />
    </>
  )
}

export default App

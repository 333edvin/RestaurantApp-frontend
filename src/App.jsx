import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllRest from './Components/AllRest';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewRest from './Components/ViewRest';
import { Image } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      
      <header className="fixed-top">
        <Header />
      </header>

      <section id='banner'>
        <Image  className='mt-5 banner-img' src='https://www.orchardtaunton.co.uk/app/uploads/2021/04/OSC-Spring-Welcome-Back-Website-Banner-Food-Drink-01.jpg'/>

      </section>

      <section className='mt-5'>

        <Routes>
          <Route path='/' element={<AllRest/>}/>
          <Route path='/view/:id' element={<ViewRest/>}/>
        </Routes>

      </section>

      <footer>
        <Footer/>
      </footer>
    
    </div>
  );
}

export default App;

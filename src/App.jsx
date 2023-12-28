import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllRest from './Components/AllRest';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewRest from './Components/ViewRest';
function App() {
  return (
    <div className="App">
      
      <header className="fixed-top">
        <Header />
      </header>

      

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

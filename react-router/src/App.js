
import './App.css';

import { BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import Package from './components/Package';


function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  


  return (
    <div className="App">
      <Router>   
        <header>     
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          <div className="navBar">
            <ul>
              <li>
                  <Link to="/"><button>Home</button></Link>     
              </li>
               <li>
               <Link to="/about"><button>About</button></Link>
              </li>
               <li>
               <Link to="/packages"><button>Packages</button></Link>
               </li>
            </ul>
          </div>
          <main>
            <Routes >
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/packages' element={<Packages packages={packages}/>}></Route>
              <Route path='/packages/:id' element={<Package packages={packages}/>}></Route>
            </Routes>
          </main>
          </header>
      </Router>
    </div>
  );
}

export default App;






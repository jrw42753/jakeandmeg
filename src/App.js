import logo from './logo.svg';
import './App.scss';
import Navigation from './components/layout/Navigation'
import Title from './components/title/Title';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WeddingParty from './components/pages/wedding-party/WeddingParty';
import Home from './components/pages/Home';
import Accommodations from './components/pages/accommodations/Accommodations';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      <div className="main-header">
        <Title />
        <Navigation />
      </div>
      <div className="main-body">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/wedding-party' element={<WeddingParty/>}/>
          <Route path='/accommodations' element={<Accommodations/>}/>
        </Routes>
      </div>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

import './App.scss';
import Navigation from './components/layout/Navigation'
import Title from './components/title/Title';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WeddingParty from './components/pages/wedding-party/WeddingParty';
import Home from './components/pages/Home';
import Accommodations from './components/pages/accommodations/Accommodations';
import Photos from './components/pages/photos/Photos';
import Footer from './components/layout/Footer';
import Registry from './components/pages/registry/Registry';
import OmahaFavorites from './components/pages/omaha-favorites/OmahaFavorites';

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
          <Route path='/photos' element={<Photos/>}/>
          <Route path='/registry' element={<Registry/>}/>
          <Route path='/our-omaha-favorites' element={<OmahaFavorites/>}/>
        </Routes>
      </div>
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

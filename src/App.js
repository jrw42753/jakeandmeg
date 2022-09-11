import logo from './logo.svg';
import './App.scss';
import Navigation from './components/layout/Navigation'
import Title from './components/title/Title';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WeddingParty from './components/pages/wedding-party/WeddingParty';
import Home from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/wedding-party' element={<WeddingParty/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

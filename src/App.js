import logo from './logo.svg';
import './App.scss';
import Navigation from './components/layout/Navigation'
import Title from './components/title/Title';
import HeaderImage from './components/header-image/HeaderImage';
import OurStory from './components/pages/our-story/OurStory';

function App() {
  return (
    <div className="App">
      <Title />
      <Navigation />
      <HeaderImage />
      <OurStory />
    </div>
  );
}

export default App;

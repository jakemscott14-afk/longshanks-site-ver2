import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { AtAGlance } from './components/AtAGlance';
import { Overview } from './components/Overview';
import { CustomMod } from './components/CustomMod';
import { Gallery } from './components/Gallery';
import { Highlights } from './components/Highlights';
import { Specs } from './components/Specs';
import { Survey } from './components/Survey';
import { Broker } from './components/Broker';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AtAGlance />
      <Overview />
      <CustomMod />
      <Gallery />
      <Highlights />
      <Specs />
      <Survey />
      <Broker />
      <Footer />
      <FloatingContact />
    </>
  );
}

export default App;

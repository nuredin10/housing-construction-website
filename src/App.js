import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Service from './components/Service/Service';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner ></Banner>
        <About ></About>
        <Service></Service>
        <Testimonials></Testimonials>

    </div>
  );
}

export default App;

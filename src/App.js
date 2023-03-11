import './App.css';
import  Card from './Components/Card';
import luxury from './images/icon-luxury.svg'
import sedans from './images/icon-sedans.svg'
import suvs from './images/icon-suvs.svg'

function App() {
  return (
    <div className='App'>
      <Card
        fondo='#e28525'
        img={sedans}
        title='Sedans'
        paragraph='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
      />
      <Card
        fondo='#016972'
        img={suvs}
        title='Suvs'
        paragraph='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
      />
      <Card
        fondo='#00403f'
        img={luxury}
        title='Luxury'
        paragraph='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
      />
    </div>
  );
}

export default App;

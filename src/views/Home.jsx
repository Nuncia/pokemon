import pokemon from '../assets/580b57fcd9996e24bc43c325.png';

const Home = () => {
   return (
      <div className="home">
         <h1 style={{ textAlign: 'center' }}>Bienvenido maestro Pokemón</h1>
         <div className="pikachu">
            <img style={{ width: '25%', height: '63%' }} src={pokemon} alt="" />
         </div>
      </div>
   );
};

export default Home;

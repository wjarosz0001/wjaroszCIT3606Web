import logo from './logo.svg';
import './App.css';

function PokemonCard(props) {
  return (
    <div>
      <br/>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} width="150" />
      <p>{props.type}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>My Pokedex</h1>

      <PokemonCard name="Pikachu" image="/images/Pika.jpg" type="Electric" />
      <PokemonCard name="Charmander" image="./images/Char.png" type="Fire" />
      <PokemonCard name="Bulbasaur" image="./images/bulb.jpg" type="Grass/Poison" />
      <PokemonCard name="Squirtle" image="./images/squirtle.jpg" type="Water" />
    </>
  );
}

export default App;

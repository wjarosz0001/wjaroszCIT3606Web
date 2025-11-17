// Import React hooks and styles
import { useState, useEffect } from "react";
import "./App.css";

// ==============================
// Reusable component for a Pokemon Card
// Displays name, image, and type
// ==============================
function PokemonCard(props) {
  return (
    <div className="card">
      <br />
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} width="150" />
      <p>{props.type}</p>
    </div>
  );
}

// ==============================
// Search component
// Lets user type a Pokemon name, click Search,
// and fetch data from the PokeAPI
// ==============================
function Search() {
  // --- useState hooks for changing data ---
  const [name, setName] = useState("pikachu"); // default Pokemon
  const [type, setType] = useState("");         // will be set after fetch
  const [image, setImage] = useState("");       // will be set after fetch

  // --- Function to fetch data from the PokeAPI ---
  const fetchPokemon = async () => {
    try {
      // Fetch info for the current name
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );

      // Handle error if name is not found
      if (!response.ok) throw new Error("Pokemon not found");

      // Convert response to JSON
      const data = await response.json();

      // Update state with info from the API
      setType(data.types[0].type.name);
      setImage(data.sprites.front_default);
    } catch (error) {
      // Log and reset if something goes wrong
      console.error("Error:", error);
      setType("Not found");
      setImage("");
    }
  };

  // --- useEffect runs once when component first loads ---
  useEffect(() => {
    fetchPokemon();
  }, []); // empty array = run only once on load

  // --- Handlers for user input and button click ---
  const handleChange = (event) => setName(event.target.value);
  const handleClick = () => fetchPokemon();

  // --- Return search box, button, and card with results ---
  return (
    <div>
      <input value={name} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>

      <PokemonCard name={name} image={image} type={type} />
    </div>
  );
}

// ==============================
// App component
// Displays the main page header and Search component
// ==============================
function App() {
  return (
    <>
      <h1>My Pokedex</h1>
      <Search />
    </>
  );
}

// Export App so React can render it
export default App;

import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

function Pokedex() {
  const [language, setLanguage] = useState("english");
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://us-central1-it-sysarch32.cloudfunctions.net/pagination?page=${currentPage}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPokemons(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]); // Fetch data whenever currentPage changes

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pokedex">
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange("english")}>English</button>
        <button onClick={() => handleLanguageChange("japanese")}>Japanese</button>
        <button onClick={() => handleLanguageChange("chinese")}>Chinese</button>
        <button onClick={() => handleLanguageChange("french")}>French</button>
      </div>
      <PokemonList pokemonList={pokemons} language={language} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

const PokemonList = ({ pokemonList, language }) => {
  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name[language]}
          type={pokemon.type}
          base={pokemon.base}
          image={pokemon.image}
        />
      ))}
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Back</button>
      {pageNumbers.map((page) => (
        <button key={page} onClick={() => onPageChange(page)} disabled={currentPage === page}>{page}</button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pokedex;

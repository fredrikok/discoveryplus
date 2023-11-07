import React, { useEffect, useState } from "react";

function Carousel() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "991fe204"; // Your OMDB API key

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Update loading state
        setLoading(true);
        // Make an API call to fetch movies
        // This URL is just an example and will need to be adjusted based on what data you're looking for
        const response = await fetch(
          `http://www.omdbapi.com/?s=Batman&apikey=${apiKey}`
        );
        const data = await response.json();

        if (data.Response === "True") {
          // Update movies state
          setMovies(data.Search);
        } else {
          // Update error state
          setError(data.Error);
        }
      } catch (error) {
        // If there's an error during fetch, we catch it here and set the error state
        setError(error.message);
      } finally {
        // Update loading state
        setLoading(false);
      }
    };

    // Call the function
    fetchData();
  }, [apiKey]); // Dependency array with apiKey to avoid re-fetching data unnecessarily

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="mainhome">
      <h2>Populært nå</h2>
      <section className="carousel">
        {movies.map((item) => (
          <div key={item.imdbID} className="carouselItem">
            <picture>
              <img className="carouselimg" alt={item.Title} src={item.Poster} />
            </picture>
            <div className="hoverBox">
              <h3>{item.Title}</h3>
            </div>
          </div>
        ))}
      </section>
      <section className="carousel">
        {movies.map((item) => (
          <div key={item.imdbID} className="carouselItem">
            <picture>
              <img className="carouselimg" alt={item.Title} src={item.Poster} />
            </picture>
            <div className="hoverBox">
              <h3>{item.Title}</h3>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Carousel;

import MoviesScore from "../MoviesScore";

function MoviesCard() {
  const movies = {
    id: 1,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/e3d8f1ffb258bcd5f56a8e2b84b1c51544ce7c38fa8af526d3463fdcbf3afb26.jpg",
    title: "Resident Evil - Vendetta",
    count: 2,
    score: 3.5,
  };

  return (
    <div>
      <img
        className="movies-card-image"
        src={movies.image}
        alt={movies.title}
      />
      <div className="movies-card-bottom-container">
        <h3>{movies.title}</h3>
        <MoviesScore />
        <div className="btn movies-btn">
            Avaliar
        </div>
      </div>
    </div>

    
  );
}

export default MoviesCard;

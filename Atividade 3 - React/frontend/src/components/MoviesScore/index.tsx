import MoviesStars from "../MoviesStars";
import './style.css';

function MoviesScore() {

  const score = 3.5;
  const count = 15;

  return (
    <div className="movies-score-container">
      <p className="movies-score-value">{score > 0 ? score.toFixed(1) : "-"}</p>
      <MoviesStars />
      <p className="movies-score-count">{count} avaliações</p>
    </div>
  );
}

export default MoviesScore;

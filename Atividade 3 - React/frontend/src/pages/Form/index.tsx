import "./style.css";

function Form() {
  const movies = {
    id: 1,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/e3d8f1ffb258bcd5f56a8e2b84b1c51544ce7c38fa8af526d3463fdcbf3afb26.jpg",
    title: "Resident Evil - Vendetta",
    count: 2,
    score: 3.5,
  };

  return (
    <div className="movies-form-container">
      <img
        className="movies-card-image"
        src={movies.image}
        alt={"movies.title"}
      />
      <div className="movies-card-bottom-container">
        <h3>{movies.title}</h3>
        <form className="movies-form">
          <div className="form-group movies-form-group">
            <label htmlFor="email">Digite o seu email</label>
            <input className="form-control" type="email" id="email" />
          </div>
          <div className="movies-form-group">
            <label htmlFor="score">Avalie</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div className="movies-form-btn-container">
            <button className="movie-btn" type="submit">
              Salvar
            </button>
          </div>
        </form>
        <a className="movie-btn" href="index.html">
          Cancelar
        </a>
      </div>
    </div>
  );
}

export default Form;

import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';
import "./style.css";

function Pagination() {
  return (
    <div className="movies-pagination-container">
      <div className="movies-pagination-box">
        <button className="movies-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="movies-pagination-button" disabled={false}>
          <Arrow className="movies-flip-horizontal"/>
        </button>
      </div>
    </div>
  );
}

export default Pagination;

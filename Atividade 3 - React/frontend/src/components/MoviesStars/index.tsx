import { ReactComponent as StarFull } from '../../assets/img/star.svg';
import { ReactComponent as StarHalf } from '../../assets/img/star_half.svg';
import { ReactComponent as StarEmpty } from '../../assets/img/star_empty.svg';
import './style.css';

function MoviesStars(){
    return(
        <div className="movies-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />

        </div>
    );
}

export default MoviesStars;
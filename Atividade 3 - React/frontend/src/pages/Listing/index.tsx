import MoviesCard from '../../components/MoviesCard';
import Pagination from '../../components/Pagination';

function Listing() {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MoviesCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MoviesCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MoviesCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MoviesCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MoviesCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MoviesCard />
                    </div>
                </div>
            </div>  
            
            <Pagination />
        </>
    );
}

export default Listing;
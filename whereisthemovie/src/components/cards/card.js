import { FilmsContext } from "../../contextes/filmscontext";
import {useContext} from "react";
export default function BasicCard () {
    const {films} = useContext(FilmsContext);
    console.log("Liste des films :", films)
        return (
            <>
            {films.map((film) => {
                return (
                    <div className="card">
                        <img src={film.posterURLs['780']} alt={"Poster du film " + film.title}/>
                        <div className="card__content">
                            <h2 className="card__title">{film.originalTitle}</h2>
                            <p className="card__description">{film.overview}</p>
                        </div>
                    </div>
                )
            }
            )}
            </>
           
        )
}
import { useParams } from "react-router-dom";

function MovieCast() {
    const { movieId } = useParams();

    console.log(movieId);

    return (
        <div>MovieCast</div>
    )
}

export default MovieCast;
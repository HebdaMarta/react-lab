export default function MovieList({ movies}) {
    return (
        <div>
            <h2>Titles</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        {movie.title} ({movie.year})
                    </li>
                ))}
            </ul>
        </div>
    );
}

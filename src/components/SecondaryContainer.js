import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

    
    /*
    MovieList - Popular
    MovieList - Newly added
    MovieList - Recommened
    MovieList - Horror
     */


    const movies = useSelector((store) => store.movies)
    return <div className=" bg-black">
        <div className="-mt-60 pl-12 relative z-50">

        <MovieList title={"Now Playing"} movies= {movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies= {movies.trendingMovies}/>
        <MovieList title={"Popular"} movies= {movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies= {movies.upcomingMovies}/>
        <MovieList title={"Horror"} movies= {movies.horrorMovies}/>
        </div>
    </div>
}

export default SecondaryContainer
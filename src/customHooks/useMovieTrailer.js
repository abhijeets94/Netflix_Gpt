import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux"; 
import { addTrailerKey } from '../utils/movieSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
  useEffect(() => {
    getMoviesVideos();
  }, []);

  const getMoviesVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter(
      (video) => video.type.toLowerCase() === "trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerKey(trailer.key))
  };
}

export default useMovieTrailer
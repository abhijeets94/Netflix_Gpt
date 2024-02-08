import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import { useEffect }  from 'react'
import { addHorrorMovies } from '../utils/movieSlice'; 

const useHorrorMovies = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    getHorrorMovies();
  }, []);

  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&page=1&with_genres=27",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.results))
  };
}

export default useHorrorMovies
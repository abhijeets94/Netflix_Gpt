


import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import { useEffect }  from 'react'
import { addTrendingMovies } from '../utils/movieSlice'; 

const useTrendingMovies = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
   
    dispatch(addTrendingMovies(json.results))
  };
}

export default useTrendingMovies
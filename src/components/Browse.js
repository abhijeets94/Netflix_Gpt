import useHorrorMovies from "../customHooks/useHorrorMovies";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTrendingMovies from "../customHooks/useTrendingMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies() //custom hook useNowPlayingMovies
  usePopularMovies() //custom hook usePopularMovies
  useUpcomingMovies() //custom hook useUpcomingMovies
  useTrendingMovies()
  useHorrorMovies()


  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;

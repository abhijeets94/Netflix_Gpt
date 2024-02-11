import useHorrorMovies from "../customHooks/useHorrorMovies";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTrendingMovies from "../customHooks/useTrendingMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies(); //custom hook useNowPlayingMovies
  usePopularMovies(); //custom hook usePopularMovies
  useUpcomingMovies(); //custom hook useUpcomingMovies
  useTrendingMovies();
  useHorrorMovies();

  const gptSearchToggle = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {gptSearchToggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

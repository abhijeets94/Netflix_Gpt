import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies() //custom hook useNowPlayingMovies



  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;

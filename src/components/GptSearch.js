import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { IMG_BG } from "../utils/constants"; 

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-20">

      <img
        src={IMG_BG}
        alt="netflix-background"
        className=" bg-gradient-to-l from-black"
        
      ></img>
        </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;

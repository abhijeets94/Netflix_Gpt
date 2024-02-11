import React from "react";

const GptSearchBar = () => {
    return <div className="pt-[10%] flex justify-center ">
        
        <form className="bg-black w-1/2">
            <input type="text" className=" p-4 m-4 rounded-lg w-3/4" placeholder="What would you like to watch today"></input>
            <button className="py-2 px-4 text-2xl hover:text-3xl transition-all ease-in text-white rounded-full">🔎</button>
        </form>
    </div>;
};

export default GptSearchBar;

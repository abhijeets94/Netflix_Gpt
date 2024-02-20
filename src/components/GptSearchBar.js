import React, { useRef } from "react";
import openai from "../utils/openAI";

const GptSearchBar = () => {

    const searchText = useRef(null)

    async function gpt() {
        const gptQuery = "Act a movie recommendation system and give me movies for the query " + searchText.current.value + " and give me only 5 movies seperated by ',' ";
        console.log(openai);
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(chatCompletion.choices)
    }

    function handleSubmit(e) {
        gpt()
        e.preventDefault()
    }

    return <div className="pt-[10%] flex justify-center ">

        <form className="bg-black w-1/2" onSubmit={handleSubmit}>
            <input ref={searchText} type="text" className=" p-4 m-4 rounded-lg w-3/4" placeholder="What would you like to watch today"></input>
            <button className="py-2 px-4 text-2xl hover:text-3xl transition-all ease-in text-white rounded-full">🔎</button>
        </form>
    </div>;
};

export default GptSearchBar;

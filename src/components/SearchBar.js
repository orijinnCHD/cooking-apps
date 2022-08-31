import React, { useState } from 'react';
import Recipes from './Recipes';

const SearchBar = () => {

    const [inputValue,setInputValue]=useState("");

    

    return (
        
        <div>
            <form action="">
                <input type="text" placeholder='Placer le texte ici' onChange={(e)=>{setInputValue(e.target.value); }} />
                
            </form>
            <Recipes inputValue={inputValue}/>
        </div>
         
    );

   
};

export default SearchBar;

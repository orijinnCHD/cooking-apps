import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Recipes = () => {

    const [mealData, setMealData] = useState([]);

    const getMeal = () =>{
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((res)=>{setMealData(res.data.meals)});
    }

    useEffect(()=>{getMeal()},[]);

    return (
        <ul className='recipes'>
            {
               mealData
               .map( (meal,index) =>
               (
                    <Card key={index} meal={meal} />
               ))
            }
        </ul>
    );
};

export default Recipes;
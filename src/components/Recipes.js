import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';



const Recipes = ({inputValue}) => {

    const [mealData, setMealData] = useState([]);


    const getMeal = () =>{
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+inputValue).then((res)=>{setMealData(res.data.meals)});
    }

    //[] : c'est le callback de useeffect si il y a pas ça il fait une boucle infinie
    // pour qu'il s'actualise à chaque fois qu'on tape une nouvelle valeur dans input
    // on doit rajouter element qui change dans les crochet : inputvalue
    useEffect(()=>{getMeal()},[inputValue]);

    return (


        <ul className='recipes'>
        {
            // on verifie en premier si mealdata a des données sinon le slice fait erreur
            // faut savoir qu'ils faut le faire à chaque fois !!!!
            mealData && 
            mealData 
            .filter((meal)=>meal.strMeal.toLowerCase().includes(inputValue))
            .slice(0,24)// permet d'avoir un nombre de card esthetique
            .map( (meal,index) =>
            (
                <Card key={meal.idMeal} meal={meal} />
            ))
            
            
        }
        </ul>


        
    );
};

export default Recipes;
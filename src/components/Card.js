import React from 'react';

const Card = ({meal}) => {

    console.log(meal);

    return (
        <li className='card'>
            <h2>{meal.strMeal}</h2>
            <h4>origin : {meal.strArea}</h4>
            <img src={meal.strMealThumb} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quaerat cum maxime accusantium blanditiis dolorum asperiores velit. 
                Repudiandae, iure id perferendis qui eligendi illo reprehenderit laboriosam 
                iusto doloremque optio veritatis vitae, quod ut porro ab, vero inventore 
                soluta consequatur officiis? Odio, saepe reprehenderit. Exercitationem 
                veritatis officia nemo, rem alias tenetur autem fugiat, asperiores 
                minima itaque recusandae voluptates, cum rerum fuga reprehenderit.
            </p>

        </li>
    );
};

export default Card;
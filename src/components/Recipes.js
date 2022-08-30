import axios from 'axios';
import React, { useEffect } from 'react';
import Card from './Card';

const Recipes = () => {

    useEffect(()=>{

        axios.get('https://restcountries.com/v3.1/all').then((res)=>{console.log(res.data)});
    
    },[])

    return (
        <ul className='recipes'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ul>
    );
};

export default Recipes;
import React from 'react';
import Recipes from '../components/Recipes';
import SearchBar from '../components/SearchBar';

const Home = () => {
    return (
        <div>
            <h1>React Cooking</h1>
            <SearchBar/>
            <Recipes/>
        </div>
    );
};

export default Home;
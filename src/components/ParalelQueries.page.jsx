import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes');
};
const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends');
};

const ParalelQueries = () => {
    useQuery(['super-heroes'], fetchSuperHeroes);
    useQuery(['friends'], fetchFriends);

    return <div>ParalelQueries.page</div>;
};

export default ParalelQueries;

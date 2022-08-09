import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes');
};

export const useSuperHeroesData = (onSuccess, onError, enabled = true) => {
    return useQuery(['super-heroes'], fetchSuperHeroes, {
        onSuccess,
        onError,
        enabled: enabled ? true : false,
    });
};

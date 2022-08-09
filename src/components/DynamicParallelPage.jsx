import React from 'react';
import axios from 'axios';
import { useQueries } from '@tanstack/react-query';

const fetchSuperHeroes = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelPage = ({ heroIds }) => {
    const ids = [...heroIds];

    const queryResults = useQueries({
        queries: ids.map((id) => {
            return {
                queryKey: ['super-heroes', id],
                queryFn: () => fetchSuperHeroes(id),
                cacheTime: 1000,
            };
        }),
    });

    return <div>DynamicParallelPage</div>;
};

export default DynamicParallelPage;

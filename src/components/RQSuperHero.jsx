import React from 'react';
import { useSuperHeroData } from '../hooks/useSuperHeroData';
import { useParams } from 'react-router-dom';

export const RQSuperHero = () => {
    const { heroId } = useParams();
    const { isLoading, data, isError, error } = useSuperHeroData(heroId);

    return (
        <div>
            {' '}
            {data?.data.name} - {data?.data.alterEgo}
        </div>
    );
};

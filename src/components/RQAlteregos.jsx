import React from 'react';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

const RQAlteregos = () => {
    const onSuccess = () => {};
    const onError = () => {};
    const { data, error, isError, isLoading, isFetching, refetch } =
        useSuperHeroesData(onSuccess, onError, false);
    return (
        <>
            <div>
                <h2>RQ SuperHeroes AlterEgo</h2>
                <button onClick={() => refetch()}>
                    {' '}
                    Fetch Heroes Alterego
                </button>
                {data?.data.map((hero) => {
                    return <div> {hero.alterEgo} </div>;
                })}
            </div>
        </>
    );
};

export default RQAlteregos;

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';
import { useAddSuperHeroData } from '../hooks/useSuperHeroesDataMutation';

const RQSuperHeroes = () => {
	const [name, setName] = useState('');
	const [alterEgo, setAlterEgo] = useState('');

	const onSuccess = (data) => {};
	const onError = (error) => {};

	const { data, error, isLoading, isError, isFetching, refetch } =
		useSuperHeroesData(onSuccess, onError);

	const { mutate } = useAddSuperHeroData();

	const handleAddHeroClick = () => {
		const hero = {
			name,
			alterEgo,
		};
		mutate(hero);
	};

	return (
		<>
			{data ? (
				<>
					<div>
						<input
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type='text'
							value={alterEgo}
							onChange={(e) => setAlterEgo(e.target.value)}
						/>
						<button onClick={handleAddHeroClick}> Add Hero</button>
					</div>
					<div>
						<h2>RQ Super Heroes Pagessssssssss</h2>
						{data?.data.map((hero) => {
							return (
								<div key={hero.name}>
									<Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
								</div>
							);
						})}
					</div>{' '}
				</>
			) : isError ? (
				<p> {error.message}</p>
			) : isLoading && !isFetching ? (
				<p> Not ready...</p>
			) : (
				<p> Loading...</p>
			)}{' '}
		</>
	);
};

export default RQSuperHeroes;

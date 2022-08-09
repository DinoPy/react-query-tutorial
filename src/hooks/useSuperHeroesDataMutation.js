import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const addSuperHero = (hero) => {
	return axios.post('http://localhost:4000/superheroes', hero);
};

export const useAddSuperHeroData = () => {
	const queryClient = useQueryClient();
	return useMutation(addSuperHero, {
		onMutate: async (newHero) => {
			await queryClient.cancelQueries(['super-heroes']);
			const previousHeroData = queryClient.getQueryData(['super-heroes']);
			queryClient.setQueryData([
				'super-heroes',
				(oldQueryData) => {
					return {
						...oldQueryData,
						data: [
							...oldQueryData.data,
							{ id: oldQueryData.data.length + 1, ...newHero },
						],
					};
				},
			]);
			return { previousHeroData };
		},
		onError: (_error, _hero, context) => {
			queryClient.setQueriesData(['super-heroes', context.previousHeroData]);
		},
		onSettled: () => {
			queryClient.invalidateQueries(['super-heroes']);
		},
		// onSuccess: (data) => {
		// 	// queryClient.invalidateQueries(['super-heroes']);
		// 	queryClient.setQueryData(['super-heroes'], (oldQueryData) => {
		// 		return {
		// 			...oldQueryData,
		// 			data: [...oldQueryData.data, data.data],
		// 		};
		// 	});
		// },
	});
};

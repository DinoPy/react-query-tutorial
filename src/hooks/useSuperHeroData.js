import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHero = ({ queryKey }) => {
	const heroId = queryKey[1];
	return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
	const queryClient = useQueryClient();
	return useQuery([`super-hero`, heroId], fetchSuperHero, {
		refetchInterval: 1000,
		refetchIntervalInBackground: true,
		initialData: () => {
			const hero = queryClient
				.getQueryData(['super-heroes'])
				?.data?.find((hero) => hero.id === parseInt(heroId));

			if (hero) {
				return {
					data: hero,
				};
			} else {
				return undefined;
			}
		},
	});
};

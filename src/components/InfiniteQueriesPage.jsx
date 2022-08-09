import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Fragment } from 'react';

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

const InfiniteQueriesPage = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(['colors'], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h2> Loading... </h2>;
  }

  if (isError) {
    return <h2> {error.message} </h2>;
  }

  return (
    <>
      <div>
        {data?.pages.map((group, i) => {
          console.log(group);
          return (
            <Fragment key={i}>
              {group.data.map((color) => {
                return (
                  <h2 key={color.id}>
                    {color.id} {color.label}
                  </h2>
                );
              })}
            </Fragment>
          );
        })}
      </div>
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          {' '}
          Load More
        </button>
      </div>
    </>
  );
};

export default InfiniteQueriesPage;

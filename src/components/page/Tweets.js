import { useLocation } from 'react-router-dom';
import { BackLink, CardList } from './Tweets.styled';
import { useEffect, useState } from 'react';
import { FetchUsers } from 'components/api/api';
import { Loader } from 'components/Loader/Loader';
import { UserCard } from 'components/UserCard/UserCard';
import { nanoid } from 'nanoid';

export const Tweets = () => {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ShowButtonLoadMore, setShowButtonLoadMore] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);

      try {
        const { data } = await FetchUsers(page);

        setShowButtonLoadMore(data.length === 3);

        !users
          ? setUsers(data)
          : setUsers(prevState => [...prevState, ...data]);

        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    getUsers();
  }, [page]);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  console.log(`📌  Tweets  user:`, users);

  return (
    <>
      <BackLink to={location.state?.from || '/home'}>Go Back</BackLink>

      <CardList>
        {users &&
          users.map(({ user, tweets, followers, avatar, id }) => (
            <UserCard
              key={nanoid()}
              user={user}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              id={id}
            />
          ))}
      </CardList>

      {ShowButtonLoadMore && (
        <button type="button" onClick={loadMore}>
          Load More
        </button>
      )}
      {loading && <Loader />}

      {error && <p>Sorry. This {error}. </p>}
    </>
  );
};

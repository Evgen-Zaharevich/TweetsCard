import { useLocation } from 'react-router-dom';
import {
  BackLink,
  CardList,
  Container,
  ContainerDropdown,
  ContainerTweets,
  LoadMore,
} from './Tweets.styled';
import { useEffect, useState } from 'react';
import { FetchUsers } from 'components/api/api';
import { Loader } from 'components/Loader/Loader';
import { UserCard } from 'components/UserCard/UserCard';
import { nanoid } from 'nanoid';
import { DropdownCard } from 'components/DropdownCard/DropdownCard';

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ShowButtonLoadMore, setShowButtonLoadMore] = useState(false);
  const [dropDown, setDropDown] = useState('showAll');

  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    const getUsers = async () => {
      setLoading(true);
      try {
        const { data } = await FetchUsers(page, abortController);
        setShowButtonLoadMore(data.length === 3);
        setUsers(prevState => [...prevState, ...data]);
        setLoading(false);
      } catch (e) {}
    };
    getUsers();

    return () => {
      abortController.abort();
    };
  }, [page]);

  const loadMore = async () => {
    setPage(prevPage => prevPage + 1);
    setDropDown('showAll');
  };

  const getValueDropDown = e => {
    setDropDown(e);
  };

  const usersFollow = users.filter(
    ({ statusFollowed }) => statusFollowed === false
  );

  const usersFollowings = users.filter(
    ({ statusFollowed }) => statusFollowed === true
  );

  return (
    <Container>
      <ContainerTweets>
        <ContainerDropdown>
          <BackLink to={location.state?.from || '/home'}>Go Back</BackLink>

          <DropdownCard getValueDropDown={getValueDropDown} />
        </ContainerDropdown>
        <CardList>
          {dropDown === 'showAll' &&
            users.flatMap(
              ({ tweets, followers, avatar, id, statusFollowed }) => (
                <UserCard
                  key={nanoid()}
                  tweets={tweets}
                  followers={followers}
                  avatar={avatar}
                  statusFollowed={statusFollowed}
                  id={id}
                />
              )
            )}

          {dropDown === 'follow' &&
            usersFollow.flatMap(
              ({ tweets, followers, avatar, id, statusFollowed }) => (
                <UserCard
                  key={nanoid()}
                  tweets={tweets}
                  followers={followers}
                  avatar={avatar}
                  statusFollowed={statusFollowed}
                  id={id}
                />
              )
            )}

          {dropDown === 'followings' &&
            usersFollowings.flatMap(
              ({ tweets, followers, avatar, id, statusFollowed }) => (
                <UserCard
                  key={nanoid()}
                  tweets={tweets}
                  followers={followers}
                  avatar={avatar}
                  statusFollowed={statusFollowed}
                  id={id}
                />
              )
            )}
        </CardList>

        {ShowButtonLoadMore && (
          <LoadMore type="button" onClick={loadMore}>
            Load More
          </LoadMore>
        )}
        {loading && <Loader />}
      </ContainerTweets>
    </Container>
  );
};

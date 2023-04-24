import { useLocation } from 'react-router-dom';
import { BackLink } from './Tweets.styled';

export const Tweets = () => {
  const location = useLocation();

  return (
    <>
      <BackLink to={location.state?.from || '/home'}>Go back</BackLink>
      <p>tweetsPage</p>
    </>
  );
};

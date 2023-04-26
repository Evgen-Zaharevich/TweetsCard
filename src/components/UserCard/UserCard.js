import questionImg from '../../image/picture2 1.png';
import logoImg from '../../image/Logo.png';
import { useEffect, useState } from 'react';
import { updateUser } from 'components/api/api';

import {
  Avatar,
  Button,
  ButtonActive,
  CardBottom,
  CardContainer,
  CardTop,
  ColorLine,
  CompleteQuestionImg,
  Ellipse,
  LogoGoIt,
  Paragraph,
} from './UserCard.styled';

export const UserCard = ({ tweets, followers, avatar, id, statusFollowed }) => {
  const [status, setStatus] = useState(statusFollowed);
  const [followerValue, setFollowerValue] = useState(Number(followers));

  const handleClick = () => {
    setStatus(true);

    if (!status) {
      setFollowerValue(prevState => prevState + 1);
      setStatus(true);
    } else {
      setFollowerValue(prevState => prevState - 1);
      setStatus(false);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    updateUser(id, status, String(followerValue), abortController);

    return () => {
      abortController.abort();
    };
  }, [followerValue, id, status]);

  const dottedNumber = value => {
    const parts = value.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  return (
    <CardContainer>
      <LogoGoIt src={logoImg} alt="logo GO IT" />
      <CardTop>
        <CompleteQuestionImg src={questionImg} alt="QuestionImg" />
      </CardTop>
      <ColorLine>
        <Ellipse>
          <Avatar src={avatar} alt="avatar" />
        </Ellipse>
      </ColorLine>
      <CardBottom>
        <p>{tweets} TWEETS</p>
        <Paragraph>{dottedNumber(followerValue)} FOLLOWERS</Paragraph>
        {!status ? (
          <Button type="button" onClick={handleClick}>
            FOLLOW
          </Button>
        ) : (
          <ButtonActive type="button" onClick={handleClick}>
            FOLLOWING
          </ButtonActive>
        )}
      </CardBottom>
    </CardContainer>
  );
};

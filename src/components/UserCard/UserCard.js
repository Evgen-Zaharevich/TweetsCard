import questionImg from '../../image/picture2 1.png';
import logoImg from '../../image/Logo.png';
import {
  Avatar,
  Button,
  CardBottom,
  CardContainer,
  CardTop,
  ColorLine,
  CompleteQuestionImg,
  Ellipse,
  LogoGoIt,
  Paragraph,
} from './UserCard.styled';

export const UserCard = ({ user, tweets, followers, avatar, id }) => {
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
        <Paragraph>{followers} FOLLOWERS</Paragraph>
        <Button>FOLLOW</Button>
      </CardBottom>
    </CardContainer>
  );
};

import styled from 'styled-components';

export const CardContainer = styled.div`
  /* position: absolute; */
  width: 380px;
  height: 460px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const LogoGoIt = styled.img`
  width: 76px;
  height: 22px;
  position: relative;
  bottom: -20px;
  left: 20px;
  /* margin-left: 20px;
  margin-top: 20px; */
  z-index: 99;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 214px;
`;

export const CompleteQuestionImg = styled.img`
  width: 308px;
  height: 168px;
`;

export const ColorLine = styled.div`
  width: 380px;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Ellipse = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: 8px solid #ebd8ff;
  background-color: #5736a3;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  position: relative;
  top: -44px;
  left: 145px;
`;

export const Avatar = styled.img`
  width: 80px;
  border-radius: 50px;
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  height: 238px;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  background-color: #ebd8ff;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  margin-bottom: 36px;
  margin-top: 26px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

export const Paragraph = styled.p`
  margin-top: 16px;
`;

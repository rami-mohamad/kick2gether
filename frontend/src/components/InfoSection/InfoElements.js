import styled from "styled-components";
import Icon1 from "./InfoImages/IconOne.png";
import Icon2 from "./InfoImages/IconTwo.png";
import Icon3 from "./InfoImages/IconThree.png";
import Icon4 from "./InfoImages/IconFour.png";
import Dots from "./InfoImages/3Dots.png";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  height: 1050px;
  padding: 40px 0;

  /* border: 1px solid red; */

  @media screen and (max-width: 768px) {
    height: 1250px;
  }
`;

export const InfoWrapper = styled.div`
  /* display: grid; */
  z-index: 1;
  height: 950px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 20px;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 1080px;
  }
`;

export const InfoRow = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TextWrapper = styled.div`
         width: 100%;
         padding-top: 0;
         padding-bottom: 60px;
       `;

export const TopLine = styled.p`
  color: #fabf2f;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top:60px;
  font-family: "Michroma", sans-serif;
`;

export const TopText = styled.p`
  font-family: "Michroma", sans-serif;
  margin-bottom: 50px;
`;

export const InfoContent = styled.div`
  display: grid;
  position: relative;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  grid-gap: 3%;
  grid-template-areas:
    ". . . ."
    ". one two ."
    ". three four ."
    ". . . .";
  align-items: center;
  padding: 0 5%;
  width: 100%;
  height: 700px;
  background: rgba(196, 196, 196, 0.4);
  border-radius: 200px;

  @media screen and (max-width: 960px) {
    border-radius: 100px;
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 5% 0;
    border-radius: 100px;
    grid-template: repeat(4, 1fr) / repeat(4, 1fr);
    grid-gap: 0px;
    grid-template-areas:
      ". one . ."
      ". . two ."
      ". three . ."
      ". . four .";
  }

  @media screen and (max-width: 480px) {
  }
`;

export const DotsLeft = styled.img`
  position: absolute;
  left: 3.5%;
  top: 15%;
  height: 70%;

  @media screen and (max-width: 768px) {
    position: absolute;
    left: 2%;
    top: 15%;
    height: 50%;
  }
`;
DotsLeft.defaultProps = {
  src: Dots,
};

export const DotsRight = styled.img`
  position: absolute;
  right: 3.5%;
  top: 15%;
  height: 70%;

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 2%;
    top: 30%;
    height: 50%;
  }
`;
DotsRight.defaultProps = {
  src: Dots,
};

export const Img = styled.img`
  width: 50%;
  margin: 0 0 10px 0;
  padding-right: 0;
  position: absolute;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  margin: auto;
  z-index: 0;
  opacity: 50%;
`;

export const InfoContentOne = styled.div`
  padding: 20px 30px;
  width: 300px;
  height: 300px;
  background: rgba(252, 87, 87, 0.4);
  border-radius: 50px;
  transform: rotate(0.42deg);
  grid-area: one;

  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const InfoContentTwo = styled.div`
  padding: 20px 30px;
  margin: auto;
  width: 300px;
  height: 300px;
  background: rgba(255, 234, 167, 0.5);
  border-radius: 50px;
  transform: rotate(0.42deg);
  grid-area: two;

  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const InfoContentThree = styled.div`
  padding: 20px 30px;
  margin: auto;
  width: 300px;
  height: 300px;
  background: rgba(45, 167, 236, 0.5);
  border-radius: 50px;
  transform: rotate(0.42deg);
  grid-area: three;

  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const InfoContentFour = styled.div`
  padding: 20px 30px;
  margin: auto;
  width: 300px;
  height: 300px;
  background: rgba(68, 184, 149, 0.6);
  border-radius: 50px;
  transform: rotate(0.42deg);
  grid-area: four;

  @media screen and (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const IconOne = styled.img`
  width: 40px;
  margin: 10px auto;

  @media screen and (max-width: 768px) {
    width: 20px;
    margin: 5px auto;
  }
`;

IconOne.defaultProps = {
  src: Icon1,
};

export const IconTwo = styled.img`
  width: 40px;
  margin: 10px auto;

  @media screen and (max-width: 768px) {
    width: 20px;
    margin: 5px auto;
  }
`;
IconTwo.defaultProps = {
  src: Icon2,
};

export const IconThree = styled.img`
  width: 40px;
  margin: 10px auto;

  @media screen and (max-width: 768px) {
    width: 20px;
    margin: 5px auto;
  }
`;
IconThree.defaultProps = {
  src: Icon3,
};

export const IconFour = styled.img`
  width: 40px;
  margin: 10px auto;

  @media screen and (max-width: 768px) {
    width: 20px;
    margin: 5px auto;
  }
`;
IconFour.defaultProps = {
  src: Icon4,
};

export const TextFieldOne = styled.h2`
  width: 100%;
  height: 25px;
  font-size: 20px;
  margin-bottom: 5%;

  @media screen and (max-width: 768px) {
    height: 25px;
    font-size: 12px;
    margin-bottom: 2.5%;
  }
`;
export const TextFieldTwo = styled.h2`
  width: 100%;
  height: 25px;
  margin-bottom: 5%;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    height: 25px;
    font-size: 12px;
    margin-bottom: 2.5%;
  }
`;
export const TextFieldThree = styled.h2`
  width: 100%;
  height: 25px;
  font-size: 20px;
  margin-bottom: 5%;

  @media screen and (max-width: 768px) {
    height: 25px;
    font-size: 12px;
    margin-bottom: 2.5%;
  }
`;
export const TextFieldFour = styled.h2`
  width: 100%;
  height: 25px;
  font-size: 20px;
  margin-bottom: 5%;

  @media screen and (max-width: 768px) {
    height: 25px;
    font-size: 12px;
    margin-bottom: 2.5%;
  }
`;

export const InfoP1 = styled.p`
  width: 100%;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;
export const InfoP2 = styled.p`
  width: 100%;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;
export const InfoP3 = styled.p`
  width: 100%;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;
export const InfoP4 = styled.p`
  width: 100%;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 660px;
  left: auto;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    top: 1020px;
    left: auto;
  }
`;

import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import HeroIcon from "./HeroImages/GoldenFB.png";
import HeroImage from "./HeroImages/Rectangle.png";
import HeroLeftDots from "./HeroImages/LeftDots.png";
import HeroRightDots from "./HeroImages/RightDots.png";
import HeroTopPlayer from "./HeroImages/TopPlayer.png";
import HeroBottomPlayer from "./HeroImages/BottomPlayer.png";

export const HeroContainer = styled.div`
         background: #0c0c0c;
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 0 30px;
         height: 900px;
         position: relative;
         z-index: 1;
         overflow-x: hidden;
         overflow-y: hidden;

         :before {
           content: "";
           position: absolute;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
           background: linear-gradient(
               180deg,
               rgba(0, 0, 0, 0.2) 0%,
               rgba(0, 0, 0, 0.6) 100%
             ),
             linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);

           z-index: 2;
         }

         /* Add :before styles */
       `;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroLeftDotsElement = styled.img`
  width: 100px;
  height: 373px;
  z-index: 5;
  position: absolute;
  top: 200px;
  left: 0px;
`;

HeroLeftDotsElement.defaultProps = {
  src: HeroLeftDots,
};

export const HeroRightDotsElement = styled.img`
  width: 100px;
  height: 373px;
  z-index: 5;
  position: absolute;
  top: 340px;
  right: 0px;
`;

HeroRightDotsElement.defaultProps = {
  src: HeroRightDots,
};

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  background-color: #000;
  color: #fabf2f;
  font-size: 55px;
  padding: 0px 40px;
  border-radius: 50px;
  font-family: "Michroma", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 108px;
  background-color: rgba(250, 191, 47, 0.3);
  position: absolute;
  top: -320px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -3px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    padding: 0 30px;
    height: 70px;
    position: absolute;
    top: -320px;
  }

  @media screen and (max-width: 480px) {
    font-size: 35px;
    padding: 0 28px;
    height: 70px;
    position: absolute;
    top: -320px;
  }
`;

export const HeroH1Element = styled.img`
  opacity: 0.4;
  position: absolute;
  top: -280%;
  left: 8%;
  width: 130%;
  z-index: 2;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: -285%;
    left: 8%;
    width: 600px;
  }
  @media screen and (max-width: 480px) {
    position: absolute;
    top: -285%;
    left: 10%;
    max-width: 10%;
    width: 50px;
  }
`;

HeroH1Element.defaultProps = {
  src: HeroImage,
};

export const HeroPlayerTop = styled.img`
  position: absolute;
  top: -300px;
  z-index: 2;
  width: 50%;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: -310px;
  }
  @media screen and (max-width: 480px) {
    position: absolute;
  }
`;

HeroPlayerTop.defaultProps = {
  src: HeroTopPlayer,
};

export const HeroPlayerBottom = styled.img`
  position: absolute;
  top: 270px;
  width: 60%;
  opacity: 0.4;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 140px;
  }
  @media screen and (max-width: 480px) {
    position: absolute;
  }
`;

HeroPlayerBottom.defaultProps = {
  src: HeroBottomPlayer,
};

export const HeroP = styled.p`
  font-family: "Michroma", sans-serif;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 800px;
  position: relative;
  top: -150px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    position: relative;
    top: -200px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    position: relative;
    top: -200px;
  }
`;

export const HeroTextOne = styled.p`
  position: absolute;
  left: 90px;
  top: 250px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 32px;
  width: 200px;
  height: 100px;
  color: #fabf2f;
  z-index: 5;

  @media screen and (max-width: 920px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const HeroTextTwo = styled.p`
  position: absolute;
  left: 90px;
  top: 480px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 32px;
  width: 200px;
  height: 100px;
  color: #fabf2f;
  z-index: 5;

  @media screen and (max-width: 920px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const HeroTextThree = styled.p`
  position: absolute;
  right: 90px;
  top: 370px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 32px;
  width: 200px;
  height: 100px;
  color: #fabf2f;
  z-index: 5;

  @media screen and (max-width: 920px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const HeroTextFour = styled.p`
  position: absolute;
  right: 90px;
  top: 600px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 32px;
  width: 200px;
  height: 100px;
  color: #fabf2f;
  z-index: 5;

  @media screen and (max-width: 920px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HeroIconGoldenFB = styled.img`
  position: absolute;
  top: -50%;
  width: 60%;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: -100%;
    width: 60%;
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    top: -100%;
    width: 60%;
  }
`;

HeroIconGoldenFB.defaultProps = {
  src: HeroIcon,
};

export const HeroBtnWrapper = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

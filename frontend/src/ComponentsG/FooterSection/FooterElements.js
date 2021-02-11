import styled from "styled-components";
import Background from "./FooterImages/BackgroundField.png";
import User from "./FooterImages/icon-user.png";
import Email from "./FooterImages/icon-mail.png";
import Edit from "./FooterImages/icon-edit.png";

export const FooterContainer = styled.div`
  height: 450px;

  background-image: url(${Background});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 650px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 680px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 700px;
  }
`;
export const FlexContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 400px;
  width: 400px;

  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: center;
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    align-items: center;
    justify-content: center;
    width: 80%;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const SocialWrapper = styled.div`
  margin: 20px 0;
  width: 80%;
`;

export const HeroP = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #adadad;
`;

export const IconFB = styled.div``;
export const IconIN = styled.div``;
export const IconS = styled.div``;
export const IconT = styled.div``;

export const InformationWrapper = styled.div`
  margin: 20px 0;
  width: 80%;

  @media screen and (max-width: 960px) {
    height: 50px;
  }

  @media screen and (max-width: 768px) {
    height: 50px;
  }
`;
export const InfoPWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 80px;
  width: 100%;

  @media screen and (max-width: 960px) {
    height: 50px;
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    height: 50px;
    width: 85%;
  }
`;
export const InformationP = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: #fabf2f;
`;

export const FlexContainer2 = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 400px;
  width: 400px;

  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 70px 0;
  }

  @media screen and (max-width: 480px) {
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 50px 0;
  }
`;

export const SubscribeWrapper = styled.div`
  margin: 20px 0;
  width: 80%;

  @media screen and (max-width: 960px) {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const MessageWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const EmailP = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 48px;
  display: flex;
  align-items: flex-start;
  letter-spacing: -0.5px;

  @media screen and (max-width: 960px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const InputArea = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 150px;
  align-items: flex-start;
`;

export const InputName = styled.input`
  font-size: 11px;
  padding: 10px;
  margin: 10px 0;
  background: rgba(194, 194, 194, 0.25);
  border: none;
  border-radius: 10px;
  background-image: url(${User});
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: right;
  align-items: flex-start;

  ::placeholder {
    color: #fabf2f;
  }

  @media screen and (max-width: 768px) {
    background: rgba(194, 194, 194, 0.75);
    background-image: url(${User});
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: right;

    ::placeholder {
      color: #000;
    }
  }
  @media screen and (max-width: 480px) {
    background: rgba(194, 194, 194, 0.75);
    background-image: url(${User});
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: right;

    ::placeholder {
      color: #000;
    }
  }
`;

export const InputEmail = styled.input`
  font-size: 11px;
  padding: 10px;
  margin: 10px;
  background: rgba(194, 194, 194, 0.25);
  border: none;
  border-radius: 10px;
  background-image: url(${Email});
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: right;

  ::placeholder {
    color: #fabf2f;
  }

  @media screen and (max-width: 768px) {
    background: rgba(194, 194, 194, 0.75);
    background-image: url(${Email});
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: right;

    ::placeholder {
      color: #000;
    }
  }
  @media screen and (max-width: 480px) {
    background: rgba(194, 194, 194, 0.75);
    background-image: url(${Email});
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: right;

    ::placeholder {
      color: #000;
    }
  }
`;

export const MessageArea = styled.textarea`
  resize: none;
  width: 70%;
  height: 60px;
  overflow: hidden;
  outline: none;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  padding: 10px;
  background: rgba(194, 194, 194, 0.25);
  background-image: url(${Edit});
  background-repeat: no-repeat;
  /* background-size: auto; */
  background-size: 35px;
  background-position: top right;
  font-size: 12px;

  ::placeholder {
    color: #fabf2f;
  }

  @media screen and (max-width: 768px) {
    background: rgba(194, 194, 194, 0.75);
    background-image: url(${Edit});
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: top right;

    ::placeholder {
      color: #000;
    }
  }
  @media screen and (max-width: 480px) {
    background: rgba(194, 194, 194, 0.75);
    background-image: url(${Edit});
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: top right;

    ::placeholder {
      color: #000;
    }
  }
`;

export const ButtonSend = styled.button`
  color: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #000000;
  /* 2 dp • Dark shadow */

  text-shadow: 0px 2px 4px rgba(38, 50, 56, 0.16),
    0px 4px 8px rgba(38, 50, 56, 0.08);
  box-shadow: 0px 8px 24px rgba(38, 50, 56, 0.1),
    0px 16px 32px rgba(38, 50, 56, 0.08);
  border-radius: 10px;
  width: 80px;
  height: 60px;
  font-size: 14px;
  font-weight: normal;
  border: none;
`;

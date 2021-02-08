import React from "react";
import FB from "./FooterImages/icon-facebook.png";
import IN from "./FooterImages/icon-linkedin.png";
import S from "./FooterImages/icon-slack.png";
import T from "./FooterImages/icon-twitter.png";

import {
  FooterContainer,
  FlexContainer1,
  SocialWrapper,
  HeroP,
  Icon,
  IconFB,
  IconIN,
  IconS,
  IconT,
  InformationWrapper,
  InfoPWrap,
  InformationP,
  FlexContainer2,
  SubscribeWrapper,
  EmailP,
  MessageWrapper,
  InputName,
  InputEmail,
  MessageArea,
  InputArea,
  ButtonSend,
} from "./FooterElements";

function Footer() {
  return (
    <>
      <FooterContainer id="footer">
        <FlexContainer1>
          <SocialWrapper>
            <HeroP>follow us</HeroP>
            <Icon>
              <IconFB>
                {" "}
                <img
                  //   key={img}
                  alt={IconFB}
                  src={FB}
                  style={{
                    position: "relative",
                    right: "4px",
                    top: "4px",
                    width: "30px",
                    margin: "0",
                  }}
                ></img>
              </IconFB>
              <IconIN>
                {" "}
                <img
                  //   key={img}
                  alt={IconIN}
                  src={IN}
                  style={{
                    position: "relative",
                    right: "4px",
                    top: "4px",
                    width: "30px",
                    margin: "0 5px",
                  }}
                ></img>
              </IconIN>
              <IconS>
                {" "}
                <img
                  //   key={img}
                  alt={IconS}
                  src={S}
                  style={{
                    position: "relative",
                    right: "4px",
                    top: "4px",
                    width: "30px",
                    margin: "0 5px",
                  }}
                ></img>
              </IconS>
              <IconT>
                {" "}
                <img
                  //   key={img}
                  alt={IconT}
                  src={T}
                  style={{
                    position: "relative",
                    right: "4px",
                    top: "4px",
                    width: "30px",
                    margin: "0 5px",
                  }}
                ></img>
              </IconT>
            </Icon>
          </SocialWrapper>

          <InformationWrapper>
            <HeroP>information</HeroP>
            <InfoPWrap>
              <InformationP>About K2G app</InformationP>
              <InformationP>Get in touch</InformationP>
              <InformationP>Things we like</InformationP>
              <InformationP>Privacy policy</InformationP>
              <InformationP>Terms of service</InformationP>
              <InformationP>Resources</InformationP>
            </InfoPWrap>
          </InformationWrapper>
        </FlexContainer1>
        <FlexContainer2>
          <SubscribeWrapper>
            <HeroP>subsribe us</HeroP>
            <EmailP>hello@k2g.com</EmailP>
          </SubscribeWrapper>

          <MessageWrapper>
            <HeroP>keep in touch</HeroP>
            <InputArea>
              <InputName type="text" placeholder="Your Name"></InputName>

              <InputEmail type="text" placeholder="E-mail"></InputEmail>

              <MessageArea
                type="text"
                placeholder="Leave your message|"
              ></MessageArea>
              <ButtonSend>Send</ButtonSend>
            </InputArea>
          </MessageWrapper>
        </FlexContainer2>
      </FooterContainer>
    </>
  );
}

export default Footer;

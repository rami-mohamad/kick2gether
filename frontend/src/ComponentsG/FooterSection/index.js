import React, { useState } from "react";
import FB from "./FooterImages/icon-facebook.png";
import IN from "./FooterImages/icon-linkedin.png";
import S from "./FooterImages/icon-slack.png";
import T from "./FooterImages/icon-twitter.png";
import axios from "axios";

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
  const [contact, setcontact] = useState({ name: "", email: "", message: "" });

  const inputChange = (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitHandler = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(contact);
    try {
      const response = axios.post(
        `${process.env.BASE_URL}/user/contact`,
        contact,
        config
      );
      console.log(response.data);
    } catch (error) {}
  };

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
              <InputName
                onChange={inputChange}
                name="name"
                type="text"
                placeholder="Your Name"
              ></InputName>

              <InputEmail
                onChange={inputChange}
                name="email"
                type="text"
                placeholder="E-mail"
              ></InputEmail>

              <MessageArea
                onChange={inputChange}
                type="text"
                name="message"
                placeholder="Leave your message|"
              ></MessageArea>
              {contact.message !== "" ? (
                <ButtonSend onClick={submitHandler}>Send</ButtonSend>
              ) : (
                <ButtonSend disabled={true} onClick={submitHandler}>
                  Send
                </ButtonSend>
              )}
              {/* <ButtonSend onClick={submitHandler}>Send</ButtonSend> */}
            </InputArea>
          </MessageWrapper>
        </FlexContainer2>
      </FooterContainer>
    </>
  );
}

export default Footer;

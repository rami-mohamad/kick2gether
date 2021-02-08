import React from "react";
import { Button } from "../ButtonElements";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  TopText,
  InfoContent,
  InfoContentOne,
  InfoContentTwo,
  InfoContentThree,
  InfoContentFour,
  TextFieldOne,
  TextFieldTwo,
  TextFieldThree,
  TextFieldFour,
  InfoP1,
  InfoP2,
  InfoP3,
  InfoP4,
  IconOne,
  IconTwo,
  IconThree,
  IconFour,
  BtnWrap,
  Img,
  DotsLeft,
  DotsRight
} from "./InfoElements";

function InfoElements({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  contentText,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
    
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <TopText lightText={lightText}>{headline}</TopText>
              <InfoContent>

                <Img src={img} alt={alt} />

                <DotsLeft />
                <DotsRight />

                <InfoContentOne>
                  <IconOne />
                  <TextFieldOne>Support</TextFieldOne>
                  <InfoP1>{contentText}</InfoP1>
                </InfoContentOne>

                <InfoContentTwo>
                  <IconTwo />
                  <TextFieldTwo>Coponents-driven</TextFieldTwo>
                  <InfoP2>{contentText}</InfoP2>
                </InfoContentTwo>

                <InfoContentThree>
                  <IconThree />
                  <TextFieldThree>Sales growth</TextFieldThree>
                  <InfoP3>{contentText}</InfoP3>
                </InfoContentThree>

                <InfoContentFour>
                  <IconFour />
                  <TextFieldFour>Swap the icon</TextFieldFour>
                  <InfoP4>{contentText}</InfoP4>
                </InfoContentFour>
              </InfoContent>

              <BtnWrap>
                <Button
                  to="home"
                  smoth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}{" "}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoElements;

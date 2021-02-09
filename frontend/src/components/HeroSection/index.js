import React, { useState } from "react";
import Video from "../../videos/Soccer720.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH1Element,
  HeroLeftDotsElement,
  HeroRightDotsElement,
  HeroPlayerTop,
  HeroPlayerBottom,
  HeroP,
  HeroTextOne,
  HeroTextTwo,
  HeroTextThree,
  HeroTextFour,
  HeroIconGoldenFB,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div>
      <HeroContainer id="home">
        <HeroLeftDotsElement />
        <HeroRightDotsElement />

        <HeroTextOne>
          Use mixed grid with imagery, replace with your own photos and
          descriptions{" "}
        </HeroTextOne>
        <HeroTextTwo>
          Use mixed grid with imagery, replace with your own photos and
          descriptions
        </HeroTextTwo>
        <HeroTextThree>
          This is multipurpose grid, it fits for portfolio, services or agency
          web site
        </HeroTextThree>
        <HeroTextFour>
          This is multipurpose grid, it fits for portfolio, services or agency
          web site
        </HeroTextFour>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>kick2gether</HeroH1>
          <HeroH1Element />
          <HeroPlayerTop />
          <HeroPlayerBottom />
          <HeroP>create your own champions leauge every day</HeroP>

          <HeroIconGoldenFB></HeroIconGoldenFB>
          <HeroBtnWrapper>
            <Button
              to="signup"
              smoth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  );
}

export default HeroSection;

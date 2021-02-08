import styled from "styled-components";
import Background from "./PriceImages/Gradient.png";

export const PriceContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(194, 194, 194, 0.239583) 10.42%,
      rgba(137, 137, 137, 0.463542) 46.35%,
      rgba(137, 137, 137, 0.463542) 87.5%,
      #000000 100%
    ),
    linear-gradient(180deg, #000000 0%, #ffffff 100%),
    linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(180deg, #2d3436 0%, rgba(45, 52, 54, 0) 100%);
  position: relative;

  @media screen and (max-width: 1000px) {
    height: 1270px;
  }

  @media screen and (max-width: 768px) {
    height: 1700px;
    background-image: url(${Background});
  }

  @media screen and (max-width: 480px) {
    height: 1700px;
  }
`;

export const HeaderPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: auto;
  margin-left: auto;
  font-weight: 700;
  padding: 20px 20px;
`;

export const PriceH1 = styled.h1`
  color: #fabf2f;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 26px;
  font-family: "Michroma", sans-serif;
  display: flex;
  justify-content: flex-start;
  margin-top:80px;
`;

export const PriceH2 = styled.h2`
  font-family: "Michroma", sans-serif;
  font-size: 16px;
  margin-bottom: 36px;
  color: #fff;
`;

export const PriceH3 = styled.p`
  font-size: 20px;
  color: #fabf2f;
  margin-bottom: 34px;
  font-family: "Michroma", sans-serif;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PriceWrapper = styled.div`
  max-width: 1000px;
  max-height: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  align-items: center;
  grid-gap: 16px;
  /* padding: 0 50px; */

  transition: all 0.2s ease-in-out;

  & :hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 300px 300px;
    max-height: 1400px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 300px;
    padding: 0 20px;
  }
`;

export const PriceCard = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #000000;
  color: #fff;
  border-radius: 10px;
  height: 440px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(7, 40px);
  grid-template-areas:
    " a "
    " b "
    " c "
    " d "
    " e "
    " f "
    " g "
    " h ";
`;

export const PriceIcon = styled.div`
  height: 30px;
  width: 200px;
  font-size: 16px;
  grid-area: a;
`;

export const PriceCardH2 = styled.div`
  font-size: 20px;
  max-width: 280px;
  grid-area: b;
  color: #fabf2f;
`;

export const PriceInfoH3 = styled.p`
  font-size: 16px;
  padding-bottom: 30px;
  grid-area: a;
`;

export const PriceCardInfoH2 = styled.p`
  font-size: 20px;
  max-width: 280px;
  grid-area: b;
  color: #fabf2f;
`;

export const PriceCardLi1 = styled.p`
  font-size: 14px;
  text-align: start;
  list-style: none;
  width: 250px;
  grid-area: c;
`;

export const img = styled.img``;

export const PriceCardLi2 = styled.p`
  font-size: 14px;
  text-align: start;
  list-style: none;
  width: 250px;
  grid-area: d;
`;
export const PriceCardLi3 = styled.li`
  font-size: 14px;
  text-align: start;
  list-style: none;
  width: 250px;
  grid-area: e;
`;
export const PriceCardLi4 = styled.li`
  font-size: 14px;
  text-align: start;
  list-style: none;
  width: 250px;
  grid-area: f;
`;
export const PriceCardLi5 = styled.li`
  font-size: 14px;
  text-align: start;
  list-style: none;
  width: 250px;
  grid-area: g;
`;

export const BtnWrap = styled.div`
  grid-area: h;
  position: relative;
  width: 21.5%;
  width: 100%;
  height: 50px;
  margin: 0 -5px;
  color: #fabf2f;
`;

export const Button = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fabf2f;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  /* button:active {
           outline: none;
         }; */
  /* button:focus {
           outline: none;
         }; */
`;

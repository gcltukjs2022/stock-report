import { styled } from "styled-components";
import bg from "../../assets/landingBg.webp";

export const Section = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(3, 38, 49, 0.8);
  min-height: 100vh;
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div``;

import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const List = styled.div`
  min-width: 200px;
  border: 2px solid black;
`;

export const ItemWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  border-bottom: 1px solid black;
`;

export const Company = styled.div`
  display: flex;
  gap: 5px;
  width: 50%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Item = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 300px;
  height: 70px;
  color: white;
  background: blue;
  border: none;
  border-radius: 100px;
  margin: 0 auto;
  cursor: pointer;
`;

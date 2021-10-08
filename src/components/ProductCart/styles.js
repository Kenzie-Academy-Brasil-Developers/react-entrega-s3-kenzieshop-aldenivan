import styled from "styled-components";

export const ContainerCardCart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  width: 800px;
  height: 320px;
  color: black;

  img {
    width: 250px;
    height: 300px;
  }

  p {
    width: 350px;
    color: #808080;
    font-size: 16px;
    text-align: start;
  }

  span {
    font-weight: 700;
    margin: 10px;
  }
`;

export const Line = styled.hr`
  width: 798px;
  border: 1px solid #dcdcdc;
  background: white;
  margin: 0 auto;
`;

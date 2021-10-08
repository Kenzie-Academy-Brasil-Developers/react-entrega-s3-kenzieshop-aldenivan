import styled from "styled-components";

export const ContainerCardCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: 300px;
  height: 470px;
  margin-bottom: 10px;
  color: black;

  img {
    width: 250px;
    height: 300px;
  }

  hr {
    width: 95%;
    border: 1px solid #dcdcdc;
  }

  p {
    width: 90%;
    margin: 0 auto;
    color: #808080;
    font-size: 16px;
    text-align: start;
  }

  span {
    font-weight: 700;
    margin: 10px;
  }
`;

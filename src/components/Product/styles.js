import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: 300px;
  height: 470px;
  margin-bottom: 10px;
  color: black;
  -webkit-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.41);

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

  button {
    font-size: 16px;
    font-weight: 700;
    padding: 10px;
    border-radius: 8px;
    border: none;
    margin-bottom: 10px;
    background: #7fffd4;
  }

  button:hover {
    background: #87ceeb;
    color: white;
  }
`;

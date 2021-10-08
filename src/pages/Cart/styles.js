import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 1200px;
`;

export const ContainerCart = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
`;

export const TotalCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  background: lightgray;
  color: black;

  h3 {
    font-size: 20px;
    margin: 10px;
  }

  span {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 14px;
    }
  }

  button {
    font-size: 14px;
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

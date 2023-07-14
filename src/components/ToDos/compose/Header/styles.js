import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: none;
  transform: rotate(90deg);
  font-size: 1.5rem;
  color: #e6e6e6;
  cursor: pointer;
`;

export const Input = styled.input`
  border: none;
  padding: 16px;
  width: -webkit-fill-available;

  &:focus {
    outline: none;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 16px;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
`;

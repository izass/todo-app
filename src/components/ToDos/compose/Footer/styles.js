import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  border-top: 1px solid #e6e6e6;
  color: #777;
`;

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

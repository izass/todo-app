import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const FilterItem = styled.a`
  text-decoration: none;
  color: initial;
  padding: 3px 7px;
  border: 1px solid transparent;

  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
    border-radius: 3px;
  }
`
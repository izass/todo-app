import styled from "styled-components";

export const ToDosListItem = styled.div`
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  padding: 16px;
  margin: 0 -16px;

  &:last-child {
    border-bottom: none;
  }
`;

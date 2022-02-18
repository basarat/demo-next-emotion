import type { NextPage } from 'next';
import styled from '@emotion/styled';

const Button = styled.button`
  cursor: pointer;
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const Home: NextPage = () => {
  return (
    <Button>Styled by emotion</Button>
  );
}

export default Home;

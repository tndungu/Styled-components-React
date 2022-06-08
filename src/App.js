import { Login } from "./components/Login";
import { Info } from "./components/Info";
import {Logo } from './components/Logo';
import styled from 'styled-components'
import {StyleTesting} from './components/StyleTesting'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Container>
      <Login></Login>
      <Info></Info>
      <StyleTesting/>
      
    </Container>
  );
};

export default App;

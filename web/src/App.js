import GlobalStyle from './styles/GlobalStyle';
import { Container } from './styles';

import logo from './images/logo.svg';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <img src={logo} alt="Logo ezOrders"/>
      </Container>
    </>
  );
}

export default App;

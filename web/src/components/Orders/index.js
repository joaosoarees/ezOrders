import { Container, Card } from './styles';

export default function Orders() {
  return (
    <Container>
      <Card>
        <header>
          <h3>Pedido <strong>#91238</strong></h3>
          <small>MESA #01</small>
        </header>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec magna venenatis, rhoncus orci nec, euismod turpis.</p>

        <select>
          <option value="PENDING">Pendente</option>
          <option value="PREPARING">Preparando</option>
          <option value="DONE">Finalizado</option>
        </select>
      </Card>

      <Card>
        <header>
          <h3>Pedido <strong>#91238</strong></h3>
          <small>MESA #01</small>
        </header>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec magna venenatis, rhoncus orci nec, euismod turpis.</p>

        <select>
          <option value="PENDING">Pendente</option>
          <option value="PREPARING">Preparando</option>
          <option value="DONE">Finalizado</option>
        </select>
      </Card>
    </Container>
  );
}
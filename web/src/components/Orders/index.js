import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

import { Container, Card } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3005/orders');
      const orders = await res.json();
      setOrders(orders);
    })();

    const socket = socketIOClient('http://localhost:3005', {
      transports: ['websocket']
    });

    socket.on('newOrder', (order) => {
      setOrders(
        (prevState) =>  [order, ...prevState],
      );
    });
  }, []);

  return (
    <Container>
      {orders.map((order) => (
        <Card key={order._id} status={order.status}>
          <header>
            <h3>Pedido <strong>#{order._id.substr(0, 15)}</strong></h3>
            <small>MESA #{order.table}</small>
          </header>

          <p>{order.description}</p>

          <select value={order.status}>
            <option value="PENDING">Pendente</option>
            <option value="PREPARING">Preparando</option>
            <option value="DONE">Finalizado</option>
          </select>
        </Card>
      ))}
    </Container>
  );
}
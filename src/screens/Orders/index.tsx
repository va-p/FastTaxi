import React, { useEffect, useState } from 'react';
import {
  Container,
  OrderList,
  Title
} from './styles';

import { OrderListItem, OrderListItemProps } from '@components/OrderListItem';
import { Load } from '@components/Load';

import api from '../../api/api';

export function Orders() {
  const [orders, setOrders] = useState<OrderListItemProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchOrders() {
    const { data } = await api.get('order');

    if (!data) {
      setLoading(true);
    }
    else {
      setOrders(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [])

  if (loading) {
    return <Load />
  }

  return (
    <Container>
      <Title>Histórico de Pedidos</Title>

      <OrderList
        data={orders}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <OrderListItem
            data={item}
          />
        )}
      />
    </Container>
  );
}
import React, { useEffect, useState } from 'react';
import {
  Container,
  OrderList,
  Title
} from './styles';

import { CustomerOrderListItem, CustomerOrderListItemProps } from '../../components/CustomerOrderListItem';
import { Load } from '../../components/Load';

import { useAuth } from '../../contexts/auth';
import api from '../../api/api';

export function CustomerOrders() {
  const [orders, setOrders] = useState<CustomerOrderListItemProps[]>([]);
  const [loading, setLoading] = useState(true);
  const userData = useAuth();
  const user_id = userData.user.id;

  async function fetchOrders() {
    const { data } = await api.get('CustomerOrders', {
      params: {
        user_id: user_id
      }
    });

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
  console.log(orders);

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
          <CustomerOrderListItem
            data={item}
          />
        )}
      />
    </Container>
  );
}
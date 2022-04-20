import React, { useEffect, useState } from 'react';
import {
  Container,
  CustomerList,
  Title
} from './styles';

import { CustomerListItem, CustomerListItemProps } from '@components/CustomerListItem';
import { Load } from '@components/Load';

import api from '../../api/api';

export function Customers() {
  const [customers, setCustomers] = useState<CustomerListItemProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchCustomers() {
    const { data } = await api.get('user');

    if (!data) {
      setLoading(true);
    }
    else {
      setCustomers(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [])
  console.log(customers);

  if (loading) {
    return <Load />
  }

  return (
    <Container>
      <Title>Lista de Clientes</Title>

      <CustomerList
        data={customers}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CustomerListItem
            data={item}
          />
        )}
      />
    </Container>
  );
}
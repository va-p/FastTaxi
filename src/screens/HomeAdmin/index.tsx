import React from 'react';
import {
  Container,
  Form
} from './styles';

import { Button } from '@components/Button';

export function HomeAdmin({ navigation }) {

  return (
    <Container>
      <Form>

        <Button
          title='Lista de Clientes'
          onPress={() => navigation.navigate('Clientes')}
        />

        <Button
          title='Histórico de Pedidos'
          onPress={() => navigation.navigate('Histórico de Pedidos')}
        />

        <Button
          title='Visualizar meu Perfil'
          onPress={() => navigation.navigate('Perfil')}
        />

      </Form>
    </Container>
  );
}
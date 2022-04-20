import React from 'react';
import {
  Container,
  Title,
  Text
} from './styles';

import { Button } from '@components/Button';

export function Welcome({ navigation }) {
  return (
    <Container>
      <Title>Bem vindo à Fast Taxi!</Title>
      <Text>A maneira mais rápida e segura de chamar seu táxi!</Text>

      <Button
        title='Avançar'
        type='primary'
        onPress={() => navigation.navigate('SignIn')}
      />
    </Container>
  );
}
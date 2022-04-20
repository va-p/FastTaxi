import React from 'react';
import {
  Container,
  AvatarImage
} from './styles';

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  return (
    <Container
      colors={['#0E1647', '#0A1033']}
    >
      <AvatarImage
        source={{ uri: urlImage }}
      />
    </Container>
  );
}


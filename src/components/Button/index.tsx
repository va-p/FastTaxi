import React from 'react';
import {
  Container, Title, TypeProps
} from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
  title: string;
  type?: TypeProps;
}

export function Button({
  title,
  type = 'primary',
  ...rest
}: Props) {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  );
}
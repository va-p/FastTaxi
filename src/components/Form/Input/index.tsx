import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps
} from 'react-native';

import { styles } from './styles';

interface Props extends TextInputProps {
  label: string;
}

export function Input({ label, ...rest }: Props) {
  return (
    <>
      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput
        style={styles.input}
        {...rest}
      />
    </>
  );
}
import React from 'react';
import {
  TextInputProps,
  View,
  Text
} from 'react-native';

import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';

import { styles } from './styles';

interface Props extends TextInputProps {
  label: string;
  control: Control;
  name: string;
  error: string;
}

export function InputForm({ label, control, name, error, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            {error && <Text style={styles.errorMessage}> {error} </Text>}

            <Input
              label={label}
              onChangeText={onChange}
              value={value}
              {...rest}
            />
          </>
        )}
        name={name}
      />

    </View>
  );
}
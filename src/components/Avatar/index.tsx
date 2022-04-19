import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { styles } from './styles';

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  //const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient 
      style={styles.container}
      colors={['#0E1647', '#0A1033']}
      >
      <Image 
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>
  )

}
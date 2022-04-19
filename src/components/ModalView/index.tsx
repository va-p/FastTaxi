import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  Text
} from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
  title: string;
}

export function ModalView({ children, closeModal, title, ...rest }: Props) {
  const { text_dark } = theme.colors;

  return (
    <Modal
      transparent
      animationType='slide'
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.overlay}>

        <View style={styles.header}>
          <BorderlessButton onPress={closeModal}>
            <Ionicons
              name='close'
              size={RFValue(24)}
              color={text_dark}
            />
          </BorderlessButton>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>

        <View style={styles.container}>
          {children}
        </View>

      </View>
    </Modal>
  );
}
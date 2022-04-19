import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import { MapScreenNavigation } from '../../components/MapScreenNavigation';
import { Map } from '../../components/Map';

import { styles } from './styles';

export function MapRide() {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Map />
      <View style={styles.addressDestination}>
        <MapScreenNavigation />
      </View>
    </KeyboardAvoidingView>
  );
}
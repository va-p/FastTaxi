import React from 'react';
import {
  Platform
} from 'react-native';
import {
  AddressDestinationContainer,
  Container,
} from './styles';

import { MapScreenNavigation } from '@components/MapScreenNavigation';
import { Map } from '@components/Map';

export function MapRide() {

  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Map />
      <AddressDestinationContainer>
        <MapScreenNavigation />
      </AddressDestinationContainer>
    </Container>
  );
}
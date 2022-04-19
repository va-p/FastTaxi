import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DestinationAddressCard } from '../DestinationAddressCard';
import { WaitingAcceptOrder } from '../WaitingAcceptOrderCard';
import { OrderOptionsCard } from '../OrderOptionsCard';

const Stack = createNativeStackNavigator();

export function MapScreenNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen
        name='Endereço de Destino'
        component={DestinationAddressCard}
      />

      <Stack.Screen
        name='Opções do Pedido'
        component={OrderOptionsCard}
      />

      <Stack.Screen
        name='Confirmando Pedido'
        component={WaitingAcceptOrder}
      />

    </Stack.Navigator>
  );
}
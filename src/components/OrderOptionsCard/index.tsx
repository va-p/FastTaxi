import React from 'react';
import {
  Container,
  Header,
  BackButton,
  IconBack,
  Title,
  Body,
  TravelDistance,
  TravelTime,
  TravelPrice
} from './styles';
import {
  Alert
} from 'react-native';

import { useAuth } from '../../contexts/auth';

import { useSelector } from 'react-redux';

import { Button } from '../Button';

import { selectDestination, selectOrigin, selectTravelTimeInfo } from '../../slices/navigationSlice';

import api from '../../api/api';

export function OrderOptionsCard({ navigation, navigation: { goBack, navigate } }) {
  const userData = useAuth();
  const user_id = userData.user.id;
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const travelTimeInformation = useSelector(selectTravelTimeInfo);
  const surgeChargeRate = 1.5;
  const value = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(
    ((travelTimeInformation?.duration.value || 0) *
      surgeChargeRate) /
    100 + 10
  );

  async function handleMakeOrder() {
    const newOrder = {
      description_origin: origin.description,
      latitude_origin: origin.location.lat,
      longitude_origin: origin.location.lng,
      description_destination: destination.description,
      latitude_destination: destination.location.lat,
      longitude_destination: destination.location.lng,
      distance_text: travelTimeInformation.distance.text,
      distance_value: travelTimeInformation.distance.value,
      duration_text: travelTimeInformation.duration.text,
      duration_value: travelTimeInformation.duration.value,
      value: value,
      order_accepted: false,
      client_user_id: userData.user.id,
    }

    try {
      // 1 - Records data for the newly made order in the DB
      const orderData = await api.post('order', newOrder);

      // 2 - Gets data from the newly made order
      const responseOrderData = await api.get('CustomerPendingOrder', {
        params: {
          user_id: user_id
        }
      });

      // 3 - Records the user ID and newly made order ID in the "tmPush" table
      const newPush = {
        user_id: userData.user.id,
        order_id: responseOrderData.data.id
      }
      const tmPushData = await api.post('tmpush', newPush)

      Alert.alert('Pedido realizado com sucesso! Aguarde até que um entregador aceite seu pedido', '', [{ text: 'OK', onPress: () => navigation.navigate('Confirmando Pedido') }]);
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível realizar o pedido. Por favor, tente novamente em instantes.');
    }
  }

  return (
    <Container>
      <Header>
        <BackButton>
          <IconBack
            name='chevron-back'
            onPress={() => goBack()}
          />
        </BackButton>
        <Title >Detalhes da corrida</Title>
      </Header>

      <Body>
        <TravelDistance >
          Distância - {travelTimeInformation?.distance.text}
        </TravelDistance>

        <TravelTime>
          Tempo estimado - {travelTimeInformation?.duration.text}
        </TravelTime>

        <TravelPrice>
          Valor - {value}
        </TravelPrice>

        <Button
          title='Chamar Entregador'
          onPress={handleMakeOrder}
        />
      </Body>
    </Container>
  );
}
import React from 'react';
import {
  Container,
  AddressContainer
} from './styles'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';

import { NavFavorites } from '../NavFavorites';

import { selectDestination, setDestination } from '../../slices/navigationSlice';

import { GOOGLE_MAPS_API_KEY_ANDROID } from '@env';

export function DestinationAddressCard({ navigation }) {
  const dispatch = useDispatch();
  const destination = useSelector(selectDestination);

  return (
    <Container>
      <AddressContainer>
        <GooglePlacesAutocomplete
          placeholder='Endereço de destino'
          minLength={2}
          debounce={400}
          enablePoweredByContainer={false}
          nearbyPlacesAPI='GooglePlacesSearch'
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description
              })
            );

            navigation.navigate('Opções do Pedido');
          }}
          fetchDetails={true}
          query={{
            key: 'AIzaSyB2Pi6HeRAshcq8dsa3fFwwjifa6vhXRwg',
            language: 'pt-BR',
            components: 'country:br'
          }}
          styles={{
            container: {
              flex: 0,
              borderRadius: 15
            },
            textInput: {
              fontSize: 16,
              backgroundColor: '#D5DDE0',
              color: '#353839',
              borderRadius: 15
            },
            listView: {
              borderRadius: 15
            },
            row: {
              backgroundColor: '#D5DDE0',
              color: '#8F8F8F'
            }
          }}
        />
        <NavFavorites navigation />
      </AddressContainer>
    </Container>
  );
}
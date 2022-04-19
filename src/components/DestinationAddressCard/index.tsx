import React from 'react';
import {
  View,
  SafeAreaView
} from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';

import { NavFavorites } from '../NavFavorites';

import { selectDestination, setDestination } from '../../slices/navigationSlice';

import { GOOGLE_MAPS_API_KEY_ANDROID } from '@env';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function DestinationAddressCard({ navigation }) {
  const dispatch = useDispatch();
  const destination = useSelector(selectDestination);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addressContainer}>
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

              backgroundColor: theme.colors.input_text,
              color: theme.colors.text_dark,
              borderRadius: 15
            },
            listView: {
              borderRadius: 15
            },
            row: {
              backgroundColor: theme.colors.input_text,
              color: theme.colors.text
            }
          }}
        />
        <NavFavorites navigation />
      </View>
    </SafeAreaView>
  );
}
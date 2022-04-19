import React from 'react';
import {
  View,
  Platform,
  KeyboardAvoidingView
} from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { NavFavorites } from '../../components/NavFavorites';
import { useDispatch, useSelector } from 'react-redux';
import { Map } from '../../components/Map';

import { GOOGLE_MAPS_API_KEY_ANDROID } from '@env';

import { setOrigin, selectOrigin, setDestination } from '../../slices/navigationSlice';

import { styles } from './styles';

export function Home({ navigation }) {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>

      <Map />

      <View style={styles.addressContainer}>
        <GooglePlacesAutocomplete
          placeholder='Onde será a retirada?'
          minLength={2}
          debounce={400}
          enablePoweredByContainer={false}
          nearbyPlacesAPI='GooglePlacesSearch'
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));

            navigation.navigate('Mapa')
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
              color: '#D5DDE0'
            }
          }}
        />
        <NavFavorites navigation />
      </View>
    </KeyboardAvoidingView >
  );
}
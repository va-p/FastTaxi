import React, { useEffect, useRef, useState } from 'react';
import {
  Alert
} from 'react-native';

import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker, Region } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';

import {
  selectOrigin,
  selectDestination,
  setTravelTimeInfo
} from '../../slices/navigationSlice';

import { GOOGLE_MAPS_API_KEY_ANDROID } from '@env';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

const initialRegion = {
  latitude: -21.7642,
  longitude: -43.3496,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

export function Map() {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef<MapView>(null);
  const [region, setRegion] = useState<Region>();

  async function getUserCurrentPosition() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert("Ops!", "Permissão de acesso a localização em primeiro plano negada. Por favor, conceda a permissão de localização em primeiro plano para que o App possa obter sua localização atual.");
      }
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });

      setRegion({ latitude, longitude, latitudeDelta: 100, longitudeDelta: 100 });

    } catch (error) {
      console.log(error);
      Alert.alert("Ops!", "Não foi possível obter sua localização atual.");
    }
  };

  useEffect(() => {
    getUserCurrentPosition();
  }, []);

  // Zoom & fit to markers
  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      animated: true
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=meters&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY_ANDROID}`;
      const response = await fetch(url);
      const data = await response.json();
      dispatch(setTravelTimeInfo(data.rows[0].elements[0]));
    };

    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_API_KEY_ANDROID]);

  return (
    <MapView
      provider='google'
      ref={mapRef}
      initialRegion={initialRegion}
      region={{
        latitude: origin?.location?.lat || region?.latitude || -21.7642,
        longitude: origin?.location?.lng || region?.longitude || -43.3496,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      showsUserLocation={true}
      userLocationPriority='high'
      showsPointsOfInterest={true}
      style={styles.mapView}
    >

      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY_ANDROID}
          strokeWidth={3}
          strokeColor={theme.colors.primary}
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title='Endereço de coleta'
          description={origin.description}
          identifier='origin'
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title='Endereço de destino'
          description={destination.description}
          identifier='destination'
        />
      )}
    </MapView>
  );
}
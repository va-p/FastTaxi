import React from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native';

import { Point } from 'react-native-google-places-autocomplete';
import { RectButton } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import {
  selectOrigin,
  setDestination,
  setOrigin,
} from '../../slices/navigationSlice';

import { styles } from './styles';

type FavoritesData = {
  id: string;
  name: string;
  icon: string;
  location: Point;
  description: string;
}[];

const favoritesData: FavoritesData = [
  {
    id: '234',
    name: 'Casa',
    icon: 'home',
    location: { lat: -21.766650, lng: -43.342748 },
    description: "Rua Julieta Andrada, Granbery",
  },
  {
    id: '567',
    name: 'Trabalho',
    icon: 'briefcase',
    location: { lat: -21.766650, lng: -43.342748 },
    description: "Avenida Barão do Rio Branco, Bom Pastor",
  },
];

export function NavFavorites({ navigation }, { shouldSetOrigin }: { shouldSetOrigin?: boolean }) {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);

  return (
    <View style={styles.container}>

      <Text style={styles.label}>
        Favoritos:
      </Text>

      <FlatList
        data={favoritesData.filter(
          // Checks to see if Home or Work is already selected
          (item) => shouldSetOrigin || origin?.location !== item.location
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={styles.separator}
          />
        )}
        renderItem={({ item: { name, icon, location, description } }) => (
          <RectButton
            style={styles.content}
            onPress={() => {
              if (shouldSetOrigin) {
                dispatch(
                  setOrigin({
                    location,
                    description,
                  })
                );
                navigation.navigate('Endereço de Destino');
              } else {
                dispatch(
                  setDestination({
                    location,
                    description,
                  })
                );
                navigation.navigate('Opções do Pedido');
              }
            }}
          >
            <View style={styles.address}>
              <Ionicons
                name={icon}
                type='ionicon'
                style={styles.icon}
              />

              <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
              </View>
            </View>
          </RectButton>
        )}
      />
    </View>
  );
};
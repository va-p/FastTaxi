import React from 'react';
import {
  View
} from 'react-native';
import { UserProfileHeader } from '../../components/UserProfileHeader';

import { styles } from './styles';

export function UserProfile() {
  return (
    <View style={styles.container}>

      <UserProfileHeader />

    </View>
  );
}
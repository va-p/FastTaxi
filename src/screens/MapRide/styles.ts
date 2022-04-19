import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addressDestination: {
    height: '35%',
    justifyContent: 'center',
    paddingVertical: '1%'
  },
  title: {
    fontSize: RFValue(16)
  }
});
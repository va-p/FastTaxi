import { StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  addressContainer: {
    height: '35%',
    padding: '5%'
  },
  inputAddress: {
    height: 50,
    justifyContent: 'center',
    padding: 10,
    //marginBottom: 15,
    fontSize: RFValue(14),
    backgroundColor: '#D5DDE0',
    color: '#8F8F8F',
    borderRadius: 15
  }
});
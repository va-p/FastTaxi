import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  errorMessage: {
    fontSize: RFValue(14),
    paddingLeft: 5,
    color: '#DA251C'
  }
});
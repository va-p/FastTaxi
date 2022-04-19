import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  label: {
    paddingLeft: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },

  input: {
    width: '100%',
    height: 50,
    padding: 10,
    marginBottom: 15,
    fontSize: RFValue(14),
    backgroundColor: '#D5DDE0',
    color: '#353839',
    borderRadius: 15
  }
});
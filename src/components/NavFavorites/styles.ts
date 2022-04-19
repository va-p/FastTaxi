import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    paddingLeft: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  separator: {
    height: 10,
  },
  content: {
    padding: 10,
    backgroundColor: '#D5DDE0',
    borderRadius: 15
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  icon: {
    fontSize: RFValue(20),
    color: '#9387C0'
  },
  title: {
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  description: {
    paddingLeft: 10
  }
});
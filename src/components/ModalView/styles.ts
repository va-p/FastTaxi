import { StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  header: {
    width: '100%',
    height: 50,
    marginTop: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: RFValue(20),
    color: '#353839'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});
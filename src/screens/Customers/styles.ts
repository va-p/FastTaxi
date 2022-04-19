import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { ListDivider } from '../../components/ListDivider';

export const Container = styled.View`
  width: 100%;
  padding: ${RFPercentage(2)}px;
`;
export const Title = styled.Text`
  margin-top: ${getStatusBarHeight() + RFValue(30)}px;
  padding-bottom: ${RFPercentage(2)}px;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;
export const CustomerList = styled(
  FlatList as new () => FlatList
).attrs({
  showsVerticalScrollIndicator: false,
  itemSeparatorComponent: () => (ListDivider),
  contentContainerStyle: {
    width: '100%',
    paddingBottom: getBottomSpace()
  }
})``;
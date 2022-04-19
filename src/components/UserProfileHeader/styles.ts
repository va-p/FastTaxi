import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: 200px;
  align-items: center;
  padding-top: ${getStatusBarHeight() + RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const GreetingContainer = styled.View`
  flex-direction: row;
`;
export const Greeting = styled.Text`
  margin-right: 5px;
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.highlight};
`;
export const UserName = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.highlight};
`;
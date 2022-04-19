import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 5%;
  background-color: ${({ theme }) => theme.colors.shape};
`;
export const Form = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(30)}px;
`;
export const ContainerTextSign = styled.View`
  align-items: center;
  margin-top: 3%;
`;
export const TextSignin = styled.Text`
`;
export const LinkSignin = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
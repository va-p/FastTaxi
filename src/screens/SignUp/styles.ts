import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  min-height: 900px;

  padding: 5%;
  background-color: ${({ theme }) => theme.colors.shape};
`;
export const Form = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(30)}px;
`;
export const ContainerTerms = styled.Text`
  text-align: center;
`;
export const TextTerms = styled.Text``;
export const LinkTerms = styled.Text`
  font-weight: bold;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
`;
export const LinkPolicyPrivacy = styled.Text`
  font-weight: bold;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
`;
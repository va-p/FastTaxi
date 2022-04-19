import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5%;
  background-color: ${({ theme }) => theme.colors.shape};
`;
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;
export const Text = styled.Text`
  margin-bottom: 10%;
`;
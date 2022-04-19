import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 5%;
`;
export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
  }
})`
  margin-top: ${getStatusBarHeight() + RFValue(30)}px;
`;
export const UpdateDate = styled.Text`
  text-align: center;
`;
export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(28)}px;
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;
export const SubSubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_dark};
`;
export const Text = styled.Text`
`;
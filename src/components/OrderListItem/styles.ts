import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  padding: ${RFValue(5)}px;
  margin-bottom: ${RFPercentage(1)}px;
  background-color: ${({ theme }) => theme.colors.input_text};
  border-radius: 15px;
`;
export const UserInformationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const UserName = styled.Text`
  font-weight: bold;
`;
export const CompanyName = styled.Text`
  font-weight: bold;
`;
export const DateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFPercentage(1)}px;
`;
export const Date = styled.Text`
  font-size: ${RFValue(12)}px;
`;
export const Value = styled.Text`
`;
export const DurationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFPercentage(1)}px;
`;
export const Distance = styled.Text`
`;
export const Duration = styled.Text`
`;
export const AddressContainer = styled.View`
`;
export const TitleOriginAddress = styled.Text`
`;
export const OriginAddress = styled.Text`
  margin-bottom: ${RFPercentage(1)}px;
`;
export const TitleDestinationAddress = styled.Text`
`;
export const DestinationAddress = styled.Text`
`;
export const PaymentMethod = styled.Text`
`;
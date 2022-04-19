import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  padding: ${RFValue(5)}px;
  margin-bottom: ${RFPercentage(1)}px;
  background-color: ${({ theme }) => theme.colors.input_text};
  border-radius: 15px;
`;
export const ContainerAvatar = styled.View`
  justify-content: center;
  padding-right: ${RFValue(5)}px;
`;
export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 5px;
`;
export const ContainerUserInformation = styled.View`
`;
export const UserName = styled.Text`
`;
export const UserLastName = styled.Text`
`;
export const CompanyName = styled.Text`
`;
export const CNPJ = styled.Text`
`;




export const Date = styled.Text`
  font-size: ${RFValue(12)}px;
`;
export const Value = styled.Text`
`;
export const ContainerDuration = styled.View`
  flex-direction: row;
  
  justify-content: space-between;

  margin-bottom: ${RFPercentage(1)}px;
`;
export const Distance = styled.Text`
`;
export const Duration = styled.Text`
`;
export const ContainerAddress = styled.View`
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
import styled from 'styled-components/native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  padding: 5%;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5%;
`;
export const BackButton = styled(BorderlessButton)`
`;
export const IconBack = styled(Ionicons)`
  font-size: ${RFValue(18)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  padding-right: 25%;
`;
export const Body = styled.View`
`;
export const TravelDistance = styled.Text`

`;
export const TravelTime = styled.Text`
`;
export const TravelPrice = styled.Text`
`;
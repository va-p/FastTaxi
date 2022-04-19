import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export type TypeProps = 'primary' | 'secondary';

type ContainerProps = {
  type?: TypeProps;
}

export const Container = styled(RectButton) <ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: ${({ theme, type }) => type === 'primary' ? theme.colors.primary : theme.colors.secondary};
  border-radius: 15px;
`;
export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;
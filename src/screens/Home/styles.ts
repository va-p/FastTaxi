import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;
export const AddressContainer = styled.View`
  height: 35%;
  padding: 5%;
`;
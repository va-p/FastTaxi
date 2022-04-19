import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-between;
  padding: 5%;
  background-color: ${({ theme }) => theme.colors.shape};
`;
export const Form = styled.View`
  margin-top: 50%;
`;
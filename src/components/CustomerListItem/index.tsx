import React from 'react';
import {
  Container,
  ContainerAvatar,

  ContainerUserInformation,
  UserName,
  UserLastName,
  CompanyName,
  CNPJ
} from './styles';

import { Avatar } from '../Avatar';

export interface CustomerListItemProps {
  name: string;
  last_name: string;
  company_name?: string;
}

interface Props {
  data: CustomerListItemProps;
}

export function CustomerListItem({ data }: Props) {
  return (
    <Container>
      <ContainerAvatar>
        <Avatar urlImage='https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png' />
      </ContainerAvatar>

      <ContainerUserInformation>
        <UserName>Nome: {data.name}</UserName>
        <UserLastName>Sobrenome: {data.last_name}</UserLastName>
      </ContainerUserInformation>
    </Container>
  );
}
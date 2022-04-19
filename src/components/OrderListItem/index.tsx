import React from 'react';
import {
  Container,
  UserInformationContainer,
  UserName,
  CompanyName,
  AddressContainer,
  DateContainer,
  DurationContainer,
  Date,
  DestinationAddress,
  Distance,
  Duration,
  OriginAddress,
  Value
} from './styles';

export interface OrderListItemProps {
  created_at: string;
  description_origin: string;
  description_destination: string;
  distance_text: string;
  duration_text: string;
  payment_method: string;
  value: string;
}

interface Props {
  data: OrderListItemProps;
}

export function OrderListItem({ data }: Props) {
  return (
    <Container>
      <UserInformationContainer>
        <UserName>Nome do Cliente</UserName>
        <CompanyName>Empresa do Cliente</CompanyName>
      </UserInformationContainer>

      <DateContainer>
        <Date>{data.created_at}</Date>
        <Value>{data.value}</Value>
      </DateContainer>

      <DurationContainer>
        <Distance>{data.distance_text}</Distance>
        <Duration>{data.duration_text}</Duration>
      </DurationContainer>

      <AddressContainer>
        <OriginAddress>{data.description_origin}</OriginAddress>
        <DestinationAddress>{data.description_destination}</DestinationAddress>
      </AddressContainer>


    </Container>
  );
}